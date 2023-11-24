import axios from "axios";
import { Login, Registration } from "./interface";
import { postRegistration, postLogin, postToken } from "./api";
import * as SecureStore from 'expo-secure-store'

export const PostRegistration = ({
  name,
  email,
  password,
  role,
}: Registration) => {
  return axios({
    method: "POST",
    url: postRegistration,
    data: { name, email, password, role },
  });
};

export const PostLogin = ({ email, password }: Login) => {
  return axios({
    method: "POST",
    url: postLogin,
    data: { email, password },
  });
};

export const PostToken = ({ email, password }: Login) => {
  return axios({
    method: "POST",
    url: postToken,
    data: { email, password },
  });
};

export const setAccessToken = async (accessToken: string) => {
  if (!accessToken) {
    console.log("Lỗi không có token")
    return false;
  }
  try {
    await SecureStore.setItemAsync("accessToken", accessToken);
    addTokenToAxios(accessToken);
    return true;
  } catch (error) {
    console.log("Lỗi khi lưu token", error);
  }
  return false;
};

export const getAccessToken = async () => {
  try {
    const accessToken = await SecureStore.getItemAsync("accessToken");
    return accessToken;
  } catch (error) {
    console.log("Lỗi khi lưu token", error);
  }
  return false;
};

export const addTokenToAxios = (accessToken: string) => {
  axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${accessToken}`
      // config.headers.Authorization = `123456789`
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    })
}

export const setAccessUserId = async (accessUserId: string) => {
  if (!accessUserId) {
    console.log("Lỗi không có userId")
    return false;
  }
  try {
    await SecureStore.setItemAsync("accessUserId", accessUserId);
    return true;
  } catch (error) {
    console.log("Lỗi khi lưu userId", error);
  }
  return false;
};

export const getAccessUserId = async () => {
  try {
    const accessUserId = await SecureStore.getItemAsync("accessUserId");
    return accessUserId;
  } catch (error) {
    console.log("Lỗi khi lưu UserId", error);
  }
  return false;
};
