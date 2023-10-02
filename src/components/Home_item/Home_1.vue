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
    const option = {
      dataset: [
        {
          dimensions: ['类别', '数量'],
          source: [
            ['美食', 123],
            ['日化', 98],
            ['熟食', 198],
            ['数码', 328]
          ]
        },
        {
          transform: {
            // 排序
            type: 'sort',
            config: {
              // 依据
              dimension: '数量',
              order: 'desc'
            }
          }
        }
      ],
      title: {
        text: 'hello'
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: 30
        }
      },
      yAxis: {},
      series: {
        type: 'bar',
        encode: {
          x: '类别',
          y: '数量'
        },
        datasetIndex: 1
      }
    }
    myEcharts.setOption(option)
  }
}
</script>
<style lang="less" scoped>

</style>
