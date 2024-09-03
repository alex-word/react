import { PageContainer } from "@/components/container-page"
import { Header } from "./header"
import {ListModule} from "./listModule"
import { useEffect } from "react"
import { getHotSearch } from "@/api/modules/user"

const Dashboard = () => {
  useEffect(() => {
    getHotSearch('baidu').then(res => {
    }).catch(err => {

    })
  }, [])
  return <PageContainer>
    <Header />
    <ListModule listData={listData} />
  </PageContainer>
}
interface listDataTS {
  titleName:string,
  data:any
}
const listData: listDataTS = {
  titleName:"百度热搜",
  data:[
    {
      key: 1,
      title: '活跃度1',
      count: 1234
    },
    {
      key: 2,
      title: '活跃度2',
      count: 12344
    },
    {
      key: 3,
      title: '活跃度3',
      count: 12324
    },
    {
      key: 4,
      title: '活跃度4',
      count: 12334
    },
    {
      key: 5,
      title: '活跃度4',
      count: 12334
    },
    {
      key: 6,
      title: '活跃度4',
      count: 12334
    },
    {
      key: 7,
      title: '活跃度4',
      count: 12334
    },
    {
      key: 8,
      title: '活跃度4',
      count: 12334
    },
  ]
}
export default Dashboard
