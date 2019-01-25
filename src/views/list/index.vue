<template>
  <div>
    <page :data="pageData"></page>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import page from "@/components/page/index";
import Service from "@/util/service";
import dayjs from "dayjs";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "List",
  components: {
    page,
    InfiniteLoading
  },
  props: {
    type: String
  },
  data() {
    return {
      pageData: [],
      page: 0,
      size: 10
    };
  },
  watch: {
    type() {
      this.initData();
    }
  },
  mounted() {
    this.initData();
    console.log("mounted");
  },
  methods: {
    initData() {
      this.resetState();
      Service.getTypeData({
        type: this.type,
        page: this.page,
        size: this.size
      })
        .then(res => {
          this.pageData = res.results.map(this.filterItem);
        })
        .catch(error => {
          console.log(error);
        });
    },
    resetState() {
      this.pageData = [];
      this.page = 0;
    },
    filterItem(item) {
      item.publishedAt = dayjs(item.publishedAt).toNow();
      return item;
    },
    infiniteHandler($state) {
      this.page++;
      Service.getTypeData({
        type: this.type,
        page: this.page,
        size: this.size
      })
        .then(res => {
          if (res.results.length > 0) {
            this.pageData.push(...res.results.map(this.filterItem));
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(error => {
          $state.complete();
        });
    }
  }
};
</script>

<style lang="less" scoped></style>
