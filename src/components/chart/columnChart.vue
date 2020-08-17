<template>
    <div :id="chartId" style="width: 100%;height: 100%"></div>
</template>

<script>
    export default {
        name: "lcolmuchart",
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
                    data: ['2019-12', '2020-01', '2020-02', '2020-03', '2020-04', '2020-05'],
                    name: ['小南瓜', '地瓜', '大蒜', '洋葱'],
                    value: [
                        [1, 2, 3, 4, 5, 6],
                        [2, 3, 4, 5, 6, 7],
                        [3, 4, 5, 6, 7, 8],
                        [4, 5, 6, 7, 8, 9],
                    ]
                }
                let seriesData = []
                for (let i = 0; i < chartData.name.length; i++) {
                    seriesData.push({
                        name: chartData.name[i],
                        type: 'line',
                        barWidth: "12",
                        label: {
                            show: true,
                            position: "top",
                            formatter: function (params) {
                                return chartData.value[i][params.dataIndex] + '万元'
                            },
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: '#34DCFF'
                        },
                        data: chartData.value[i]
                    })
                }

                let option = {
                    color: ['#1e9eef','#f74f4f','#a261d2','#f9bc01'],
                    tooltip: {
                        trigger: 'axis',
                    },
                    grid: {
                        left: '4%',
                        right: '4%',
                        bottom: '3%',
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
                        type: 'value',
                        scale: true,
                        name: '(单位：万元)',
                        nameTextStyle: {
                            color: "#a5bece"
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            alignWithLabel: true
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
                    series: seriesData
                };
                myehhart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>
