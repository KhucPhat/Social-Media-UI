export let USER_TOKEN = "";
const tokenUser = localStorage.getItem("token");

if (tokenUser) {
  USER_TOKEN = tokenUser;
}

export const BASE_ROOT = import.meta.env.VITE_REACT_APP_BASE_ROOT;
