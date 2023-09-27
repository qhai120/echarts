<template>
  <div class="Home_item_padding">
    <div class="mycharts" ref="myEcharts">

    </div>
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
    const myEcharts = echarts.init(this.$refs.myEcharts)
    myEcharts.setOption({
      title: {
        // 主标题文字
        text: '设置图表的主标题',
        // 主标题样式
        textStyle: {
          color: 'yellow',
          fontSize: 30
        },
        // 超链接
        link: 'http://www.baidu.com',
        // 超链接打开方式
        target: 'self',
        // 背景颜色
        backgroundColor: 'pink',
        // 边框颜色
        borderColor: 'aqua',
        // 边框粗细
        borderWidth: 5,
        // 标题位置
        x: 'center',
        // 副标题
        subtext: '副标题',
        sublink: 'http://www.baidu.com'
      },
      xAxis: {
        data: ['a', 'b', 'c', 'd']
      },
      yAxis: {

      },
      series: {
        name: '组装图',
        type: 'bar',
        data: [6300, 2000, 3000, 4000]
      }
    })
  }
}
</script>

<style>

</style>
