<template>
        <div class="j-gank-girls-contanier">
            <div class="j-gank-girls-item" v-for="(o, index) in girlsData" :key="index">
                <el-card class="j-gank-girls-item-card">
                    <img :src="o.url">
                </el-card>
            </div>
        </div>
</template>

<script>
import Service from '@/util/service';

export default {
    name:'girls',
    data() {
        return {
            girlsData:[],
            isLoading: true,
            page:0,
            size:100,
        }
    },
    methods: {
        initData() {
            this.resetState();
             Service.getMeiziData({
                 page: this.page,
                 size: this.size,
                 }).then(res => {
                    this.girlsData = res.results;
                 }).catch(error => {
                     console.log(error);
                 }).finally(()=> {
                     this.isLoading = false;
                 });
        },
        resetState() {
            this.isLoading = true;
            this.girlsData = [];
        },
        loadMore() {
            this.isLoading = true;
            this.page++;
            Service.getMeiziData({
                 page: this.page,
                 size: this.size,
                 }).then(res => {
                    this.girlsData = Array.prototype.concat(this.girlsData,res.results);
                 }).catch(error => {
                 }).finally(()=> {
                     this.isLoading = false;
                 });
        },
    },
    mounted() {
        this.initData();
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
