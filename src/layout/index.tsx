import { useMemo, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout } from "antd";
import { Navigation } from "./navigation";
import { Outlet, useLocation } from "react-router-dom";
import { BreadcrumbConfig } from "./breadcrumb-config";
const { Sider } = Layout;
const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { pathname } = useLocation()
    const Crumbs = useMemo(() => {
        return BreadcrumbConfig.filter((item) => item.verifyPath.test(pathname))[0]
    }, [pathname])
    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div style={{ borderRadius: 8, width: 'calc(100% - 24px)', margin: '10px 12px 24px', overflow: 'hidden' }}>
                    <img alt="logo" src={require("../assets/images/logo.png")} />
                </div>
                <Navigation selectedKeys={pathname} />
                <div className="flex justify-center">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            color: "#fff",
                        }}
                    />
                </div>
            </Sider>
            <Layout style={{ overflowY: 'auto' }}>
                {!Crumbs?.notVisible &&
                    <Breadcrumb style={{ padding: '8px 16px 0', background: '#f5f5f5' }}>
                        {Crumbs?.crumbs?.map(item =>
                            <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                        )}
                    </Breadcrumb>
                }
                <Outlet />
            </Layout>
        </Layout>
    );
};
export default LayoutPage;

