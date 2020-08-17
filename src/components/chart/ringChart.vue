<template>
    <div :id="chartId" style="width: 100%;height: 100%"></div>
</template>

<script>
    export default {
        name: "rignChart",
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
                var colorList = ['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', '#aff', "rgba(250,250,250,0.5)"];
                let option = {
                    grid: {
                        left: 0,
                        right: '10%'
                    },
                    legend: {
                        show: false,
                    },
                    tooltip: { //提示框
                        trigger: "item",
                        triggerOn: "mousemove",
                        backgroundColor: "rgba(1,70,86,1)",
                        borderColor: "rgb(12,44,241)",
                        borderWidth: 0.5,
                        textStyle: {
                            fontSize: '90%',
                            color: '#fff'
                        }
                    },
                    series: [
                        {
                            radius: ['29%', '49%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            label: {
                                show: true,
                                position: 'outside',
                                formatter: '{a|{b}：{d}%}\n{hr|}',
                                rich: {
                                    hr: {
                                        backgroundColor: 't',
                                        borderRadius: 3,
                                        width: 3,
                                        height: 3,
                                        padding: [3, 3, 0, -12]
                                    },
                                    a: {
                                        padding: [-30, 15, -20, 1]
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            data: [
                                {value: 17, name: '种植类',},
                                {value: 23, name: '畜禽养殖类'},
                                {value: 27, name: '水产养殖类'},
                                {value: 33, name: '加工营销类'},
                                {value: 9, name: '市场流通类'},
                                {value: 9, name: '社会化服务'},
                                {value: 9, name: '休闲观光类'}
                            ],
                        },
                        {
                            radius: ['44%', '49%'],
                            center: ['50%', '50%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            animation: false,
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(250,250,250,0.5)'
                                }
                            },
                            data: [{
                                value: 1,
                            }],
                        }
                    ]
                };
                myehhart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>
