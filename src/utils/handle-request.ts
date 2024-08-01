import { message } from "antd";
import { AxiosResponse } from "axios";

const handleRequest = (callback: () => Promise<AxiosResponse<any, any>>, loading?: React.Dispatch<React.SetStateAction<boolean>>, error?: () => void) => {
    if (loading) loading(true)
    return callback()
        .then((res) => {
            return res
        })
        .catch((err) => {
            message.error(err.message || '请求失败’')
            if (error)
                error()
        }).finally(() => loading && loading(false));
};
export { handleRequest }