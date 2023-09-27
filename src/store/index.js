import { createStore } from 'vuex'
import moduleA from './module/moduleA'
import moduleB from './module/moduleB'

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
    moduleA,
    moduleB
  }
})
