<template>
    <div class="j-gank-page-contianer" >
        <el-row :gutter="30">
            <el-col :span="18">
                <div class="j-gank-grid-content-main">
                    <div v-for="(o, index) in data" :key="index" class="j-gank-grid-item">
                        <a class="content-box">
                            <div class="meta-row">
                                    <span class="meta-item">{{o.publishedAt}}</span>
                            </div>
                            <div class="info-row">
                                    <a :href="o.url" target="_blank" rel="" class="title">{{o.desc}}</a>
                            </div>
                            <div class="info-pic" v-if="o.images && o.images.length > 0">
                                    <img v-for="(p, index) in o.images" :key="index" :src="p" @click="zoom()">
                            </div>
                        </a>
                    </div>
                </div>
                <div v-loading="true" v-if="isLoading" class="load-more"></div>
             </el-col>
            <el-col :span="4">
                <div class="j-gank-grid-content-ad"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'page',
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        isLoading: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        
    },
    methods: {
        zoom() {
            //todo: 放大图片
            console.log('biu~~~~准备放大');
        },
    },
    created() {
        window.onscroll = () => {
            //变量scrollTop是滚动条滚动时，距离顶部的距离
           	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
           	//变量windowHeight是可视区的高度
           	let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
           	//变量scrollHeight是滚动条的总高度
           	let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            //滚动条到底部的条件
            if (scrollTop + windowHeight === scrollHeight) {
                console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                this.$emit('load-more')
            }
        }
    }
}
</script>
<style lang="less" scoped>
.j-gank-page-contianer {
    min-height: 765px;
 .j-gank-grid-content-main {
    .j-gank-grid-item {
        padding: 10px 2px;
        border-bottom: 1px #dfdfdf solid;
    }
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
        .info-pic {
            img {
                max-width: 120px;
                margin: 10px;
                cursor: pointer;
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

