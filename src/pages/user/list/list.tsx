import { ContainerPage } from "@/components/container-page"
import { GetProp, Table, TableProps } from "antd"
import { useEffect, useState } from "react";

export const List = () => {
    type ColumnsType<T> = TableProps<T>['columns'];
    type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

    interface DataType {
        name: {
            first: string;
            last: string;
        };
        gender: string;
        email: string;
        login: {
            uuid: string;
        };
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '20%',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            width: '20%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];


    const [data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 10,
    });
    const fetchData = () => {
        // setLoading(true);

    };
    useEffect(() => {
        fetchData();
    }, [
        pagination?.current,
        pagination?.pageSize,
    ]);

    return <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
    />
}