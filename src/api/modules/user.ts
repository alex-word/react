import { CommonResult } from "../interface"
import { get, post } from "../request"
export interface UserInfo {
    username: string,
    email?: string,
    password: string
}
export const getPortList = (): Promise<CommonResult<{data: UserInfo[]}>> => {
    return get(`/user-list`)
}
export const postLogin = (data: UserInfo) => {
    return post<UserInfo, CommonResult<{token:string}>>(`/login`, data,)
}
export const postRegister = (data) => {
    return post(`/register`, data)
}
