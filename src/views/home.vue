<template>
    <div class="com-cont">
           <div class="sg-header-dn">
            <div class="sg-header-nav-main">
                <div @click="tabbutton('/home','莒县智慧农业大数据中心',$event)" class="sg-header-nav">
                    <a type="text" class="sg-button">现代农业产业园</a>
                </div>
                <div @click="tabbutton('/home','莒县智慧农业大数据中心',$event)" class="sg-header-nav">
                    <a type="text" class="sg-button">产业强镇</a>
                </div>
                <div @click="tabbutton('/home','莒县智慧农业大数据中心',$event)" class="sg-header-nav">
                    <a type="text" class="sg-button">明优名产村</a>
                </div>
                <div @click="tabbutton('/home','莒县智慧农业大数据中心',$event)" class="sg-header-nav">
                    <a type="text" class="sg-button">县域经济社会发展</a>
                </div>
            </div>
        </div>
        <div class="sg-home-content">
            <div class="sg-home-top">
                <div class="sg-home-top-left">
                    <div class="sg-home-top-left-top">
                        <div class="sg-header-title-name">
                            <span>信息总览</span>
                        </div>
                        <div class="sg-home-top-left-top-top">
                            <div>
                                <div class="num-img num-img1">
                                    <span class=" icon iconfont icon-mianji"></span>
                                </div>
                                <div>
                                    <br>
                                    <span class="num-title">占地面积</span><br>
                                    <span class="num-val">6.1万亩</span>
                                </div>
                            </div>
                            <div>
                                <div class="num-img num-img2">
                                    <span class=" icon iconfont icon-zichanguanli"></span>
                                </div>
                                <div>
                                    <br>
                                    <span class="num-title">总资产</span><br>
                                    <span class="num-val">17.83万</span>
                                </div>
                            </div>
                        </div>
                        <div class="sg-home-top-left-top-dn">
                            <div>
                                <div class="num-img num-img3">
                                    <span class=" icon iconfont icon--_fahuoshuliangtongji"></span>
                                </div>
                                <div>
                                    <br>
                                    <span class="num-title">总成交量</span><br>
                                    <span class="num-val">21.83万</span>
                                </div>
                            </div>
                            <div>
                                <div class="num-img num-img4">
                                    <span class=" icon iconfont icon-weibiaoti--"></span>
                                </div>
                                <div>
                                    <br>
                                    <span class="num-title">单位数量</span><br>
                                    <span class="num-val">1236个</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sg-home-top-left-dn">
                        <div class="sg-header-title-name">
                            <span>企业类型统计分析</span>
                        </div>
                        <div style="height: 85%">
                            <ring></ring>
                        </div>
                    </div>
                </div>
                <div class="sg-home-top-center">
                  <div id="heatMap">
                      <mapChart></mapChart>
                  </div>
                   
                </div>
                <div class="sg-home-top-right">
                    <div class="sg-home-top-right-top">
                        <div @click="routerrs('/dynamic','莒县智慧农业动态')" class="nydt">
                            <water :water="woterData"></water>
                        </div>
                        <div @click="routerrs('/monitor','莒县智慧农业物联监控')" class="wljk">
                            <water :water="woterData1"></water>
                        </div>
                        <div @click="routerrs('/introduce','莒县智慧农业园区介绍')" class="yqjs">
                            <water :water="woterData2"></water>
                        </div>
                        <div @click="routerrs('/system','莒县智慧农业')" class="zhny">
                            <water :water="woterData3"></water>
                        </div>
                        <div class="xxgl">
                            <water :water="woterData4"></water>
                        </div>
                    </div>
                    <div class="sg-home-top-right-dn">
                        <el-carousel height="20vh">
                            <el-carousel-item v-for="(item,index) in itemList" :key="index">
                                <img class="tab-img" :key="index" :src="item" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <div class="sg-home-dn">
                <div class="sg-home-dn-main-left">
                    <div class="sg-header-title-name">
                        <span>生产类企业数据统计</span>
                    </div>
                    <div style="height: 85%">
                        <lien></lien>
                    </div>
                </div>
                <div class="sg-home-dn-main-left">
                    <div class="sg-header-title-name">
                        <span>加工营销类企业数据统计</span>
                    </div>
                    <div style="height: 85%">
                        <lien></lien>
                    </div>
                </div>
                <div class="sg-home-dn-main-right">
                    <div class="sg-header-title-name">
                        <span>电子商务类企业数据统计</span>
                    </div>
                    <div style="height: 85%">
                        <column></column>
                    </div>
                </div>
                <div class="sg-home-dn-main-right">
                    <div class="sg-header-title-name">
                        <span>品种展示价格走势</span>
                    </div>
                    <div style="height: 85%">
                        <column></column>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import column from '@/components/chart/columnChart.vue'
    import ring from '@/components/chart/ringChart.vue'
    import lien from '@/components/chart/lienchart.vue'
    import water from '@/components/waterRipple.vue'
    import mapChart from '../components/chart/mapChart';
    export default {
        name: "home",
        components: {column, lien, ring, water, mapChart},
         props: {
            menuData: {},
        },
        watch: {
            menuData(e) {
                console.log(e)
            }
        },
        data() {
            return {
                activeName: 'first',
                woterData: {
                    color: '#6cb75c',
                    icon: 'iconfont icon-dongtai-A',
                    name: '农业动态'
                },
                woterData1: {
                    color: '#c46f45',
                    icon: 'iconfont icon-jiankong1',
                    name: '物联监控'
                },
                woterData2: {
                    color: '#5061cd',
                    icon: 'icon iconfont icon-jieshao',
                    name: '园区介绍'
                },
                woterData3: {
                    color: '#1fa0c5',
                    icon: 'iconfont icon-zhihuixinnongyesvg',
                    name: '智慧农业'
                },
                woterData4: {
                    color: '#449ef6',
                    icon: 'iconfont icon-xinxiguanli',
                    name: '信息管理'
                },
                itemList: [require('../assets/images/sylbtp.png'), require('../assets/images/sylbtp.png'), require('../assets/images/sylbtp.png'), require('../assets/images/sylbtp.png')]
            };
        },
        created() {

        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            routerrs(e,r) {
                this.$emit('callback',r)
                this.$router.push(e)
            },
            tabbutton(url, type, e) {
                this.$router.push(url)
                this.menuData.title = type
                let el = e.currentTarget;
                let ty = document.getElementById("el-button-acti");
                if (ty) {
                    ty.id = "";
                }
                el.id = "el-button-acti";
            }

        },
        destroyed() {
        },
        mounted() {
        }
    };
