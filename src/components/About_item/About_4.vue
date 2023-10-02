<template>
  <div class="Home_item_padding">
    <div class="mycharts" ref="mycharts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {
      list: {
        name: '根节点',
        children: [
          {
            name: '层级2',
            children: [
              {
                name: '层级3-1',
                children: [
                  { name: '数据1', value: 123 },
                  { name: '数据2', value: 124 },
                  { name: '数据3', value: 125 },
                  { name: '数据4', value: 126 },
                  { name: '数据5', value: 127 }
                ]
              },
              {
                name: '层级3-2',
                children: [
                  { name: '数据6', value: 128 },
                  { name: '数据7', value: 129 },
                  { name: '数据8', value: 130 },
                  { name: '数据9', value: 131 },
                  { name: '数据10', value: 132 }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {},
  mounted () {
    const myEcharts = echarts.init(this.$refs.mycharts)
    myEcharts.setOption({
      title: {
        text: '树形图'
      },
      tooltip: {
        trigger: 'item'
      },
      series: {
        type: 'tree',
        data: [this.list],
        symbolSize: 15,
        left: '20%',
        orient: 'LR',
        label: {
          position: 'left',
          verticalAlign: 'middle',
          fontSize: 10,
          aligin: 'center'
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            aligin: 'center'
          }
        },
        emphasis: {
          focus: 'descendant'
        }
      }
    })
  }
}
</script>
<style lang="less" scoped></style>
