<template>
        <page :data="pageData" :isLoading="isLoading" @load-more="loadMore"></page>
</template>

<script>
import page from '@/components/page/index'; 
import Service from '@/util/service';

export default {
    name:'list',
    components: {
        page,
    },
    props: {
        type: String,
    },
    data() {
        return {
            pageData:[],
            isLoading: true,
            page:0,
            size:20,
        }
    },
    methods: {
        initData() {
            this.resetState();
             Service.getTypeData({
                 type: this.type,
                 page: this.page,
                 size: this.size,
                 }).then(res => {
                    this.pageData = res.results;
                 }).catch(error => {
                     console.log(error);
                 }).finally(()=> {
                     this.isLoading = false;
                 });
        },
        resetState() {
            this.isLoading = true;
            this.pageData = [];
        },
        loadMore() {
            this.isLoading = true;
            this.page++;
            Service.getTypeData({
                 type: this.type,
                 page: this.page,
                 size: this.size,
                 }).then(res => {
                    this.pageData = Array.prototype.concat(this.pageData,res.results);
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
    watch: {
        type() {
            this.initData();
        }
    }
}
</script>

<style lang="less" scoped>

</style>
