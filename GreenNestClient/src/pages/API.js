import { httpRequest } from "../API/api";

export const getOrder = () => {
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  if (loginCredentials != null)
    return httpRequest({ user_id: loginCredentials.user_id }, "getOrder.php");
};
export const getAddress = () => {
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  if (loginCredentials != null)
    return httpRequest({ user_id: loginCredentials.user_id }, "getAddress.php");
};
