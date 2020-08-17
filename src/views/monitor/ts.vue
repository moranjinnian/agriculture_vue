<template>
    <div class="com-cont">
        <el-input v-model="asd"></el-input>
        <el-button @click="add">保存</el-button>
        <el-input v-model="xxxx"></el-input>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                asd: '',
                xxxx: ''
            }
        },
        created() {
            try {
                this.xxxx = localStorage.getItem('zzzzz')
            } catch (e) {
                e
            }
        },
        methods: {
            add() {
                localStorage.setItem('zzzzz', this.asd)
                this.xxxx = localStorage.getItem('zzzzz')
            }
        }
    }
</script>

<style scoped>

</style>
