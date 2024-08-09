import axios from "axios";

// export const BaseURL = "https://teachers-rest-api.onrender.com/api/";

export const BaseURL = "https://petlove.b.goit.study/api/";
export const axiosInst = axios.create({
  baseURL: BaseURL,
});

const clName = import.meta.env.VITE_CLOUDINARY_NAME;
export const clAxiosInst = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${clName}/`,
});

export const setAuthHeader = (token) => {
  axiosInst.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosInst.defaults.headers.common.Authorization = "";
};
