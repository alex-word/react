import { getLocalItem } from "../utils/localStorage";

//根据权限回调函数
const useCallbackByRole = () => {
  const user = getLocalItem("user"),
    guest = getLocalItem("guest");
  let role = "";
  if (user != null&&/user_id/.test(user)) {
    role = "user";
  } else {
    role = "guest";
  }
  return (userCallback = () => {}, guestCallback = () => {}) => {
    if (role === "user") {
      return userCallback();
    }
    return guestCallback();
  };
};
export default useCallbackByRole;
