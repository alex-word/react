import React from 'react';
import Icon from '@/components/icon';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Navigation: React.FC<{ selectedKeys: string }> = React.memo(({ selectedKeys }) => {
    const navigate = useNavigate()
    return <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[selectedKeys]}
        onClick={(e: { key: string }) => {
            navigate(e.key)
        }}
        items={[
            {
                key: '/dashboard',
                icon: <Icon type='icon-dashboard' />,
                label: '仪表盘',
            },
            {
                key: '/list',
                icon: <UserOutlined />,
                label: '用户列表',
                children: [
                    {
                        key: '/list',
                        label: '用户列表',
                    },
                    {
                        key: '/list/add',
                        label: '添加用户',
                    },
                ]
            },
        ]}
    />
}) 