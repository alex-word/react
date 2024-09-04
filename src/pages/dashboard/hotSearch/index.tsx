import styled from 'styled-components';
import { ListModule } from '../components/listModule';
import { useEffect, useState } from 'react';
import { getHotSearch, SearchResult } from '@/api/modules/user';
import { Message } from '@/components/message';


export const HotSearch = () => {
  const [data, setData] = useState<{ data: SearchResult[], title: string }[]>([])
  const getHotSearchList = async () => {
    try {
      await getHotSearch('baidu').then((res: { data: SearchResult[] }) => {
        setData(origin => ([...origin, { title: '百度', data: res.data }]))
      })
      await getHotSearch('weibo').then((res: { data: SearchResult[] }) => {
        setData(origin => ([...origin, { title: '微博', data: res.data }]))
      })
      await getHotSearch('zhihu').then((res: { data: SearchResult[] }) => {
        setData(origin => ([...origin, { title: '知乎', data: res.data }]))
      })
    } catch (error) {
      Message.error('获取失败')
    }
  }
  useEffect(() => {
    getHotSearchList()
  }, [])
  return <Container>
    {data?.map(item => <ListModule key={item.title} title={item.title} listData={item.data} />)}
  </Container>
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 16px;
  margin-top: 16px;
`

