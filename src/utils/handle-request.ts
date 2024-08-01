import { message } from "antd";
import { AxiosResponse } from "axios";

const handleRequest = (callback: (data?: any) => Promise<AxiosResponse<any, any>>, loading?: React.Dispatch<React.SetStateAction<boolean>>, ...args: any) => {
    console.log(args);

    if (loading) loading(true)
    return callback(...args)
        .then((res) => {
            return res
        })
        .catch((err) => {
            message.error(err.message || '请求失败')
            return err
        }).finally(() => loading && loading(false));
};
export { handleRequest }