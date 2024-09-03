import styled from 'styled-components';
import { ListModule } from '../components/listModule';
import { useEffect, useState } from 'react';
import { getHotSearch, SearchResult } from '@/api/modules/user';


export const HotSearch = () => {
  const [data, setData] = useState<{ data: SearchResult[], title: string }[]>([])
  useEffect(() => {
    getHotSearch('baidu').then((res: { data: SearchResult[] }) => {
      setData(origin => ([...origin, { title: '百度热搜', data: res.data }]))
    }).catch(err => { })
  }, [])
  return <Container>
    <ListModule title={'百度热搜'} listData={[]} />
  </Container>
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 16px;
`

