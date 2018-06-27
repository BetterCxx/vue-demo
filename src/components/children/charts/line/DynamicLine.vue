
<template>
    <div class="dynamicLine" style="height: 100%">
        <div class="main" style="height: 100%"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default{
  props: ['dynamicLine'],
  data () {
    return {
      myChart: {},
      color: this.$store.state.color,
      name: this.dynamicLine.name,
      chartData: [],
      now: +new Date(1997, 9, 3),
      oneDay: 24 * 3600 * 1000,
      value: Math.random() * 1000
    }
  },
  methods: {
    randomData: function () {
      let vm = this
      vm.now = new Date(+vm.now + vm.oneDay)
      vm.value = vm.value + Math.random() * 21 - 10
      return {
        name: vm.now.toString(),
        value: [
          [vm.now.getFullYear(), vm.now.getMonth() + 1, vm.now.getDate()].join('/'),
          Math.round(vm.value)
        ]
      }
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let vm = this
    for (var i = 0; i < 1000; i++) {
      vm.chartData.push(vm.randomData())
    }
    vm.myChart = echarts.init(document.querySelector('.dynamicLine .main'))
    vm.myChart.setOption({
      title: {
        text: vm.name
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: vm.chartData
      }]
    })
    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        vm.chartData.shift()
        vm.chartData.push(vm.randomData())
      }

      vm.myChart.setOption({
        series: [{
          data: vm.chartData
        }]
      })
    }, 1000)
  }
}
</script>
