import axios from "axios";

const instance = axios.create({
  baseURL: "https://127.0.0.1",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});
// 请求拦截器
instance.interceptors.request.use((config) => {
  config.baseURL = window.location.origin;
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 对响应数据做些什么
    // 统一处理响应数据等操作
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return instance.get(url, { params });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}
