import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    users: state => state.users
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    }
  },
  actions: {
    async getUsers({ commit }) {
      const response = await fetch("https://api.mocki.io/v1/134409c3");
      const data = await response.json();
      commit("SET_USERS", data);
      return data;
    }
  },
  modules: {}
});
