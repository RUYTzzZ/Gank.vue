<template>
        <div class="j-gank-girls-contanier">
            <div class="j-gank-girls-item" v-for="(o, index) in girlsData" :key="index">
                <el-card class="j-gank-girls-item-card">
                    <img :src="o.url">
                </el-card>
            </div>
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </div>
</template>

<script>
import Service from '@/util/service';
import InfiniteLoading from 'vue-infinite-loading';

export default {
    name:'girls',
    components: {
        InfiniteLoading,
    },
    data() {
        return {
            girlsData:[],
            page:0,
            size:10,
        }
    },
    methods: {
        infiniteHandler($state) {
            Service.getTypeData({
                 type: '福利',
                 page: this.page,
                 size: this.size,
                }).then(res => {
                    if (res.results.length > 0) {
                        this.girlsData.push(...res.results);
                        $state.loaded();
                        this.page++;
                    } else {
                        $state.complete();
                    }
                }).catch(error => {
                    $state.complete();
                });
        },
    },
}
</script>

<style lang="less">
.j-gank-girls-contanier {
    column-count: 4;
    .j-gank-girls-item {
        display: inline-block;
        max-width: 300px;
        margin-bottom: 20px;
        .el-card {
            img {
                width: 100%;
                transition: 300ms;
            }
            img:hover {
                transform:scale(1.05,1.05);
            }
        }
        .el-card__body {
                padding: 10px;
        }
    }
}
</style>
