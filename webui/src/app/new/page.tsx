"use client";

import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  Breadcrumb,
  Button,
  Checkbox,
  Form,
  Input,
  Layout,
  Menu,
  theme,
} from "antd";
import itemApiClient from "./lib/ItemApiClient";
import syscoWebClient from "@/lib/SyscoClient/syscoWebClient";
import { unknown } from "zod";
import { useEmployeesAutocomplete } from "./hooks/useEmployeesAutocomplete";

const { TextArea } = Input;
const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [form] = Form.useForm();

  // autocomplete
  const { searchValue, options, search } = useEmployeesAutocomplete();

  async function onFinish(values: any) {
    // console.log("finish, call api?");
    const resp = await itemApiClient.save(values);

    console.log(resp);
  }

  function onFinishFailed() {
    console.log("pop msg?");
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
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: "80vh",
          background: colorBgContainer,
        }}
      >
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
            <Input readOnly={true} />
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
            <Button type="primary" htmlType="submit" ghost>
              確認新增
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};

export default App;
