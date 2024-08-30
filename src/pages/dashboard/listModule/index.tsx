import React from 'react';
import { Card, Space } from 'antd';
interface ItemsProps {
  listData: {
    titleName: string,
    data: any
  }
}

export const ListModule: React.FC<ItemsProps> = ({ listData }) => {
  console.log(listData);

  return <Space direction="vertical" size={16}>
    <Card title={listData.titleName} style={{ width: 300 }}>
      <div className='list-box'>
        {listData.data.map((item: any) => {
          return <p key={item.key}>{item.title}</p>
        })
        }
      </div>
    </Card>
  </Space>
};

// export default ListModule;
