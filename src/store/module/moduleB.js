const moduleA = {
  namespaced: true,
  state: {
    list: [
      { index: 1, name: '漏斗图' },
      { index: 2, name: '仪表盘' },
      { index: 3, name: '关系图' },
      { index: 4, name: '树形图' },
      { index: 5, name: '地图' },
      { index: 6, name: '视觉映射' },
      { index: 7, name: '图例' },
      { index: 8, name: '事件与行为' }
    ],
    actives: 1
  },
  getters: {},
  mutations: {
    changeActive (state, index) {
      state.actives = index
    }
  },
  actions: {},
  modules: {}
}
export default moduleA
