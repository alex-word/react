import { ContainerPage } from "@/components/container-page"
import { List } from "./list"

const UserList = () => {
    return (
        <ContainerPage>
            <header className="title">列表</header>
            <List />
        </ContainerPage>
    )
}
export default UserList