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
        text: '仪表盘'
      },
      series: {
        type: 'gauge',
        data: [
          {
            value: 45,
            name: '提示信息'
          }
        ],
        detail: {
          calueAnmation: true
        },
        progress: {
          show: true
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>

</style>
