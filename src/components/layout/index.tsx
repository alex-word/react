import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, LayoutProps, theme } from "antd";
import { Navigation } from "./navigation";
import { Outlet } from "react-router-dom";
import logo from "@/assets/images/login.jpg";

const { Sider } = Layout;
const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div style={{ borderRadius: 8, width: '100%', padding: '0 10px', border: '1px solid #ccc', margin: '10px 0 24px' }}>
                    <img alt="logo" />
                </div>
                <Navigation />
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: "16px",
                        color: "#fff",
                    }}
                />
            </Sider>
            <Layout>
                <Breadcrumb style={{ padding: '8px 16px 0',background:'#f5f5f5' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Outlet />
            </Layout>
        </Layout>
    );
};
export default LayoutPage;

