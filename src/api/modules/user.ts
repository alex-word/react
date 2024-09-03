import { CommonResult } from "../interface"
import { get, post } from "../request"
export interface UserInfo {
    username: string,
    email: string,
    password: string
}
export const getPortList = (): Promise<CommonResult<{ data: UserInfo[] }>> => {
    return get(`/user-list`, { page: 1, limit: 10 })
}
export const postLogin = (data: Omit<UserInfo, 'email'>): Promise<CommonResult<{ token: string }>> => {
    return post(`/login`, data)
}
export const postRegister = (data: UserInfo) => {
    return post(`/register`, data)
}

export const getHotSearch = (source: string) => {
    return get(`/search/${source}`)
}
