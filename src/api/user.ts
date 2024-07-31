import { request } from './request'
export const getPortList = () =>
    request(`/`, {
      
    })
export const postLogin = (data) =>
    request(`/login`, {
        method:"POST",data  
    })

  