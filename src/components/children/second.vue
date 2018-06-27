<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formInline.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
                v-loading="loading"
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination
                    background
                    layout="total,prev, pager, next"
                    @current-change="handleCurrentChange"
                    :total=parseInt(total)>
            </el-pagination>
        </div>
    </div>
</template>
<script>
import api from '../../axios/api.js'
export default {
  data () {
    return {
      formInline: {
        name: '',
        address: ''
      },
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      total: 0,
      loading: true
    }
  },
  mounted: function () {
    this.getTableData()
  },
  methods: {
    onSubmit () {
      console.log(this.formInline.name)
      this.getTableDataByForm()
    },
    getTableData: function () {
      api.Get_data('/second/index')
        .then(res => {
          // console.log(res);
          this.tableData = res.secondData
          this.total = this.tableData.length
          this.loading = false
        })
    },
    getTableDataByForm: function () {
      let vm = this
      api.Post_data('/second/index', {name: vm.formInline.name})
        .then(res => {
          // console.log(res);
          this.tableData = res.secondData
        })
    },
    handleCurrentChange: function (val) {
      this.currentPage = val
      console.log(this.currentPage)
      // this.getTableData();
    }
  }
}
</script>
