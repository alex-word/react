import { PageContainer } from "@/components/container-page"
import { List } from "./list"
import { Input } from "antd"

const UserList = () => {
    return (
        <PageContainer>
            <header className="title">列表</header>
            <List />
        </PageContainer>
    )
}
export default UserList