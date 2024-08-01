import { request } from './request'
export const getPortList = () =>
    request(`/user-list`, {
      
    })
export const postLogin = (data) =>
    request(`/login`, {
        method:"POST",data  
    })
export const postRegister= (data) =>
    request(`/register`, {
        method:"POST",data  
    })

  