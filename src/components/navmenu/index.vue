<template>
    <div class="com-cont">
        <div class="sg-header-top">
            <span>{{menuData.title}}</span>
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
   

</style>
