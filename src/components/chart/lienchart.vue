<template>
    <div :id="chartId" style="width: 100%;height: 100%"></div>
</template>

<script>
    export default {
        name: "linnchart",
        data() {
            return {
                chartId: new Date() + Math.random()
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let myehhart = this.$echarts.init(document.getElementById(this.chartId));
                let chartData = {
                    name: ['产量', '销量', '销售额'],
                    data: ['西红柿', '草莓', '辣椒', '花菜', '玫瑰'],
                    value: [
                        [0, 1, 2, 3, 4],
                        [2, 3, 4, 5, 6],
                        [3, 4, 5, 6, 7],
                    ],
                    movalue: [
                        [0, 1, 2, 3, 4],
                        [2, 3, 4, 5, 6],
                        [3, 4, 5, 6, 7],
                    ]
                }
                let seriesData = []
                for (let i = 0; i < chartData.name.length; i++) {
                    seriesData.push({
                        name: chartData.name[i],
                        type: 'bar',
                        barWidth: "12",
                        label: {
                            show: true,
                            position: "top",
                            formatter:  function(params){
                                return chartData.movalue[i][params.dataIndex] + '万元'
                            },
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: '#34DCFF'
                        },
                        data: chartData.value[i]
                    })
                }

                let option = {
                    color: ['#1e9eef','#a260d4','#fec400'],
                    animation: false,
                    tooltip: {
                        trigger: 'axis',
                    },
                    grid: {
                        top: "67",
                        left: "10",
                        bottom: "10",
                        right: "10",
                        containLabel: true
                    },
                    legend: {
                        show: true,
                        top: 15,
                        right: 26,
                        data: chartData.name,
                        textStyle: {
                            color: "RGB(193,223,255)"
                        }
                    },
                    xAxis: [{
                        type: "category",
                        data: chartData.data,
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            alignWithLabel: true
                        },
                        nameTextStyle: {
                            color: "#fff"
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#a5bece"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#a5bece"
                            },
                            margin: 20
                        }
                    }],
                    yAxis: [{
                        type: "value",
                        name: "(单位:吨)",
                        nameTextStyle: {
                            color: "#a5bece"
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#a5bece"
                            },
                            formatter: "{value}"
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#a5bece"
                            }
                        }
                    }],
                    series: seriesData
                };
                myehhart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>
