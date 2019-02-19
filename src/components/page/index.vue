<template>
  <div class="j-gank-page-contianer">
    <el-row :gutter="30">
      <el-col :span="18">
        <div class="j-gank-grid-content-main">
          <div
            v-for="(o, index) in data"
            :key="index"
            class="j-gank-grid-item"
          >
            <a class="content-box">
              <div class="meta-row">
                <ul class="meta-list">
                  <li
                    class="item type"
                    v-text="o.type"
                  />
                  <li
                    class="item username"
                    v-text="o.who"
                  />
                  <li
                    class="item time"
                    v-text="o.publishedAt"
                  />
                </ul>
              </div>
              <div class="info-row">
                <a
                  :href="o.url"
                  target="_blank"
                  rel=""
                  class="title"
                >
                  {{
                    o.desc
                  }}
                </a>
              </div>
              <div
                v-if="o.images && o.images.length > 0"
                class="info-pic"
              >
                <img
                  v-for="(p, index) in o.images"
                  :key="index"
                  :src="p"
                  @click="zoom()"
                >
              </div>
            </a>
          </div>
        </div>
        <div
          v-if="isLoading"
          v-loading="true"
          class="load-more"
        />
      </el-col>
      <el-col :span="4">
        <div class="j-gank-grid-content-ad" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Page',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    zoom() {
      //todo: 放大图片
      console.log('biu~~~~准备放大');
    }
  }
};
</script>
<style lang="less" scoped>
.j-gank-page-contianer {
  min-height: 765px;
  .j-gank-grid-content-main {
    .j-gank-grid-item {
      border-bottom: 1px #e7e7e7 solid;
      :hover {
        background: #f0f0f0;
      }
      .content-box {
        display: block;
        cursor: pointer;
        padding: 1rem 1rem;
        .meta-row {
          font-size: 11px;
          color: #b3bac1;
          .meta-list {
            display: flex;
            justify-content: flex-start;
            margin: 0;
            padding: 0;
            .item {
              list-style: none;
              padding-right: 1rem;
              :after {
                width: 11px;
                height: 11px;
                background: #2e3135;
              }
            }
          }
        }
        .info-row {
          margin: 0.5rem 0 1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          a {
            text-decoration: none;
            cursor: pointer;
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 1.2;
            color: #3273dc;
          }
          a:link {
          }
        }
        .info-pic {
          img {
            max-width: 120px;
            margin: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .load-more {
    width: 50px;
    margin: 0 auto;
    height: 50px;
  }
}
</style>
