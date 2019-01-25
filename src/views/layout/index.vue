<template>
  <div class="app-wrapper">
    <div class="main-content-container">
      <navbar class="j-gank-nav"></navbar>
      <app-main class="j-gank-content"></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar } from "./components/index.js";

export default {
  name: "Layout",
  components: {
    Navbar,
    AppMain
  },
  computed: {},
  methods: {}
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
.main-content-container {
  min-height: 100%;
  position: relative;
  .j-gank-nav {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
  }
  .j-gank-content {
    margin-top: 60px;
  }
}
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
