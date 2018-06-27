<template>
    <el-container>
        <el-aside width="200px">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    v-bind:router=true>
                <el-menu-item index="/home/first">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="/home/second">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航三</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="/home/third">选项1</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="/home/forth">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                header
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '/home/first'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
