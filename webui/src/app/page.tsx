"use client";

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Badge, Breadcrumb, Dropdown, Space, Table, Layout, Spin } from "antd";
import useSearchForms from "./hooks/useSearchForms";
import {
  Form,
  Item,
} from "@/lib/ApiGatewayClient/services/responses/FormSearchResponseSchema";

const { Content } = Layout;

const ViewData: React.FC = () => {
  const { forms, isLoading, searchParams, setSearchParams, pagination } =
    useSearchForms();

  const columns: TableColumnsType<Form> = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "EmpNo", dataIndex: "empno", key: "empno" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "RCVDept", dataIndex: "rcv_dept", key: "rcv_dept" },
    { title: "Remark", dataIndex: "remark", key: "remark" },
    { title: "CreatedAt", dataIndex: "created_at", key: "created_at" },
    { title: "Process", dataIndex: "process", key: "process" },
    { title: "CostDept", dataIndex: "cost_dept", key: "cost_dept" },
  ];

  const expandedRowRender = ({ items }: Form) => {
    const columns: TableColumnsType<Item> = [
      // { title: "Id", dataIndex: "id", key: "id" },
      { title: "料號", dataIndex: "itemno", key: "itemno" },
      { title: "數量", dataIndex: "qty", key: "qty" },
      // { title: "Formid", dataIndex: "formid", key: "formid" },
    ];

    return <Table columns={columns} dataSource={items} pagination={false} />;
  };

  return (
    <Content className="mt-6 p-6 bg-white">
      <Table
        columns={columns}
        dataSource={forms}
        onChange={(pagination) => {
          setSearchParams({
            ...searchParams,
            page: pagination.current,
          });
        }}
        loading={isLoading}
        pagination={{
          current: pagination.page,
          defaultCurrent: 1,
          total: pagination.total,
          pageSize: pagination.pageSize,
          defaultPageSize: 25,
        }}
        expandable={{ expandedRowRender }}
      />
    </Content>
  );
};

export default ViewData;
