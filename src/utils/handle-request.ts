import { ResultData } from "@/api/interface";
import { message } from "antd";
import { AxiosResponse } from "axios";

const handleRequest = (callback: (data?: any) => Promise<AxiosResponse<any, any>> | Promise<ResultData<unknown>>, loading?: React.Dispatch<React.SetStateAction<boolean>>, ...args: any) => {
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