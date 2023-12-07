import { getLocalItem } from "../utils/localStorage";

//根据权限回调函数
const useFristNameByRole = () => {
  const user = getLocalItem("user"),
    guest = getLocalItem("guest");
  let role = "";
  if (user != null) {
    role = "user";
  } else {
    role = "guest";
  }

  return () => {
    if (role === "user") {
      const obj = JSON.parse(user);
      const name = obj.username || obj.email;
      if (name && name.length > 1) {
        return name.toUpperCase()[0]
      }
      return 'A';
    }
    // const obj=JSON.parse(guest);
    // const name=obj.name||obj.client_token;
    //     if(name&&name.length>1){
    //         return name.toUpperCase()[0]
    //     }
    return "֍";
  };
};
export default useFristNameByRole;
