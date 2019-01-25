<template>
  <div class="gank-home-page-container">
    <div class="j-gank-home-pic">
      <img
        src="https://api.yingjoy.cn/pic/?t=random&w=1920"
        alt="Bing每日图片超高清"
      >
    </div>
    <div class="j-gank-home-content">
      <el-row :gutter="20">
        <el-col :span="8">
          <today-card
            :data="todayData.ios"
            subject="iOS"
            anchor="/List/iOS/"
          />
        </el-col>
        <el-col :span="8">
          <today-card
            :data="todayData.android"
            subject="安卓"
            anchor="/List/Android/"
          />
        </el-col>
        <el-col :span="8">
          <div class="j-gank-meizi">
            <el-card :body-style="{ padding: '0px' }">
              <img
                :src="fuliPic.url"
                class="image"
              >
              <div style="padding: 14px;">
                <span v-text="fuliPic.desc" />
                <div class="bottom clearfix">
                  <time class="time">
                    {{ fuliPic.publishedAt }}
                  </time>
                  <el-button
                    type="text"
                    class="button"
                  >
                    保存哟
                  </el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <today-card
            :data="todayData.app"
            subject="app"
          />
        </el-col>
        <el-col :span="8">
          <today-card
            :data="todayData.random"
            subject="瞎推荐"
          />
        </el-col>
        <el-col :span="8">
          <today-card
            :data="todayData.video"
            subject="休息视频"
            anchor="/List/休息视频/"
          />
        </el-col>
      </el-row>
    </div>
    <footer class="j-gank-footer">
      <div class="container" />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from '@/util/service.js';
import TodayCard from '@/components/todayCard/index';

export default {
  name: 'Home',
  components: {
    TodayCard
  },
  data() {
    return {
      indexPic: [],
      todayData: {},
      fuliPic: {}
    };
  },
  mounted: function() {
    this.initHome();
  },
  methods: {
    initHome() {
      Service.getTodayData().then(res => {
        this.todayData = {
          android: res.results.Android,
          ios: res.results.iOS,
          random: res.results.瞎推荐,
          app: res.results.App,
          video: res.results.休息视频
        };
        this.fuliPic =
          res.results.福利 !== void 0 && res.results.福利.length > 0
            ? res.results.福利[0]
            : {};
      });
    }
  }
};
</script>
<style lang="less" scoped>
.gank-home-page-container {
  height: 100%;
  .j-gank-home-pic {
    width: 100%;
    height: 550px;
    margin: 0 auto;
    img {
      width: 100%;
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
        clear: both;
      }
    }
  }
  .j-gank-footer {
    background-color: #f7fbfd;
    width: 100%;
    padding: 40px 150px;
    box-sizing: border-box;
    height: 60px;
  }
}
</style>
