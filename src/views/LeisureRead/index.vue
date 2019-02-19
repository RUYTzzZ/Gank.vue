<template>
  <div class="container">
    <nav class="nav-view">
      <ul class="nav-list">
        <li
            class="nav-item"
            v-bind:class="{ active: isActive }"
            v-for="item in categories"
            :key="item._id"
        >
          <router-link to="/">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <sub-page :type="activeItem"></sub-page>
  </div>
</template>

<script>
import Service from '@/util/service';
import SubPage from '@/views/LeisureRead/SubPage';

export default {
  name: 'LeisureRead',
  components: {
    SubPage,
  },
  data() {
    return {
      categories: [],
    }
  },
  computed: {
    isActive() {
      return false;
    },
    activeItem() {
      return 'apps'
    },
  },
  mounted() {
    this.initNav();
  },
  methods: {
    initNav() {
      Service.getXianduCategories().then(res => {
        this.categories = res.results;
      });
    }
  },
}
</script>

<style scoped lang="less">
  @em_color : #007fff;
  .container {
    width: 100%;
    margin-top: 5.6rem;
  }
  .nav-view {
    position: fixed;
    top: 5rem;
    height: 3.833rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    transform: translateZ(0);
    .nav-list {
      position: relative;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      line-height: 1;
      .nav-item {
        position: relative;
        cursor: pointer;
        height: 100%;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        color: #71777c;
        padding: 0 1rem;
        :first-child {
          padding: 0 1rem 0 0;
        }
        :hover {
          color: @em_color;
        }
        a {
          text-decoration: none;
          cursor: pointer;
          color: inherit;
        }
      }
      .active {
        color: @em_color;
      }
    }
  }
</style>