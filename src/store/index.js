import { createStore } from "vuex";

export default createStore({
  state: {
    firstName: "Taha",
    lastName: " Abdelmoneim",
    fullName: false,
  },
  getters: {},
  mutations: {},
  actions: {
    printFullName({ state, commit }) {
      state.fullName = state.firstName + state.lastName;
    },
  },
  modules: {},
});
