import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
    const navigate = useNavigate()
    return <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/list']}
        onClick={(e: { key: string }) => {
            navigate(e.key)
        }}
        items={[
            {
                key: '/list',
                icon: <UserOutlined />,
                label: '用户列表',
            },
            {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
            },
            {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
            },
        ]}
    />
}