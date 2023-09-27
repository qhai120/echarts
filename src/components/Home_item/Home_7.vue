<template>
  <div class="Home_item_padding">
    <div class="mycharts" ref='mycharts'></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {

    }
  },
  mounted () {
    const myEcharts = echarts.init(this.$refs.mycharts)
    myEcharts.setOption({
      title: {
        text: 'grid配置',
        x: 'center'
      },
      xAxis: {
        type: 'category',
        data: ['汽车', '火车', '飞机', '导弹']
      },
      yAxis: {

      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross'
        },
        formatter (params) {
          return params.name + '的' + params.data.name + '是:' + params.data.value
        }
      },
      legend: {
        left: 'left',
        orient: 'verical'
      },
      series: [
        {
          type: 'bar',
          data: [
            { value: '100', name: '价格' },
            { value: '200', name: '价格' },
            { value: '400', name: '价格' },
            { value: '600', name: '价格' }
          ],
          itemStyle: {
            color: (params) => {
              const list = ['red', 'yellow', 'green', 'aqua']
              return list[params.dataIndex]
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        }
      ]
    })
  }

}
</script>

<style>

</style>
