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
        text: 'hello',
        textStyle: {
          color: 'aqua'
        }
      },
      tooltip: {
        // 默认为item,为图像触发.axis为坐标轴触发
        trigger: 'axis',
        // 坐标轴指示器
        axisPointer: {
          // 坐标轴类型'line'直线 'shadow'阴影   'cross'十字形
          type: 'cross'
        },
        // 是否出现悬浮框
        showContent: true,
        // 自定义显示文字
        formatter (params) {
          return (
            '名字:' +
            params[0].name +
            '--价格:' +
            params[0].data.value +
            '生产日期:' +
            params[0].data.date
          )
        }
      },
      // 图例
      legend: {
        show: true,
        top: '2%',
        textStyle: {
          color: 'yellow'
        }
      },
      // x轴
      xAxis: {
        // 设置哪个轴为类目轴,哪个为数据轴
        type: 'category',
        // 类目轴需要data来设置有哪些类目
        data: ['a', 'b', 'c', 'd']
      },
      yAxis: {},
      // 类型设置
      series: {
        // 图例的名字
        name: 'lolo',
        // 类型
        type: 'bar',
        // 数据轴中的数据
        data: [
          { value: '5', date: '2020-4-4' },
          { value: '6', date: '2020-4-5' },
          { value: '7', date: '2020-4-6' },
          { value: '8', date: '2020-4-7' }
        ],
        // 每一项单独设置样式
        itemStyle: {
          color: (params) => {
            const colorList = ['red', 'yellow', 'aqua', 'black']
            return colorList[params.dataIndex]
          }
        },
        // 最值
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        // 平均值
        markLine: {
          data: [{ type: 'average', name: '平均值' }]
        }
      }
    })
  }
}
</script>
<style lang="less" scoped></style>
