import { getLocalItem } from "../utils/localStorage.js";
import api from "./request.js";
const guestClientToken=getLocalItem('guestToken');

export const getUserBaseInfo=(userId)=>{
    return api.post("/user/getUserBaseInfo",{
        user_id:userId,
    });
}

export const setUserName=(userId,username)=>{
    return api.post("/user/setUsername",{
        user_id:userId,
        username
    },{
        showLoading:true,
    });
}

export const sendEmailCode=(email)=>{
    return api.post("/user/sendEmailCode",{
        email
    });
}

export const resetPassword=(email,code,pwd)=>{
    return api.post("/user/resetPwd",{
        email,
        email_valid_code: code,
        password:pwd,
    },{
        showLoading:true,
    });
}

export const loginByEmail=(email,password)=>{
    return api.post("/user/loginByEmail",{
        email,
        password,
    },{
        unChanged:true,
        showLoading:true,
    });
}

export const registByEmail=(email,password,emailValidCode,invitationCode)=>{
    const utm_source=getLocalItem("utm_source");
    return api.post("/user/registByEmail",{
        email,
        password,
        email_valid_code:emailValidCode,
        invitation_code:invitationCode||utm_source,
        guest_client_token:guestClientToken,
        utm_source:utm_source,
    },{
        unChanged:true,
        showLoading:true,
    });
}

export const registOrLoginByGoogle=(email,google_token,invitation_code)=>{
    const utm_source=getLocalItem("utm_source");
    return api.post("/user/registOrLoginByGoogle",{
        email,
        google_token,
        invitation_code:invitation_code||utm_source,
        guest_client_token:guestClientToken,
        utm_source:utm_source,
    },{
        unChanged:true,
        showLoading:true,
    });
}

export const getCreatedCharacters=(user_id)=>{
    return api.post("/user/getCreatedCharacters",{
        user_id
    },{
        showLoading:true,
    });
}

export const getCollectedCharacters=(user_id)=>{
    return api.post("/user/getCollectedCharacters",{
        user_id
    },{
        showLoading:true,
    });
}


export const doCollect=(user_id,character_id)=>{
    return api.post("/user/doCollect",{
        user_id,
        character_id
    },{
        showLoading:true,
    });
}

export const setAvatar=(user_id,url)=>{
    return api.post("/user/setAvatar",{
        user_id,
        url
    },{
        showLoading:true,
    });
}

export const userDelete=(user_id)=>{
    return api.post("/user/delete",{
        user_id,
    },{
        showLoading:true,
    });
}

export const getBusyError=(code,message,url)=>{
    return api.post("/user/getBusyErrMsg",{
        code,
        message,
        url
    },{
        showLoading:true,
    });
}