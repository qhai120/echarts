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
  mounted () {
    const myEcharts = echarts.init(this.$refs.mycharts)
    myEcharts.setOption({
      title: {
        text: '折线图'
      },
      xAxis: {
        type: 'category',
        data: ['a', 'b', 'c', 'd']
      },
      yAxis: {},
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      series: [
        {
          name: '火车',
          type: 'line',
          data: [100, 250, 100, 300],
          stack: 'num',
          color: 'yellow',
          // 填充
          areaStyle: {

          },
          // 高亮状态
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '汽车',
          type: 'line',
          data: [50, 20, 150, 200],
          stack: 'num',
          areaStyle: {

          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '飞机',
          type: 'line',
          data: [150, 350, 400, 500],
          stack: 'num',
          areaStyle: {

          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: '导弹',
          type: 'line',
          data: [200, 400, 700, 1000],
          stack: 'num',
          areaStyle: {

          },
          emphasis: {
            focus: 'series'
          }
        }
      ]
    })
  }
}
</script>

<style></style>
