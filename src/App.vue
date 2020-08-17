<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        text-align: center;
        width: 100vw;
        height: 100vh;
    }

    html, body {
        width: 100vw;
        height: 100vh;
        font-size: 14px;
        padding: 0;
        margin: 0;
    }

    ::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 8px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 8px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
        background: #A4A4A4 !important;
    }

    ::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
        border-radius: 8px;
        background: #EDEDED !important;
    }
</style>
