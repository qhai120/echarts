const moduleA = {
  namespaced: true,
  state: {
    list: [
      { index: 1, name: '图表容器及大小' },
      { index: 2, name: 'title属性' },
      { index: 3, name: '柱状图' },
      { index: 4, name: '饼状图' },
      { index: 5, name: '折线图' },
      { index: 6, name: '散点图' },
      { index: 7, name: 'k线图' },
      { index: 8, name: '雷达图' }
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
