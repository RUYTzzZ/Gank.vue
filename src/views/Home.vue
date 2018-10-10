<template>
  <div class="gank-home-page-container">
    <div class="j-gank-home-pic">
     <img src="https://api.yingjoy.cn/pic/?t=random&w=1920" alt="Bing每日图片超高清" />
    </div>
    <div class="j-gank-home-content">
      <el-row :gutter="20">
        <el-col :span="8">
          <today-card :data="todayData.ios" subject="iOS"></today-card>
        </el-col>
        <el-col :span="8" >
           <today-card :data="todayData.android" subject="安卓"></today-card>
        </el-col>
        <el-col :span="8">
            <today-card :data="todayData.random" subject="瞎推荐"></today-card>
        </el-col>
      </el-row>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from '@/util/service.js';
import TodayCard from '@/components/todayCard/index';

export default {
  name: 'home',
  components: {
    TodayCard,
  },
  data() {
    return {
      indexPic:[],
      todayData:{},
    }
  },
  methods: {
    initHome() {
      Service.getTodayData().then(res => {
        this.todayData = {
          android: res.data.results.Android,
          ios: res.data.results.iOS,
          random: res.data.results.瞎推荐,
        };
      });
    },
  },
  mounted: function() {
    this.initHome();
  },
  
};
</script>
<style lang="less" scoped>
  .gank-home-page-container {
   width: 70%;
   height: 100%;
   margin: 0 auto;
   background: #fff;
   .j-gank-home-pic {
     width: 100%;
     height:500px;
     margin: 0 auto;
     img{
      width:100%;
      height: 100%;
      }
   }
   .j-gank-home-content {
     padding: 5px
   }
   
  }
</style>


