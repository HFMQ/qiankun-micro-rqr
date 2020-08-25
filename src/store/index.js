import Vue from 'vue'
import Vuex from 'vuex'
import microRqrStore from './microRqrStore'
import microRqrUserStore from './microRqrStore'


Vue.use(Vuex)

const modules = {
  microRqrStore,
  microRqrUserStore
}
export const microModules = modules;

export const microStore = new Vuex.Store({
  modules
})
// export default new Vuex.Store({
//   state: {
//     currentUser: {}
//   },
//   mutations: {
//     saveCurrent(state, payload) {
//       state.currentUser = payload;
//     }
//   },
//   actions: {
//     login(data) {
//       debugger;
//       this.commit('saveCurrent', data);
//     }
//   },
//   modules: {}
// })