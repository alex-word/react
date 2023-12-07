import api from "./request.js";

export const getTagList=()=>{
    return api.get("/tags/list");
}
