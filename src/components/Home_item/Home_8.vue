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

    }
  },
  methods: {
    getEcharts () {
      const myEcharts = echarts.init(this.$refs.myecharts)
      myEcharts.setOption({
        title: {
          text: '雷达图'
        },
        grid: {
          left: '20%',
          top: '20%'
        },
        tooltip: {

        },
        radar: [
          {
            shape: 'circle',
            indicator: [
              { name: '蔬菜', min: 0, max: 6500 },
              { name: '水果', max: 16000 },
              { name: '熟食', max: 30050 },
              { name: '数码', max: 38000 },
              { name: '家电', max: 52000 },
              { name: '日化', max: 25000 }
            ],
            radius: 120,
            startAngle: 180,
            splitNumber: 4,
            axisName: {
              formatter: '{value}',
              color: 'green'
            },
            splitArea: {
              areaStyle: {
                color: ['#77EADE', '#26C3BE', '#64AFE9', '#428BD4'],
                shadowColor: '0,0,0,0.2',
                shadowBlur: 10
              }
            }
          }
        ],
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [4200, 5300, 16666, 12345, 12340, 14567],
                areaStyle: {
                  color: 'rgba(0,0,0,0.5)'
                }
              }
            ],
            lineStyle: {
              type: 'dashed'
            }
          }
        ]
      })
    }
  },
  mounted () {
    this.getEcharts()
  }
}
</script>

<style></style>
