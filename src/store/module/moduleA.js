const moduleA = {
  namespaced: true,
  state: {
    list: [
      { index: 1, name: '图表容器及大小' },
      { index: 2, name: '样式' },
      { index: 3, name: '数据集' },
      { index: 4, name: '数据转换' },
      { index: 5, name: '坐标轴' },
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