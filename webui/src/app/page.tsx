"use client";

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import {
  Badge,
  Breadcrumb,
  Dropdown,
  Space,
  Table,
  Layout,
  Tooltip,
} from "antd";
import { CheckOutlined, SyncOutlined } from "@ant-design/icons";
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
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    { title: "工號", dataIndex: "empno", key: "empno" },
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "請領單位", dataIndex: "rcv_dept", key: "rcv_dept" },
    { title: "備註", dataIndex: "remark", key: "remark" },
    {
      title: "填單日期",
      dataIndex: "created_at",
      key: "created_at",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "狀態",
      dataIndex: "process",
      key: "process",
      render: (text, record) => (
        <span>
          {record.process === 1 ? (
            <Tooltip title="已送簽">
              <CheckOutlined style={{ fontSize: "18px", color: "#41ea2e" }} />
            </Tooltip>
          ) : (
            <Tooltip title="待送簽">
              <SyncOutlined style={{ fontSize: "18px", color: "#139add" }} />
            </Tooltip>
          )}
        </span>
      ),
    },
    // { title: "成本中心", dataIndex: "cost_dept", key: "cost_dept" },
  ];

  const expandedRowRender = ({ items }: Form) => {
    const columns: TableColumnsType<Item> = [
      // { title: "Id", dataIndex: "id", key: "id" },
      { title: "料號", dataIndex: "itemno", key: "itemno" },
      { title: "物料規格", dataIndex: "item_spec", key: "item_spec" },
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
        rowKey="id"
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
      />
    </Content>
  );
};

export default ViewData;
