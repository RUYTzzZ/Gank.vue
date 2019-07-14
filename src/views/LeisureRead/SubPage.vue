<template>
  <div class="subpage-container">
    <div class="sites-list">
      <div v-for="site in siteData"
           :key="site._id"
           class="site-item"
      >
        <div class="logo">
          <img :src="site.icon"
          :title="site.title"
          >
        </div>
        <span
          class="site-name"
          v-text="site.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Service from '@/util/service';
export default {
  name: 'SubPage',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      siteData: [],
    }
  },
  computed: {

  },
  mounted() {
    this.getSites();
  },
  methods: {
    getSites() {
      Service.getXianduChild(this.type).then(res => {
        this.siteData = res.results;
      });
    },
  }
}
</script>

<style scoped lang="less">
.sites-list {
  display: flex;
  justify-content: space-between;
  .site-item {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
  
    border-radius: 6px;
    background: #fff;
    border: 1px solid #e4ecf3;
    -webkit-box-shadow: 1px 2px 3px #f2f6f8;
    box-shadow: 1px 2px 3px #f2f6f8;
    cursor: pointer;
    .logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
      display: inline-block;
      img {
        width: 100%;
      }
    }
    .site-name {
      padding: 0 0 0 2px;
    }
  }
  :hover {
    // transform: translateY(-6px);
    // -webkit-transform: translateY(-6px);
    // -moz-transform: translateY(-6px);
    // box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
    // -webkit-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
    // -moz-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
    // transition: all 0.3s ease;
  }
}
</style>