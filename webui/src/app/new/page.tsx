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
import { useRouter } from "next/router";

const { TextArea } = Input;
const { Content } = Layout;

const App = () => {
  const minItems = 1;
  const [form] = Form.useForm();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleButtonClick = () => {
    // 在按钮点击后，禁用按钮
    setButtonDisabled(true);
  };

  // autocomplete
  const { searchValue, options, search } = useEmployeesAutocomplete();

  async function onFinish(values: any) {
    // console.log("finish, call api?");
    const resp = await itemApiClient.save(values);
    console.log(resp);
    // 完成才取消按鈕鎖定
    setButtonDisabled(false);
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
              placeholder="e.g. 22001"
            />
          </Form.Item>

          <Form.Item label="姓名" name="username">
            <Input readOnly={true} bordered={false} />
          </Form.Item>

          <Form.Item label="物料">
            <Form.List
              name="items"
              initialValue={[{ itemno: "", qty: 0 }]}
              rules={[
                {
                  validator: (_, values) => {
                    const formValues = form.getFieldValue("items");

                    if (formValues && formValues.length < minItems) {
                      return Promise.reject(
                        new Error(`至少需要${minItems}個物料項目`)
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
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "itemno"]}
                        rules={[{ required: true, message: "料號為必填欄位" }]}
                      >
                        <Input placeholder="料號" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "qty"]}
                        rules={[
                          { required: true, message: "實領數量為必填欄位" },
                        ]}
                      >
                        <InputNumber
                          min={1}
                          placeholder="實領數量"
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
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

          <Form.Item label="成本中心" name="cost_dept">
            <Input placeholder="非必填" />
          </Form.Item>

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
            <Button
              type="primary"
              htmlType="submit"
              ghost
              onClick={handleButtonClick}
              disabled={isButtonDisabled}
            >
              確認新增
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};

export default App;