</script>
<style scoped>


    .num-img {
        width: 10vh;
        background: url("../assets/images/syqyxx.png") no-repeat center;
        text-align: center;
        line-height: 7vh;
    }

    .num-img > span {
        font-size: 1.4vw;
        color: #e2e2e2;
    }

    .num-title {
        font-size: .8vw;
    }

    .num-val {
        color: #46cdfd;
        font-size: 1vw
    }

    .sg-home-top-left-top-top, .sg-home-top-left-top-dn {
        width: 100%;
        height: 40%;
        text-align: left;
        display: flex;
    }

    .sg-home-top-left-top-top > div, .sg-home-top-left-top-dn > div {
        width: 50%;
        height: 100%;
        display: flex;
        padding-left: 1vw;
        color: #fff;
    }

    .nydt {
        position: relative;
        top: 15%;
        left: 25%;
    }

    .wljk {
        position: relative;
        top: 60%;
        left: 10%;
    }

    .yqjs {
        position: relative;
        top: 10%;
        left: 70%;
    }

    .zhny {
        position: relative;
        top: 40%;
        left: 40%;
    }

    .xxgl {
        position: relative;
        top: 60%;
        left: 70%;
    }

    .sg-home-top-right-top {
        overflow: hidden;
        width: calc(100% - 2px);
        height: calc(31vh - 2px);
        border: 1px solid #0b3fd3;
        background: rgba(11, 63, 211, 0.2);
        border-radius: 6px;
        margin-bottom: 1vw;
    }

    .sg-home-top-right-dn {
        width: calc(100% - 2px);
        height: calc(20vh - 2px);
 
        border-radius: 6px;
    }

    .tab-img {
        border-radius: 6px;
        width: calc(100% - 2px);
        height: calc(20vh - 2px);
    }

    .sg-home-top-left-top {
        width: 100%;
        height: 22vh;
    }

    .sg-home-top-left-dn {
        width: 100%;
        height: 29vh;
        margin-top: 1vw;
    }

    .sg-home-content {
        width: 100vw;
        height: 100%;
    }

    .sg-home-top {
        height: 54vh;
        width: 100%;
        display: flex;
        margin: 0.5vh 0;
    }

    .sg-home-dn {
        height:28vh;
        width: 100%;
        display: flex;
    }

    .sg-home-top-left, .sg-home-top-right {
        width: 22vw;
    }

    .sg-home-top-left {
        margin-left:1vw;
    }

    .sg-home-top-right {
        margin-right: 1vw;
    }

    .sg-home-top-center {
        background: url("../assets/images/sydtbjk.png");
        background-size: 100% 100%;
        width: 55vw;
        margin:0 1vw 1vw;
    }

    .sg-home-dn-main-left {
        width: 25vw;
        margin-left:1vw;
    }

    .sg-home-dn-main-right {
        overflow: hidden;
        width: 23vw;
        margin-left:1vw;
    }

    .sg-home-top-left-top, .sg-home-top-left-dn, .sg-home-top-right-dn, .sg-home-dn-main-left, .sg-home-dn-main-right {
        background: url("../assets/images/sybjk.png");
        background-size: 100% 100%;
    }
    #heatMap{    
    width: 60%;
    height: 55vh;
    margin: 0 auto;
    transform-origin:center center; 
     transform:rotate(-90deg); 
	-ms-transform:rotate(-90deg);/*  IE 9 */
-moz-transform:rotate(-90deg); 	 /*Firefox */
 -webkit-transform:rotate(-90deg); /*Safari 和 Chrome */
-o-transform:rotate(-90deg); 	/* Opera*/
}

</style>
