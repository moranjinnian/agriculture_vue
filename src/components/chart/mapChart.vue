<template>
  <div style="width: 100%;height: 100%">
    <div :id="mychart" style="width: 100%;height: 100%;"></div>
  </div>
</template>

<script>
import uploadedDataURL from "./mapjson.json";

export default {
  name: "mapChart",
  data() {
    return {
      mychart: new Date() + Math.random(),
      charts: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let myehhart = this.$echarts.init(document.getElementById(this.mychart));

      this.$echarts.registerMap("莒县", uploadedDataURL);
      let data = [
        ["109.57224", "23.111531", 0], // '港北区'
        ["109.604665", "23.067516", 1000], // '港南区'
        ["109.452662", "23.127149", 834], // '覃塘区'
        ["110.392168", "23.539127", 1334], // '平南县'
      ];
      let areaData = [];
      data.map((item) => {
        // 扩大热力图效果
        areaData.push(...new Array(3).fill(item));
      });
      let mapMax = Math.max(...data.map((item) => item[2]));
      let mapMin = Math.min(...data.map((item) => item[2]));
      let option = {
        tooltip: {
          show: false,
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
        },

        visualMap: {
          bottom: 20,
          left: 10,
          show: false,
          color: ["#ff4601", "#fffc00", "#eac736"],
          min: mapMin,
          max: mapMax,
          calculable: true,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },

        grid: {
          height: "100%",
          width: "100%",
        },

        geo: {
          map: "莒县",
          label: {
            show: true,
             normal: {
                    show: true,
                    color: '#fff'
                },
                emphasis: {
                    color: '#FFF'
                }
          },
          top: "center",
          left: "10%",
          roam: true,
          width: "70%",
          height: "100%",
          zoom: 0.8,

          itemStyle: {
            normal: {
              areaColor: "#189aa8",
              borderColor: "#145975",
              shadowColor: "#26909f",
              shadowBlur: 10,
              borderWidth: 1,     
            },
            emphasis: {
              // 鼠标移入颜色
              areaColor: "#26909f",
              borderWidth: 1, 
            },
          },
        },

        series: [
          {
            mapType: "莒县",
            top: "center",
            left: "center",
            width: "100%",
            height: "95%",
            name: "AQI",
            type: "heatmap",
            coordinateSystem: "geo",
            blurSize: 40,
            data: areaData,
            // 鼠标移入
            emphasis: {
              show: false,
              itemStyle: {
                areaColor: "rgb(255,255,0,1)",
                color:'#FFF'
              },
            },
          },
        ],
      };

      myehhart.setOption(option);
    },
  },
};
</script>

<style scoped>
</style>
