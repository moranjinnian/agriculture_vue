<template>
    <div class="com-cont">
        <div class="sg-header-top">
            <span>{{menuData.title}}</span>
        </div>
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
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            menuData: {},
        },
        watch: {
            menuData(e) {
                console.log(e)
            }
        },
        methods: {
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
        }
    }
</script>

<style scoped>
    .sg-header-top > span {
        font-size: 4vh;
        line-height: 6vh;
        color: #79d9fb;
    }

    .sg-header-top {
        height: 8vh;
        background: #041d59;
        background: url("../../assets/images/topbj.png");
        background-size: 100% 100%;
    }

    .sg-header-dn {
        padding: 0 0 .5vh 0;
        height: 5vh;
    }

    .sg-header-nav-main {
        margin: auto;
        width: 45rem;
        display: flex;
    }

    .sg-header-nav {
        height: 4vh;
        margin: auto;
        padding: 0 2rem;
        border-radius: 3px;
        background: #041d59;
        color: #53c7e4;
        background: url("../../assets/images/sycdbj1.png");
        background-size: 100% 100%;
    }

    .sg-header-nav:hover {
        background: url("../../assets/images/sycdbj2.png");
        background-size: 100% 100%;
        color: #fff;
    }

    #el-button-acti {
        background: url("../../assets/images/sycdbj2.png");
        background-size: 100% 100%;
        color: #fff;
    }

    .sg-button {
        height: 4vh;
        cursor: pointer;
        line-height: 4vh;
        font-size: 1rem;
    }

</style>
