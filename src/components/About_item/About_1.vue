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
        text: '漏斗图'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}%'
      },
      legend: {
        orient: 'verical',
        top: '10%',
        left: 0
      },
      series: {
        name: 'lolo',
        type: 'funnel',
        data: [
          { name: '美食', value: 20 },
          { name: '水果', value: 40 },
          { name: '零食', value: 60 },
          { name: '家电', value: 80 },
          { name: '蔬菜', value: 100 }
        ],
        left: '20%',
        sort: 'ascending',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          label: {
            fontSize: 30
          }
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>

</style>
