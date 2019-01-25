<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span
        class="header-subject"
        v-text="subject"
      />
      <div
        v-if="anchor.length > 0"
        style="float: right; padding: 3px 0"
      >
        <router-link
          v-if="anchor.length > 0"
          :to="anchor"
          class="more"
        >
          more...
        </router-link>
      </div>
    </div>
    <div
      v-for="(o, index) in data"
      :key="index"
      class="item"
    >
      <a class="content-box">
        <div class="meta-row">
          <span class="meta-item">
            {{ o.publishedAt }}
          </span>
        </div>
        <div class="info-row">
          <a
            :href="o.url"
            target="_blank"
            rel=""
            class="title"
          >
            {{ o.desc }}
          </a>
        </div>
      </a>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'TodayCard',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    subject: {
      type: String,
      default: '鬼知道是啥哟'
    },
    anchor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.box-card {
  .header-subject {
    font-weight: 700;
    font-size: 1.1em;
  }
  .more {
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 600;
  }
  .item {
    padding: 10px 2px;
    .content-box {
      .meta-row {
        font-size: 11px;
        color: #b3bac1;
      }
      .info-row {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1;
        a {
          text-decoration: none;
          cursor: pointer;
          color: #2e3135;
        }
        a:link {
        }
      }
    }
  }
}
</style>
