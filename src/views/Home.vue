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
          <div class="j-gank-meizi">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="fuliPic.url" class="image">
                  <div style="padding: 14px;">
                    <span v-text="fuliPic.desc"></span>
                    <div class="bottom clearfix">
                      <time class="time">{{ fuliPic.publishedAt }}</time>
                      <el-button type="text" class="button">保存哟</el-button>
                    </div>
                  </div>
              </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <today-card :data="todayData.app" subject="app"></today-card>
        </el-col>
        <el-col :span="8" >
          <today-card :data="todayData.random" subject="瞎推荐"></today-card>
        </el-col>
        <el-col :span="8">
            <today-card :data="todayData.video" subject="休息视频"></today-card>
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
      fuliPic: {},
    }
  },
  methods: {
    initHome() {
      Service.getTodayData().then(res => {
        console.log(res);
        this.todayData = {
          android: res.data.results.Android,
          ios: res.data.results.iOS,
          random: res.data.results.瞎推荐,
          app: res.data.results.App,
          video: res.data.results.休息视频,
        };
        this.fuliPic = res.data.results.福利 !== void 0 && res.data.results.福利.length > 0 ? res.data.results.福利[0] : {};
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
   .j-gank-home-pic {
     width: 100%;
     height:550px;
     margin: 0 auto;
     img{
      width:100%;
      height: 100%;
      }
   }
   .j-gank-home-content {
     padding: 20px 0;
     .el-row {
       margin-bottom: 20px;
     }
     .j-gank-meizi {
       height: 600px;
       img {
         height: 100%;
         width: 100%;
        }
        .bottom {
          .button {
            float: right;
          }
          .time {

          }
        }
        .clearfix:before,
        .clearfix:after {
            clear: both
        }
     }
   }
   
  }
</style>


