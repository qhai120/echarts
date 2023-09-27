<template>
  <div class="Home_item_padding">
    <div class="mycharts" ref="mycharts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {
    const myEcharts = echarts.init(this.$refs.mycharts)
    myEcharts.setOption({
      title: {
        text: '饼状图',
        x: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: true,
        left: 'left',
        orient: 'verical'
      },
      series: {
        name: '销售图',
        type: 'pie',
        data: [{ value: '5', name: '家电' },
          { value: '6', name: '食品' },
          { value: '7', name: '饮品' },
          { value: '8', name: '玩具' }],
        itemStyle: {
          color: (params) => {
            const color = ['red', 'yellow', 'green', 'aqua']
            return color[params.dataIndex]
          }
        },
        // 环形图的内外半径
        radius: ['50%', '70'],
        // 文字显示
        label: {
          show: true,
          // outside外部展示,inside内部展示,center中心展示
          position: 'inside'
        },
        // 是否设置成南丁格尔图
        roseType: 'area'
      }
    })
  }
}
</script>
<style lang="less" scoped>

</style>
