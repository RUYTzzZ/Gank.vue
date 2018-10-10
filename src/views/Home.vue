<template>
  <div class="gank-page-container">
     <el-carousel :interval="1000" type='card' height="400px">
      <el-carousel-item v-for="item in indexPic" :key="item.id">
        <img :src="item.url" :alt="item.who" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Service from '@/util/service.js';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      indexPic:[],
    }
  },
  methods: {
   getlist: function() {
        Service.getGankData({
          type:'福利',
          size:10,
          page:1
        }).then((res)=>{
          console.log(res);
          this.indexPic = res.data.results;
        });
  }
  },
  mounted: function() {
    this.getlist();
    Service.getTodayData().then(res => {
    })
  },
  
};
</script>
<style lang="less">
  .gank-page-container {
   width: 100%;
   height: 100%;
   img{
     width: 100%;
   }
  }
</style>


