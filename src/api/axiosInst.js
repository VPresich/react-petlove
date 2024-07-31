import axios from "axios";

// export const BaseURL = "https://teachers-rest-api.onrender.com/api/";

export const BaseURL = "https://petlove.b.goit.study/api/";
export const axiosInst = axios.create({
  baseURL: BaseURL,
});

export const setAuthHeader = (token) => {
  axiosInst.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosInst.defaults.headers.common.Authorization = "";
};
