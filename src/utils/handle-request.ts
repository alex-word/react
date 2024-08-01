import { CommonResult} from "@/api/interface";
import { message } from "antd";
const handleRequest =<T> (fn, loading ?: React.Dispatch<React.SetStateAction<boolean>>, ...args: any): Promise<CommonResult<T>> => {
    if (loading) loading(true)
    return fn(...args)
        .then((res) => {
            return res
        })
        .catch((err) => {
            message.error(err.message || '请求失败')
            return err
        }).finally(() => loading && loading(false));
};
export { handleRequest }