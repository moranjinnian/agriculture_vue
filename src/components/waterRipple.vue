<template>
    <div>
        <div class="container">
            <div class="water-name">
                <span style="font-size: 1.5vw" :class="water.icon"></span><br>
                <span>{{water.name}}</span>
            </div>
            <div :style="{background:water.color}" class="water water1"></div>
            <div :style="{background:water.color}" class="water water2"></div>
            <div :style="{background:water.color}" class="water water3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "waterRipple",
        data() {
            return {}
        },
        props: {
            water: {},
        },
    }
</script>

<style scoped>
    .water-name {
        position: absolute;
        cursor:pointer;
        width: 3vw;
        height: 3vw;
        color: #fff;
        z-index: 99;
        top: .3vw;
    }

    .container {
        white-space: nowrap;
        color: #FFF;
        border-radius: 5px;
        position: absolute;
        z-index: 3;
    }

    .water1 {
        -webkit-animation: wateranimate 5s 2s ease-out infinite;
        animation: wateranimate 5s 2s ease-out infinite;
    }

    .water2 {
        -webkit-animation: wateranimate 5s 1s ease-out infinite;
        animation: wateranimate 5s 1s ease-out infinite;
    }

    .water3 {
        -webkit-animation: wateranimate 5s 0s ease-out infinite;
        animation: wateranimate 5s 0s ease-out infinite;
    }

    @-webkit-keyframes wateranimate {
        0% {
            -webkit-transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes wateranimate {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(2);
            transform: scale(2);
            opacity: 0;
        }
    }

    .water {
        width: 3vw;
        height: 3vw;
        position: absolute;
        cursor:pointer;
        border-radius: 50%;
        z-index: 1;
        opacity: 0;
    }
</style>
