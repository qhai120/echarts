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
      list: [
        {
          name: '张三',
          id: 1,
          symbolSize: 30
        },
        {
          name: '李四',
          id: 2,
          symbolSize: 30
        },
        {
          name: '王五',
          id: 3,
          symbolSize: 30
        },
        {
          name: '赵六',
          id: 4,
          symbolSize: 30
        },
        {
          name: '卡七',
          id: 5,
          symbolSize: 30
        }
      ],
      num: [
        {
          source: '1',
          target: '2',
          relation: {
            name: '老婆',
            id: '1'
          }
        },
        {
          source: '1',
          target: '4',
          relation: {
            name: '兄弟',
            id: '1'
          }
        },
        {
          source: '1',
          target: '3',
          relation: {
            name: '义妹',
            id: '1'
          }
        },
        {
          source: '2',
          target: '1',
          relation: {
            name: '老公',
            id: 1
          }
        }, {
          source: '2',
          target: '5',
          relation: {
            name: '认识',
            id: 1
          }
        }
      ]
    }
  },
  methods: {},
  mounted () {
    const myEcharts = echarts.init(this.$refs.mycharts)
    myEcharts.setOption({
      title: {
        text: '关系图'
      },
      series: {
        type: 'graph',
        data: this.list,
        layout: 'force',
        itemStyle: {
          color: '#95dcb2'
        },
        label: {
          show: true,
          position: 'bottom',
          distance: 6,
          fontSize: 16,
          align: 'center'
        },
        force: {
          repulsion: 100,
          qravity: 0.01,
          edgeLength: 200
        },
        links: this.num,
        edgeLabel: {
          show: true,
          position: 'middle',
          formatter: (params) => {
            return params.data.relation.name
          }
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>

</style>
