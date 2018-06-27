<template>
    <div>
        <el-radio-group v-model="radio3">
            <el-radio-button label="某地"></el-radio-button>
            <el-radio-button label="2某地"></el-radio-button>
            <el-radio-button label="3某地"></el-radio-button>
            <el-radio-button label="4某地"></el-radio-button>
        </el-radio-group>
        <div class="chart-title">{{radio3}}{{startYear}}-{{endYear}}年{{month}}月统计</div>
        <div style="text-align: center">
            <el-date-picker
                    v-model="startYear"
                    type="year"
                    value-format="yyyy"
                    placeholder="选择开始年">
            </el-date-picker>
            <el-date-picker
                    v-model="endYear"
                    type="year"
                    value-format="yyyy"
                    placeholder="选择结束年">
            </el-date-picker>
            <el-select v-model="month" placeholder="选择月">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
        </div>
        <div style="height: 400px">
            <NormalLine v-bind:normalLine="normalLine"></NormalLine>
        </div>
    </div>
</template>
<script>
import NormalLine from './charts/line/NormalLine.vue'
export default {
  components: {
    NormalLine
  },
  data () {
    return {
      radio3: '某地',
      startYear: '2012',
      endYear: '2018',
      options: [{
        value: '8',
        label: '8月'
      }, {
        value: '9',
        label: '9月'
      }, {
        value: '10',
        label: '10月'
      }, {
        value: '11',
        label: '11月'
      }, {
        value: '12',
        label: '12月'
      }],
      month: '8',
      normalLine: {
        name: ''
      }
    }
  }
}
</script>
