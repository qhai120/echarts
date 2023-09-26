import { createStore } from 'vuex'
import moduleA from './module/moduleA'

export default createStore({
  state: {
    age: 10
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleA
  }
})
