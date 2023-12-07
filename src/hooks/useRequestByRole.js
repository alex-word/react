import { getLocalItem } from "../utils/localStorage";

//根据权限分配选择请求的接口
const useRequestByRole = () => {
  const user = getLocalItem("user"),
    guest = getLocalItem("guest");
  let role = "";
  if (user != null&&user!=='null'&&user!==void 0&&user !== 'undefined') {
    role = "user";
  } else {
    role = "guest";
  }
  return (userRequest=()=>{}, guestRequest=()=>null) => {
    if (role === "user") {
        //console.log("当前是user")
      return userRequest;
    }
   // console.log("当前是guest")
    return guestRequest;
  };
};

// //根据权限
// const useRequestOneByRole=()=>{

// }

export default useRequestByRole;