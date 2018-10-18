<template>
  <el-row type="flex" justify="space-between" class="top-nav">
      <div class="logo ">
        <span>干货集中营</span>
      </div>
      <el-menu router class="navbar" mode="horizontal">
        <el-menu-item index="/Home/">首页</el-menu-item>  
        <el-menu-item index="/List/休息视频/">休息视频</el-menu-item>
        <el-menu-item index="/List/拓展资源/">拓展资源</el-menu-item>
        <el-menu-item index="/List/iOS/">iOS</el-menu-item>
        <el-menu-item index="/List/Android/">安卓</el-menu-item>
        <el-menu-item index="/List/前端/">前端</el-menu-item>
        <el-menu-item index="/Girls/">图图</el-menu-item>  
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
.top-nav {
  background: #f4f5f5;
  .navbar { 
    border-radius: 0px !important;
    padding-right: 20px;
    background: #f4f5f5;
}
}
</style>

