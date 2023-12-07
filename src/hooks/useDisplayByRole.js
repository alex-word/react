import { getLocalItem } from "../utils/localStorage";

//根据权限显示组件
const useDisplayByRole = () => {
  const user = getLocalItem("user"),
    guest = getLocalItem("guest");
  let role = "";
  if (user != null) {
    role = "user";
  } else {
    role = "guest";
  }
  return (userComponent = <></>, guestComponent = <></>) => {
    if (role === "user") {
      return userComponent;
    }
    return guestComponent;
  };
};
export default useDisplayByRole;
