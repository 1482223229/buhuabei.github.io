import { createStore } from "vuex";
import login from "./modules/login";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {},
  modules: {
    login,
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: "store",
      reducer(state) {
        //render错误修改
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state };
      },
    }),
  ],
});

/* vuex数据持久化配置 */
/*
plugins: [
  createPersistedState({
    // 存储方式：localStorage、sessionStorage、cookies
    storage: window.sessionStorage,
    // 存储的 key 的key值
    key: "store",
    // 只持久化存储user模块的状态
    paths: ['user']
  })
]

 */
