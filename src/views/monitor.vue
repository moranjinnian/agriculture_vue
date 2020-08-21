<template>
    <div class="com-cont">
        <div class="monitor-content">
            <div class="monitor-content-left">
                <div class="monitor-content-left-header">
                    <span>单位名称</span>
                </div>
                <div class="monitor-content-left-main">
                    <el-menu active-text-color="#1ffbf9" background-color="rgba(74,137,202,0)"
                             class="el-menu-vertical-demo"
                             default-active="0" text-color="#fff">
                        <el-menu-item class="item-list" :key="index" :index="index.toString()"
                                      v-for="(pro ,index) in item">
                            <span :title="index" slot="title">{{pro}}</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </div>
            <div class="monitor-content-right">
                <div class="monitor-content-right-top">
                    <div class="sg-header-title-name">
                        <span>视频监控</span>
                    </div>
                    <div class="sg-main-value">
                        <div class="sg-main-left"></div>
                        <div class="sg-main-right"></div>
                    </div>
                </div>
                <div class="monitor-content-right-dn">
                    <div class="sg-header-title-name">
                        <span>物联监控</span>
                    </div>
                    <div class="sg-main-value">
                       <el-tabs :tab-position="tabPosition" style="height: 200px;">
                            <el-tab-pane label="一号监测点">一号监测点</el-tab-pane>
                            <el-tab-pane label="二号监测点">二号监测点</el-tab-pane>
                            <el-tab-pane label="三号监测点">三号监测点</el-tab-pane>
                            <el-tab-pane label="四号监测点">四号监测点</el-tab-pane>
                            <el-tab-pane label="五号监测点">五号监测点</el-tab-pane>             
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                item: [],
                tabPosition:"left"
            }
        },
        created() {
            this.item = [
                '莒县------1', '莒县------2', '莒县------3', '莒县------4', '莒县------5', '莒县------6', '莒县------7', '莒县------8', '莒县------9', '莒县------10'
            ]
        },
        methods(){
            
        }
    }
</script>

<style scoped>
    .sg-main-left, .sg-main-right {
        width: 45%;
        margin: 2vh auto;
        border-radius: 5px;
        border: 1px solid #3691b1;
    }

    /* .sg-main-right {
       
    } */

    .sg-main-value {
        height: calc(100% - 3.5vh);
        display: flex;
        color: rgba(74, 137, 202, 0);
    }

    .monitor-content-right-top {
        box-shadow: inset 0 0 20px 0 #05277a;
        border: 1px solid #1348b4;
        width: 100%;
        height: calc(44vh - 4px);
        background: rgba(5, 39, 122, 0.3);
    }

    .monitor-content-right-dn {
        box-shadow: inset 0 0 20px 0 #05277a;
        margin-top: 2vh;
        border: 1px solid #1348b4;
        width: 100%;
        height: 38vh;
        background: rgba(5, 39, 122, 0.3);
    }

    .item-list {
        color: #d7d7d7;
        height: 4vh;
        font-size: 2vh;
        line-height: 4vh;
        border-bottom: 1px dashed #03488d;
        cursor: pointer;
        text-align: left;
        text-indent: 2vw;
        background-color: rgba(5, 39, 122, 0) !important;
    }

    .item-list:hover {
        background: rgba(5, 39, 122, 0.6) !important;
        color: #1ffbf9 !important;
    }

    .monitor-content-left-header {
        background: url("../assets/images/wljklftbtbj.png");
        background-size: 100% 100%;
        border-bottom: 1px dashed #03488d;
        color: #fff;
        font-size: 2vh;
        line-height: 4vh;
        height: 4vh;
        width: 100%;
        overflow: auto;
    }

    .monitor-content-left-main {
        height: calc(100% - 4vh);
        overflow: auto;
    }

    .monitor-content {
        height: 100%;
        width: 100%;
        display: flex;
    }

    .monitor-content-left {
        box-shadow: inset 0 0 20px 0 #05277a;
        margin: 0 1vw 2vh 1vw;
        width: 20vw;
        border: 1px solid #1348b4;
        background: rgba(5, 39, 122, 0.3);
    }

    .monitor-content-right {
        width: 77vw;
        margin: 0 1vw 2vh 0;
    }
</style>
