import http from "@/api/request";
export const getPortList = () =>{
    return http.get(`/user-list`, {})
}
export const postLogin = (data) =>{
    return http.post(`/login`, data)
}
export const postRegister= (data) =>{
    return http.post(`/register`, data)
}
