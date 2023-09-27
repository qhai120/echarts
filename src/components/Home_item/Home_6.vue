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
        text: '散点图'
      },
      xAxis: {

      },
      yAxis: {

      },
      tooltip: {
        trigger: 'item'
      },
      legend: {

      },
      series: [
        {
          name: '散点',
          type: 'scatter',
          // 散点图大小
          symbolSize: 20,
          data: [
            [9.0, 7.04],
            [18.07, 4.33],
            [3.0, 9.65],
            [9.05, 8.23],
            [18.0, 9.76]
          ],
          color: {
            // 线性渐变
            type: 'linear',
            // x从0变1,表示x轴渐变
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            // 渐变
            colorStops: [
              {
                offset: 0,
                color: '#00ccff'
              },
              {
                offset: 1,
                color: 'rgba(255,173,2,0.9)'
              }
            ]
          },
          // 选中高亮
          emphasis: {
            itemStyle: {
              borderColor: 'rgba(100,200,50,0.5)',
              borderWidth: 30
            }
          }
        }
      ]
    })
  }
}
</script>

<style>

</style>
