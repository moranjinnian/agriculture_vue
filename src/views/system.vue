<template>
  <div class="system">
    <div class="system-main">
      <!-- top -->
      <div class="sys-top">
        <div class="sys-top-con">
          <h5>农村集体产权制度改革</h5>
          <div class="sys-top-main">
            <i class="iconfont icon-jianguan top-icon"></i>
            <span class="text">
              山东省农村集体产权
              <br />制度改革管理系统
            </span>
          </div>
        </div>
        <div class="sys-top-con">
          <h5>农村集体资产</h5>
          <div class="sys-top-main">
            <i class="iconfont icon-jiankongkongzhiguanlijianguan top-icon"></i>
            <span class="text">
              农村集体三资网络
              <br />监管平台
            </span>
          </div>
        </div>

        <div class="sys-top-con">
          <h5>土地确权</h5>
          <div class="sys-top-main">
            <i class="iconfont icon-tongjitubiao top-icon"></i>
            <span class="text">
              山东省农村土地承包
              <br />经营管理系统
            </span>
          </div>
        </div>

        <div class="sys-top-con">
          <h5>土壤分析</h5>
          <div class="sys-top-main">
            <i class="iconfont icon-dingwei top-icon"></i>
            <span class="text">土壤墒情监测系统</span>
          </div>
        </div>
        <div class="sys-top-con">
          <h5>粮食功能区</h5>
          <div class="sys-top-main">
            <i class="iconfont icon-wheat__easyic top-icon"></i>
            <span class="text">粮食功能区</span>
          </div>
        </div>
      </div>
      <!-- bottom -->
      <div class="sys-bottom">
        <!-- bottom-left -->
        <div class="sys-bottom-left">
          <h5>高标准农田</h5>
          <ul class="farmland-list">
            <li>
              <i class="iconfont icon-xiangmu1 left-icon"></i>
              <span class="text">国家重大建设项目库</span>
            </li>
            <li>
              <i class="iconfont icon-baohugengdiyuyongjiujibennongtian left-icon"></i>
              <span class="text">全国农田建设监测监管平台</span>
            </li>
            <li>
              <i class="iconfont icon-xiangmu left-icon"></i>
              <span class="text">农业农村部农业建设项目管理平台</span>
            </li>
            <li>
              <i class="iconfont icon-shenpi left-icon"></i>
              <span class="text">山东省投资项目在线审批监管平台</span>
            </li>
            <li>
              <i class="iconfont icon-tongji3 left-icon"></i>
              <span class="text">山东省统计联网直报平台</span>
            </li>
            <li>
              <i class="iconfont icon-rusuodengji left-icon"></i>
              <span class="text">建设项目环境影响登记表备案系统（山东省）</span>
            </li>
            <li>
              <i class="iconfont icon-gonggongziyuanjiaoyi left-icon"></i>
              <span class="text">日照市公共资源交易网</span>
            </li>
          </ul>
        </div>
        <!-- bottom-center -->
        <div class="sys-bottom-center">
          <h5>病虫害</h5>
          <ul class="pest-list">
            <li>
              <i class="iconfont icon-jianyanjianyi left-icon"></i>
              <span class="text">
                全国植物检疫信
                息化管理系统
              </span>
            </li>
            <li>
              <i class="iconfont icon-jiankong2 left-icon"></i>
              <span class="text">
                中国农作物有害
                生物监控信息
                系统
              </span>
            </li>
            <li>
              <i class="iconfont icon-gaojisousuo left-icon"></i>
              <span class="text">
                山东省农作物有
                害生物监测、分
                析和预警系统
              </span>
            </li>
          </ul>
        </div>
        <!-- bottom -->
        <div class="sys-bottom-right">
          <h5>农产品质量安全</h5>
          <ul class="qs-list">
            <li>
              <i class="iconfont icon-quality left-icon"></i>
              <span class="text">
                山东省农产品质量
                安全监管信息
                管理系统
              </span>
            </li>
            <li>
              <i class="iconfont icon-xitongguanli left-icon"></i>
              <span class="text">
                山东省农产品生产
                过程追溯管理
                系统
              </span>
            </li>
            <li>
              <i class="iconfont icon-jiancefangfa left-icon"></i>
              <span class="text">
                山东省农产品质量
                检测监管系统
              </span>
            </li>
            <li>
              <i class="iconfont icon-guimohuaxuqinyangzhichang left-icon"></i>
              <span class="text">
                山东省畜产品质量
                安全监管信息
                系统
              </span>
            </li>
            <li>
              <i class="iconfont icon-shinshopshuichanhaixian left-icon"></i>
              <span class="text">
                山东省水产品质量
                安全监管信息
                系统
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "system",
  data() {
    return {};
  },
  created() {},
  methods() {},
};
</script>

