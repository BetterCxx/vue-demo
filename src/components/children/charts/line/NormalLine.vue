
<template>
    <div class="normalLine" style="height: 100%">
        <div class="main" style="height: 100%"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default{
  props: ['normalLine'],
  data () {
    return {
      myChart: {},
      color: this.$store.state.color,
      name: this.normalLine.name
    }
  },
  mounted () {
    let vm = this
    vm.myChart = echarts.init(document.querySelector('.normalLine .main'))
    vm.myChart.setOption({
      title: {
        text: vm.name
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {type: ['line', 'bar']}
        }
      },
      xAxis: {
        type: 'category',
        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    })
  }
}
</script>
