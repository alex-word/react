import api from "./request";

export const createOrder=(user_id,package_id)=>{
    return api.post("/api/paypal/createOrder",{
        user_id:user_id,
        package_id:package_id,
    });
}

export const captureOrder=(user_id,order_id)=>{
    return api.post("/api/paypal/captureOrder",{
        user_id,
        order_id
    });
}

export const captureSubscription=(user_id,subscription_id)=>{
    return api.post("/api/paypal/captureSubscription",{
        user_id,
        subscription_id
    });
}

export const getClientId=()=>{
    return api.get("/api/paypal/clientId");
}

export const getTokenPackages=()=>{
    return api.get("/api/tokenPackages");
}

export const getVipLevels=()=>{
    return api.get("/api/vipLevels");
}

export const createOrderOfStripe=(user_id,package_id)=>{
    return api.post("/api/stripe/createOrder",{
        user_id,
        package_id
    },{
        showLoading:true,
    });
}

export const subscribeOfStripe=(user_id,level)=>{
    return api.post("/api/stripe/subscribe",{
        user_id,
        level
    },{
        showLoading:true,
    });
}

export const cancelSubscription=(user_id)=>{
    return api.post("/api/cancelSubscription",{
        user_id,
    },{
        showLoading:true,
    });
}

export const getPatreonUrl=()=>{
    return api.get("/api/getPatreonUrl");
}

export const linkPatreonUrl=()=>{
    return api.get("/api/patreon/oauth");
}

export const checkPatreon=(user_id,code)=>{
    return api.post("/api/patreon/check_oauth",{
        user_id,
        code
    },{
        showLoading:true,
    });
}

export const onPayCancel=(user_id)=>{
    return api.post("/api/paypal/onCancel",{
        user_id,
    });
}

export const onPayError=(user_id,error)=>{
    return api.post("/api/paypal/onError",{
        user_id,
        error
    });
}