<template>
        <div class="j-gank-girls-contanier">
            <el-card class="j-gank-girls-item" v-for="(o, index) in girlsData" :key="index">
                <img :src="o.url">
            </el-card>
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
            size:20,
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
        console.log('mounted');
    },
}
</script>

<style lang="less" scoped>
.j-gank-girls-contanier {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    .j-gank-girls-item {
        max-width: 250px;
        img {
            width: 100%;
        }
    }
}
</style>
