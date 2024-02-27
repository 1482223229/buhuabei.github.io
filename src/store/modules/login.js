// login
export default {
  namespaced: true,
  state: {
    islogin: false,
  },
  getters: {
    getIslogin(state) {
      return state.islogin;
    },
  },
  mutations: {
    setIslogin(state, value) {
      state.islogin = value;
      location.replace("/#/home");
    },
  },
  actions: {
    setIslogin(context, value) {
      context.commit("setIslogin", value);
    },
  },
};
