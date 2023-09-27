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
        text: 'hello'
      },
      xAxis: {
        data: ['a', 'b', 'c', 'd']
      },
      yAxis: {},
      series: {
        name: 'lolo',
        type: 'bar',
        data: [6300, 4800, 3200, 600]
      }
    })
  }
}
</script>
<style lang="less" scoped>

</style>
