<template>
    <div>
        <el-row>
            <el-col :span="8">
                <div style="height: 400px">
                    <MultipleColumn v-bind:multipleColumn="multipleColumn"></MultipleColumn>
                </div>
            </el-col>
            <el-col :span="8">
                <div style="height: 400px">
                    <DynamicLine v-bind:dynamicLine="dynamicLine"></DynamicLine>
                </div>
            </el-col>
            <el-col :span="8">
                <div style="height: 400px">
                    <ScatterMap v-bind:scatterMap="scatterMap"></ScatterMap>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div style="height: 400px">
                    <NormalLine v-bind:normalLine="normalLine"></NormalLine>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import MultipleColumn from './charts/bar/MultipleColumn.vue'
import DynamicLine from './charts/line/DynamicLine.vue'
import ScatterMap from './charts/map/ScatterMap.vue'
import NormalLine from './charts/line/NormalLine.vue'
export default {
  components: {
    MultipleColumn,
    DynamicLine,
    ScatterMap,
    NormalLine
  },
  data () {
    return {
      multipleColumn: {
        name: '复杂柱状图'
      },
      dynamicLine: {
        name: '动态折线图'
      },
      scatterMap: {
        name: '散点图'
      },
      normalLine: {
        name: '普通折线图'
      }
    }
  }
}
</script>