<style scoped>
.system {
  height: 90vh;
  background: url("../assets/system/bottom_bj.png") no-repeat center bottom;
}
.system-main {
  width: 80vw;
  /* height: 50vh; */
  margin: 0 auto;
}
.sys-top {
  display: flex;
  /* background: red; */
}
.sys-top-con {
  width: 15.2vw;
  height: 24vh;
 border: 1px solid rgba(78, 225, 250, 0.1);
  border-radius: 10px;
  background: rgba(36, 80, 205, 0.15);
  color: #7ad6fe;
}
.sys-top-con:nth-child(2) {
  margin: 0 1vw;
}
.sys-top-con:nth-child(4) {
  margin: 0 1vw;
}
.sys-top-con h5,
.sys-bottom-left h5,
.sys-bottom-center h5,
.sys-bottom-right h5 {
  font-size: 2vh;
  font-weight: 100;
  margin: 1vh 0;
  line-height: 4vh;
}
.sys-top-main {
  width: 11vw;
  height: 15vh;
  margin: 0 auto;
  background: url("../assets/system/sys_bj1.png") no-repeat left center;
  background-size: 100% 100%;
}
.sys-top-main .top-icon {
  font-size: 4vh;
  display: block;
  line-height: 8vh;
}
.sys-top-main .text {
  color: #d2e9fa;
  /* line-height: 5vh; */
}

.sys-bottom {
  display: flex;
  margin: 2vh 0;
}
.sys-bottom-left {
  width: 34vw;
  height: 54vh;
  border: 1px solid rgba(78, 225, 250, 0.2);
  border-radius: 10px;
  background: rgba(36, 80, 205, 0.15);
  color: #7ad6fe;
}
.farmland-list {
  display: flex;
  flex-flow: wrap;
}
.farmland-list li {
  list-style: none;
  width: 12.6vw;
  height: 8vh;
  margin: 0 2vw 2vh 0;
  background: url("../assets/system/sys_bj2.png") no-repeat left top;
  background-size: 100% 100%;
  display: flex;
}
.farmland-list li .left-icon {
  font-size: 4vh;
  display: inline-block;
  vertical-align: middle;
  line-height: 8vh;
  text-indent: 3vh;
}
.farmland-list li .text {
  width: 8vw;
  color: #d2e9fa;
  display: inline-block;
  margin-top: 2.5vh;
  /* line-height: 5vh; */
}
.sys-bottom-center {
  width: 12vw;
  height: 54vh;
  margin: 0 1vw;
   border: 1px solid rgba(78, 225, 250, 0.2);
  border-radius: 10px;
  background: rgba(36, 80, 205, 0.15);
  color: #7ad6fe;
}

.pest-list {
  display: flex;
  flex-flow: wrap;
}
.pest-list li {
  list-style: none;
  width: 7.2vw;
  height: 15vh;
  margin: 0 0 1vh 0;
  background: url("../assets/system/sys_bj3.png") no-repeat left top;
  background-size: 100% 100%;
  /* display: flex; */
}
.pest-list li .left-icon {
  font-size: 4vh;
  display: block;
  line-height: 7vh;
}
.pest-list li .text {
  width: 6vw;
  display: block;
  color: #d2e9fa;
  margin: 0 auto;
  /* line-height: 5vh; */
}

.sys-bottom-right {
  width: 32vw;
  height: 54vh;
  border: 1px solid rgba(78, 225, 250, 0.2);
  border-radius: 10px;
  background: rgba(36, 80, 205, 0.15);
  color: #7ad6fe;
}
.qs-list {
  display: flex;
  flex-flow: wrap;
}
.qs-list li {
  list-style: none;
  width: 9vw;
  height: 22vh;
  margin: 0 0 1vh 0;
  background: url("../assets/system/sys_bj4.png") no-repeat left top;
  background-size: 100% 100%;
}
.qs-list li:nth-child(1) {
    margin:0 1vw 0 4vw ;

}
.qs-list li:nth-child(2) {
    margin:0 5vw 0 0;

}
.qs-list li:nth-child(3) {
   margin: -3vh 0 0 -1vw;

}
.qs-list li:nth-child(4) {
   margin: -3vh 1vw 0;

}
.qs-list li:nth-child(5) {
    margin-top: -3vh;

}
.qs-list li .left-icon {
  font-size: 4vh;
  display: block;
  line-height:10vh;
}
.qs-list li .text {
  width: 6vw;
  display: block;
  color: #d2e9fa;
  margin: 0 auto;
  /* line-height: 5vh; */
}
</style>
