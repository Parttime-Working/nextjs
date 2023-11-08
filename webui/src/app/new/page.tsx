"use client";

import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Form,
  Input,
  InputNumber,
  Layout,
  Space,
  message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import itemApiClient from "./lib/ItemApiClient";
import { useEmployeesAutocomplete } from "./hooks/useEmployeesAutocomplete";
import { useRouter } from "next/navigation";
import { useItemSpecAutocomplete } from "./hooks/useItemSpecsAutocomplete";

const { TextArea } = Input;
const { Content } = Layout;

const App = () => {
  const minItems = 1;
  const maxItems = 15;
  const [form] = Form.useForm();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();

  // autocomplete
  const { searchValue, options, search } = useEmployeesAutocomplete();
  const {
    searchValue: itemValue,
    options: itemOptions,
    search: searchItem,
  } = useItemSpecAutocomplete();

  const handleAutoBlur = () => {
    if (options.length > 0) {
      const firstValue = options[0].value;
      form.setFieldValue("empno", firstValue);
      onSelect(firstValue);
    }
  };

  const getDynamicFieldBlurHandler = (name: [string, number, string]) => {
    return async () => {
      const fieldValue = form.getFieldValue(name);
      console.log(fieldValue);
      await searchItem(fieldValue);
      if (fieldValue.length !== 0) {
        if (itemOptions.length > 0 && /^[a-zA-Z0-9]+$/.test(fieldValue)) {
          const firstValue = itemOptions[0].value;
          console.log(firstValue);
          form.setFieldValue(name, firstValue);
          onSelectItem(firstValue, name);
        } else {
          form.setFieldValue(name, "");
        }
      }
    };
  };

  async function onFinish(values: any) {
    // console.log("finish, call api?");
    const resp = await itemApiClient.save(values);
    console.log(resp);
    // 完成才取消按鈕鎖定
    setButtonDisabled(false);
    router.push("/");
  }

  function onFinishFailed(values: any) {
    console.log(values);
    // 報錯
    const msgStr = values?.errorFields?.[0]?.errors?.[0] ?? "";
    message.error(msgStr);
    setButtonDisabled(false);
  }

  const onSelect = (data: string) => {
    const target = options.find((option) => option.value === data);

    // setCname
    if (!target) {
      // should not happen
      return;
    }

    form.setFieldValue("username", target.cname);
    form.setFieldValue("rcv_dept", target.rcv_dept);
  };

  const onSelectItem = (data: string, name?: [string, number, string]) => {
    console.log(data);
    const target = itemOptions.find((option) => option.value === data);
    console.log(target);

    // setCname
    if (!target) {
      // should not happen
      return;
    }
    // 如果 name 存在
    if (name) {
      name[2] = "item_spec";
      form.setFieldValue(name, target.item_spec);
    }
  };

  const onAddItem = () => {
    if (form.getFieldValue("items").length < maxItems) {
      form.setFieldsValue({
        items: [...form.getFieldValue("items"), { itemno: "", qty: "" }],
      });
    } else {
      message.error(`已經超過${maxItems}個料號項目，若有需求請另外填單`);
    }
  };

  const onSubmit = () => {
    // 在按鈕點擊後，禁用按鈕避免重複送出
    form.submit();
    setButtonDisabled(true);
  };

  const onReset = () => {
    setButtonDisabled(false);
    form.resetFields();
  };

  return (
    <>
      <Content className="mt-6 p-6 bg-white">
        {/* form */}
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateTrigger="onSubmit"
        >
          <Form.Item
            name="empno"
            label="工號"
            rules={[
              {
                required: true,
                message: "請輸入工號!",
              },
            ]}
          >
            <AutoComplete
              value={searchValue}
              options={options}
              // style={{ width: 200 }}
              onSelect={onSelect}
              // onSearch={(text) => setOptions(getPanelValue(text))}
              onChange={search}
              onBlur={handleAutoBlur}
              placeholder="e.g. 22001"
            />
          </Form.Item>

          <Form.Item label="姓名" name="username">
            <Input readOnly={true} bordered={false} />
          </Form.Item>

          <Form.Item label="領料內容">
            <Form.List
              name="items"
              initialValue={[{ itemno: "", qty: "" }]}
              rules={[
                {
                  validator: (_, values) => {
                    const formValues = form.getFieldValue("items");

                    if (formValues && formValues.length < minItems) {
                      return Promise.reject(
                        new Error(`至少需要${minItems}個料號項目`)
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div key={key}>
                      <Space
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "itemno"]}
                          rules={[
                            {
                              required: true,
                              message: "料號為必填欄位",
                            },
                            {
                              pattern: /^[a-zA-Z0-9]+$/,
                              message: "料號只能是英文或數字",
                            },
                          ]}
                          initialValue={itemValue}
                          validateTrigger={["onChange"]}
                        >
                          <AutoComplete
                            options={itemOptions}
                            onSelect={(value, options) =>
                              onSelectItem(value, ["items", name, "itemno"])
                            }
                            onChange={(value) => {
                              const onlyAlphabetNumber = /^[a-zA-Z0-9]+$/.test(
                                value
                              );
                              if (!onlyAlphabetNumber) {
                                return;
                              }
                              searchItem(value);
                            }}
                            onBlur={getDynamicFieldBlurHandler([
                              "items",
                              name,
                              "itemno",
                            ])}
                            placeholder="料號"
                            style={{ width: "200px" }}
                            popupMatchSelectWidth={false}
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "qty"]}
                          rules={[
                            { required: true, message: "數量為必填欄位" },
                          ]}
                        >
                          <InputNumber
                            min={1}
                            placeholder="數量"
                            style={{ width: "100%" }}
                          />
                        </Form.Item>

                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(name)}
                          />
                        ) : null}
                      </Space>
                      <div
                        style={{
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "item_spec"]}
                          rules={[{ required: true, message: "料號不存在" }]}
                        >
                          <TextArea
                            rows={2}
                            placeholder="品名規格"
                            readOnly={true}
                            style={{ resize: "none" }}
                          />
                        </Form.Item>
                      </div>
                    </div>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => onAddItem()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>

          {/* <Form.Item label="成本中心" name="cost_dept">
            <Input placeholder="非必填" />
          </Form.Item> */}

          <Form.Item label="請領單位" name="rcv_dept">
            <Input placeholder="非必填" />
          </Form.Item>

          <Form.Item label="說明備註" name="remark">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Space size={16}>
              <Button
                type="primary"
                htmlType="button"
                ghost
                onClick={onSubmit}
                disabled={isButtonDisabled}
              >
                確認新增
              </Button>
              <Button htmlType="button" onClick={onReset} danger>
                清除重填
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};

export default App;
