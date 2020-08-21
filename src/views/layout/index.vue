<template>
    <div class="layout-cont">
        <el-container>
            <el-header class="sg-header">
                <navmenu :menuData=menuData></navmenu>
            </el-header>
            <el-main class="sg-main">
                <router-view @callback="callback"></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import '@/style/index.css'
    import navmenu from '@/components/navmenu/index'

    export default {
        components: {navmenu},
        name: "layout",
        data() {
            return {
                menuData: {
                    title:'莒县智慧农业大数据中心'
                }
            }
        },
        created() {
            // let the = this
            // window.addEventListener('mousedown', function (e) {
            //     console.log(the,e)
            // })
        },
        computed: {},
        methods: {
            callback(e) {
                this.menuData.title = e
            }
        },
    }
</script>
<style>
    .layout-cont {
        background: url("../../assets/images/bj.jpg");
        background-size: 100vw 100vh;
    }
    
</style>
