import React from 'react';
import { Card, CardProps } from 'antd';
import styled from 'styled-components';
interface ItemsProps extends CardProps {
  listData: {
    titleName: string,
    data: any
  }
}

export const ListModule: React.FC<ItemsProps> = ({ title, listData, ...other }) => {
  return <HeaderCard bodyStyle={{ padding: 16 }} {...other}>
    <div className="title">
      {title}
    </div>
    <div className='list-box'>
      {listData.data.map((item: any) => <p key={item.key}>{item.title}</p>)}
    </div>
  </HeaderCard>
}
const HeaderCard = styled(Card)`
  flex: 1;
  .title{
      color: #666;
  }
`

// export default ListModule;
