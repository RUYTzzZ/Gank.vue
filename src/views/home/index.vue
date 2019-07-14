<template>
  <div class="gank-home-page-container">
    <div class="j-gank-home-pic">
      <el-carousel height="590px">
        <el-carousel-item v-for="item in 3" :key="item">
        <img
          src="http://api.dujin.org/bing/1920.php"
          title="Bing每日图片超高清"
        >
        </el-carousel-item>
      </el-carousel>
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
                    @click="save"
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
import Service from '@/util/service';
import TodayCard from '@/components/todayCard/index';
import _ from 'lodash';

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
    Service.getBingPic().then(res => {
      console.log(res);
    });
  },
  methods: {
    initHome() {
      Service.getTodayData().then(res => {
        this.todayData = {
          android: res.results['Android'],
          ios: res.results['iOS'],
          random: res.results['瞎推荐'],
          app: res.results['App'],
          video: res.results['休息视频']
        };
        _.each(this.todayData, item => item.length = 5);
        this.fuliPic =
          res.results['福利'] !== void 0 && res.results['福利'].length > 0
            ? res.results['福利'][0]
            : {};
      });
    },
    save() {
    },
  }
};
</script>
<style lang="less" scoped>
.gank-home-page-container {
  height: 100%;
  .j-gank-home-pic {
    width: 100%;
    margin: 5px auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
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
