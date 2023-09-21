import { Layout, Menu, MenuProps } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useMenu } from "@/app/new/hooks/useMenu";
import useCollapse from "@/app/new/hooks/useCollapse";

// Layout is an object
// Layout.Sider is component

// rename to avoid name conflict
// Component use CamelName
// const { Sider: AntdSider } = Layout;
// AntdSider === Layout.Sider

// Just like
// const L = {
//   S: () => {
//     return <>I am component</>;
//   },
// };

// type ThisIsType = { S: React.FC }
// const { S: ThisIsRenameS }: ThisIsType = L;


const items: MenuProps["items"] = [
  {
    key: `/`,
    icon: <DashboardOutlined />,
    label: "Home",
  },
  // {
  //   key: `group1`,
  //   icon: <DashboardOutlined />,
  //   label: "group test",
  //   children: [
  //     {
  //       key: `/new`,
  //       icon: <UserOutlined />,
  //       label: "新增補單",
  //     },
  //   ],
  // },
  {
    key: `/new`,
    icon: <UserOutlined />,
    label: "新增補單",
  },
];

const Sider = () => {
  const { selectedKeys, openKeys, onItemSelected, onOpenChange } = useMenu();
  const { collapsed, handleCollapse } = useCollapse();

  return (
    //
    <Layout.Sider
      // collapsible
      width={200}
      collapsed={collapsed}
      onCollapse={handleCollapse}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/"]}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
        onSelect={onItemSelected}
        onOpenChange={onOpenChange}
      />
    </Layout.Sider>
  );
};

export default Sider;
