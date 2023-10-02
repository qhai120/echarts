<template>
  <div class="Home_item_padding">
    <div class="mycharts" ref="myecharts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {
      x: ['第一月', '第二月', '第三月', '第四月', '第五月'],
      y: [
        [800, 2000, 1500, 4000, 5200],
        [2000, 1000, 1200, 1500, 3000],
        [1000, 1200, 1500, 2000, 2200],
        [1000, 1400, 1600, 2000, 3200],
        [1000, 1600, 1500, 1200, 1400]
      ]
    }
  },
  computed: {
    getData () {
      return this.y.map(v => v[0])
    }
  },
  methods: {
    kxaintu () {
      const myEcharts = echarts.init(this.$refs.myecharts)
      myEcharts.setOption({
        title: {
          text: 'k线图'
        },
        xAxis: {
          data: this.x
        },
        yAxis: {},
        grid: {
          top: '20%',
          left: '20%'
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {

        },
        series: [
          {
            name: 'K线图',
            type: 'candlestick',
            data: this.y,
            itemStyle: {
              // 上涨的颜色
              color: 'yellow',
              // 下跌的颜色
              color0: 'aqua'
            },
            markPoint: {
              data: [
                { type: 'max', name: '最大值', calueDim: 'highest' },
                { type: 'min', name: '最小值', calueDim: 'lowest' },
                { type: 'average', name: '平均图', calueDim: 'close' }
              ]
            }
          },
          {
            type: 'line',
            smooth: true,
            data: this.getData
          }
        ]
      })
    }
  },
  mounted () {
    this.kxaintu()
  }
}
</script>

<style></style>
