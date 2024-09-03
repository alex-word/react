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
export type SearchResult = {
    hot_search_id: string,
    hot_search_title: string,
    hot_search_href: string,
    hot_metrics: string,
    source: string

}
export const getHotSearch = (source: string): Promise<CommonResult<SearchResult[]>> => {
    return get(`/search/${source}`)
}
