import { getPortList, UserInfo } from "@/api/modules/user";
import { put } from "@/api/request";
import { ContainerPage } from "@/components/container-page"
import { handleRequest } from "@/utils/handle-request";
import { GetProp, Table, TableProps } from "antd"
import { useEffect, useState } from "react";

export const List = () => {
    type ColumnsType<T> = TableProps<T>['columns'];
    type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;


    const columns: ColumnsType<UserInfo> = [
        {
            title: '名称',
            dataIndex: 'name',
            width: '20%',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            width: '20%',
            render(value, record, index) {
                return <div>{value || '-'}</div>;
            },
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
        },
        {
            title: '更新时间',
            dataIndex: 'updated_at',
        },
    ];


    const [data, setData] = useState<UserInfo[]>();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 10,
    });

    useEffect(() => {
        getPortList().then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
        // put('/pwd', { oldPassword: '123456',newPassword: '123456' }).catch(()=>{})
    }, [pagination?.current, pagination?.pageSize,])
    return <Table
        columns={columns}
        rowKey={'id'}
        dataSource={data}
        pagination={pagination}
        loading={loading}
    />
}