<template>
  <el-row type="flex" justify="space-between">
      <div class="logo ">
        <span>干货集中营</span>
      </div>
      <el-menu router class="navbar" mode="horizontal">
        <el-menu-item index="/Home/">首页</el-menu-item>  
        <el-menu-item index="/BE/">后端</el-menu-item>
        <el-menu-item index="/IOS/">IOS</el-menu-item>
        <el-menu-item index="/Android/">安卓</el-menu-item>
        <el-menu-item index="/FE/">前端</el-menu-item>
        <el-menu-item index="/MeiZi/">图图</el-menu-item>  
        <el-menu-item index="/About/">关于宝宝</el-menu-item>
    </el-menu>
  </el-row>
  
</template>

<script>
export default {
  name: 'Navbar',
  components: {
   
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.logo {
  font-size: 20px;
  text-align: center;
  width: 100px;
  color:#409EFF;
  font-weight: 700;
  line-height: 58px;
  vertical-align: middle;
  padding-left: 30px;
}
.navbar { 
  border-radius: 0px !important;
  padding-right: 20px;
  background: #f4f5f5;
}
</style>

