<template>
  <div class="Home_item_padding">
    <div class="mycharts" ref='mycharts'></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import mapdata from '@/assets/mapdata.js'
export default {
  data () {
    return {

    }
  },
  mounted () {
    const myCharts = echarts.init(this.$refs.mycharts)
    echarts.registerMap('chinaMap', mapdata)
    const option = {
      title: {
        text: '地图'
      },
      geo: {
        type: 'map',
        map: 'chinaMap',
        // 开启地图移动
        roam: true,
        // 初始化地图比例
        zoom: 5,
        center: [114.324234, 30.536277],
        label: {
          show: true,
          fontSize: 10,
          color: 'green'
        },
        itemStyle: {
          areaColor: 'yellow'
        }
      },
      series: [
        {
          type: 'scatter',
          data: [
            {
              name: '北京市',
              value: [116.46, 39.92, 4000]
            }
          ],
          symbolSize: 30,
          label: {
            show: true
          },
          coordinateSystem: 'geo'
        },
        {
          // 涟漪效果
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [
            {
              name: '武汉市',
              value: [114.324234, 30.536277, 5000]
            }
          ],
          // 涟漪效果设置
          rippleEffect: {
            // 波纹数量
            number: 2,
            // 时间
            scale: 4
          },
          itemStyle: {
            color: 'red'
          }
        }
      ]
    }
    myCharts.setOption(option)
    window.addEventListener('resize', () => {
      myCharts.resize()
    })
  }

}
</script>

<style>

</style>
