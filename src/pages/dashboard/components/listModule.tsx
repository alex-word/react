import React from 'react';
import { Card, CardProps } from 'antd';
import styled from 'styled-components';
import { SearchResult } from '@/api/modules/user';
interface ItemsProps extends CardProps {
  title: string,
  listData: SearchResult[]
}

export const ListModule: React.FC<ItemsProps> = ({ title, listData, ...other }) => {
  return <HeaderCard bodyStyle={{ padding: 16 }} {...other}>
    <div className="title">
      {title}
    </div>
    <div className='list-box'>
      {listData.map((item: any) => <p key={item.key}>{item.title}</p>)}
    </div>
  </HeaderCard>
}
const HeaderCard = styled(Card)`
  flex: 1;
  height: 350px;
  .title{
      color: #666;
      font-size: 16px;
  }
  .list-box{
    margin-bottom: 8px;
    overflow-y: auto;
  }
`

