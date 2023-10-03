<template>
  <div class="Home_item_padding">
    <div class="mycharts" ref="mycharts"></div>
    <button @click="getdata">点击</button>
  </div>
</template>

<script>
import getData from '../../api/getdata'
import * as echarts from 'echarts'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getdata () {
      const { data } = await getData.getData('/getdata')
      this.list = data.msg
    }
  },
  mounted () {
    const myEcharts = echarts.init(this.$refs.mycharts)
    myEcharts.showLoading()
    this.getdata().then(() => {
      myEcharts.hideLoading()
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
          data: this.list,
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
    )
  }
}
</script>
<style lang="less" scoped></style>
