
<template>
  <div class="multipleColumn" style="height: 100%">
    <div class="main" style="height: 100%"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: ['multipleColumn'],
  data () {
    return {
      myChart: {},
      color: this.$store.state.color,
      name: this.multipleColumn.name
    }
  },
  methods: {
  },
  components: {
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let vm = this
    vm.myChart = echarts.init(document.querySelector('.multipleColumn .main'))
    vm.myChart.setOption({
      title: {
        text: vm.name
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['标签1', '标签2', '标签3', '标签4', '标签5', '标签6'],
        top: 50
      },
      toolbox: {
        show: false
      },
      color: this.color,
      calculable: true,
      xAxis: [{
        name: '产品',
        type: 'category',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.69)'
        },
        data: ['产品1', '产品2', '产品3', '产品4', '产品5']
      }],
      yAxis: [{
        nameLocation: 'end',
        nameGap: 20,
        nameRotate: 0,
        splitLine: {
          lineStyle: {
            color: ['rgba(230, 230, 230, 0.2)']
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 14
          }
        },
        name: '数量',
        type: 'value',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.69)'
        }
      }],
      series: [{
        name: '标签1',
        stack: 'stack1',
        type: 'bar',
        data: [2.0, 4.9, 5.9, 3, 6],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签2',
        stack: 'stack2',
        type: 'bar',
        data: [2.6, 5.9, 3.6, 6, 8],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签3',
        stack: 'stack3',
        type: 'bar',
        data: [2.0, 6.4, 6.0, 4, 5],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签4',
        stack: 'stack1',
        type: 'bar',
        data: [4.0, 5.9, 3, 3, 6],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签5',
        stack: 'stack2',
        type: 'bar',
        data: [5.6, 4.9, 6, 5, 5],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签6',
        stack: 'stack3',
        type: 'bar',
        data: [2.0, 3.4, 8],
        barWidth: 16,
        barGap: 0
      }]
    });
  }
}

</script>
