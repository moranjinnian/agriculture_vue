<template>
  <div class="dynamic">
    <!-- 公告 -->
    <div class="notice">
      <ul id="con1" ref="con1" :class="{anim:animate==true}">
        <li v-for="(item,index) in items" :key="index">
          <i class="iconfont icon-gonggao notice-icon">公告公示:</i>
          {{item.name}}
        </li>
      </ul>
    </div>
    <!-- main -->
    <div class="dynamic-main">
      <!-- dynamic-top -->
      <div class="dynamic-top">
        <!-- 轮播图 -->
        <el-carousel class="daynamic-img">
          <el-carousel-item v-for="(item,index) in  dataimg" :key="index">
            <img class="carousel-img" :key="index" :src="item.src" alt />
            <span class="carousel-text">{{item.text}}</span>
          </el-carousel-item>
        </el-carousel>
        <!-- 动态 -->
        <div class="top-dynamic">
          <span class="row row1"></span>
          <span class="row row2"></span>
          <span class="col col2"></span>
          <span class="col col1"></span>
          <h5>
            <i class="icon-right"></i>
            <em>农业动态</em>
            <a href="#">更多 > ></a>
          </h5>
          <ul class="dynamic-list">
            <li v-for="(item,index) in dynamicList " :key="index">
              <em class="text">{{item.text}}</em>
              <i class="date">{{item.date}}</i>
            </li>
          </ul>
        </div>
        <!-- 法律法规 -->
        <div class="top-law">
          <span class="row row1"></span>
          <span class="row row2"></span>
          <span class="col col2"></span>
          <span class="col col1"></span>
          <h5>
            <i class="icon-right"></i>
            <em>法律法规</em>
            <a href="#">更多 > ></a>
          </h5>
          <ul class="law-list">
            <li v-for="(item,index) in dynamicList " :key="index">{{item.text}}</li>
          </ul>
        </div>
      </div>
      <!--dynamic-center -->
      <div class="dynamic-center">
        <!-- 行政通知 -->
        <div class="center-dynamic">
          <span class="row row1"></span>
          <span class="row row2"></span>
          <span class="col col2"></span>
          <span class="col col1"></span>
          <h5>
            <i class="icon-right"></i>
            <em>行政通知</em>
            <a href="#">更多 > ></a>
          </h5>
          <div class="notice-top">
            <div class="notice-left">
              <img src="../assets/images/notice_img1.jpg" />
            </div>
            <div class="notic-right">
              <h3>加快发展“一村一品” 带动乡村产业...</h3>
              <h4>2020-05-11</h4>
              <p>农业农村部认定了第九批442个全国一村一品示范村镇，以带动更大范围的乡土特...</p>
            </div>
          </div>
          <ul class="notice-list">
            <li v-for="(item,index) in noticeList " :key="index">
              <em class="text">{{item.text}}</em>
              <i class="date">{{item.date}}</i>
            </li>
          </ul>
        </div>
        <!-- 信息公开 -->
        <div class="center-dynamic">
          <span class="row row1"></span>
          <span class="row row2"></span>
          <span class="col col2"></span>
          <span class="col col1"></span>
          <h5>
            <i class="icon-right"></i>
            <em>信息公开</em>
            <a href="#">更多 > ></a>
          </h5>
          <div class="notice-top">
            <div class="notice-left">
              <img src="../assets/images/notice_img2.jpg" />
            </div>
            <div class="notic-right">
              <h3>加快发展“一村一品” 带动乡村产业...</h3>
              <h4>2020-05-11</h4>
              <p>农业农村部认定了第九批442个全国一村一品示范村镇，以带动更大范围的乡土特...</p>
            </div>
          </div>
          <ul class="notice-list">
            <li v-for="(item,index) in noticeList " :key="index">
              <em class="text">{{item.text}}</em>
              <i class="date">{{item.date}}</i>
            </li>
          </ul>
        </div>
        <!-- 扶贫通知 -->
        <div class="center-dynamic">
          <span class="row row1"></span>
          <span class="row row2"></span>
          <span class="col col2"></span>
          <span class="col col1"></span>
          <h5>
            <i class="icon-right"></i>
            <em>扶贫通知</em>
            <a href="#">更多 > ></a>
          </h5>
          <div class="notice-top">
            <div class="notice-left">
              <img src="../assets/images/notice_img3.jpg" />
            </div>
            <div class="notic-right">
              <h3>加快发展“一村一品” 带动乡村产业...</h3>
              <h4>2020-05-11</h4>
              <p>农业农村部认定了第九批442个全国一村一品示范村镇，以带动更大范围的乡土特...</p>
            </div>
          </div>
          <ul class="notice-list">
            <li v-for="(item,index) in noticeList " :key="index">
              <em class="text">{{item.text}}</em>
              <i class="date">{{item.date}}</i>
            </li>
          </ul>
        </div>
      </div>
      <!--dynamic-bottom -->
      <div class="dynamic-bottom">
        <!-- bottom-left 农业要闻 -->
        <div class="bottom-l-dynamic">
          <span class="row row1"></span>
          <span class="row row2"></span>
          <span class="col col2"></span>
          <span class="col col1"></span>
          <h5>
            <i class="icon-right"></i>
            <em>农业要闻</em>
            <a href="#">更多 > ></a>
          </h5>
          <ul class="news-left">
            <li v-for="(item,index) in dynamicList " :key="index">
              <em class="text">{{item.text}}</em>
            </li>
          </ul>
          <div class="mall-sell item-box">
            <div class="mall_sell-item">
              <img src="../assets/images/notice_img1.jpg" />
              <p>创新管理模式保障村民的事</p>
            </div>

            <div class="mall_sell-item">
              <img src="../assets/images/notice_img1.jpg" />
              <p>创新管理模式保障村民的事</p>
            </div>
            <div class="mall_sell-item">
              <img src="../assets/images/notice_img1.jpg" />
              <p>创新管理模式保障村民的事</p>
            </div>
            <div class="mall_sell-item">
              <img src="../assets/images/notice_img1.jpg" />
              <p>创新管理模式保障村民的事</p>
            </div>
            <div class="mall_sell-item">
              <img src="../assets/images/notice_img1.jpg" />
              <p>创新管理模式保障村民的事</p>
            </div>
            <div class="mall_sell-item">
              <img src="../assets/images/notice_img1.jpg" />
              <p>创新管理模式保障村民的事</p>
            </div>
          </div>
        </div>
        <!-- bottom-right  农机发展服务中心-->
        <div class="top-dynamic" style="margin-right:0">
          <span class="row row1"></span>
          <span class="row row2"></span>
          <span class="col col2"></span>
          <span class="col col1"></span>
          <h5>
            <i class="icon-right"></i>
            <em>农机发展服务中心</em>
            <a href="#">更多 > ></a>
          </h5>
          <ul class="dynamic-list">
            <li v-for="(item,index) in dynamicList " :key="index">
              <em class="text">{{item.text}}</em>
              <i class="date">{{item.date}}</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dynamic",
  data() {
    return {
      animate: false,
      dataimg: [
        {
          src: require("../assets/images/dynamic.jpg"),
          text: "为农而担——国家农担公司金融支农纪实1",
        },
        {
          src: require("../assets/images/dynamic.jpg"),
          text: "为农而担——国家农担公司金融支农纪实2",
        },
        {
          src: require("../assets/images/dynamic.jpg"),
          text: "为农而担——国家农担公司金融支农纪实4",
        },
        {
          src: require("../assets/images/dynamic.jpg"),
          text: "为农而担——国家农担公司金融支农纪实",
        },
      ],
      items: [
        {
          name:
            "市农业农村局陈鹏副局长、市农机中心郑成云调研员带领督导组一行6人，来莒县督导检查农机购置补贴专项整治工作。     2020-02-24",
        },
        {
          name:
            "市农业农村局陈鹏副局长、市农机中心郑成云调研员带领督导组一行6人，来莒县督导检查农机购置补贴专项整治工作。     2020-02-16",
        },
        {
          name:
            "市农业农村局陈鹏副局长、市农机中心郑成云调研员带领督导组一行6人，来莒县督导检查农机购置补贴专项整治工作。     2020-02-10",
        },
        {
          name:
            "市农业农村局陈鹏副局长、市农机中心郑成云调研员带领督导组一行6人，来莒县督导检查农机购置补贴专项整治工作。     2020-02-10",
        },
      ],
      dynamicList: [
        {
          text: "十三五”规划纲要告诉你 干农业要盯紧这些致富商机",
          date: " 2020-05-11",
        },
        {
          text: "农业创业：绕过那些坑，“丰收”并不难",
          date: " 2020-05-11",
        },
        {
          text: "互联网+农业”政策出台 大学生办电商可享担保贷款",
          date: " 2020-05-11",
        },
        {
          text: "国家农业科技成果转化资金项目如何申报 ",
          date: " 2020-05-11",
        },
        {
          text: "十三五”规划纲要告诉你 干农业要盯紧这些致富商机",
          date: " 2020-05-11",
        },
        {
          text: "农业创业：绕过那些坑，“丰收”并不难",
          date: " 2020-05-11",
        },
      ],
      noticeList: [
        {
          text: "十三五”规划纲要告诉你 干农业要盯紧这些致富商机",
          date: " 2020-05-11",
        },
        {
          text: "农业创业：绕过那些坑，“丰收”并不难",
          date: " 2020-05-11",
        },
        {
          text: "互联网+农业”政策出台 大学生办电商可享担保贷款",
          date: " 2020-05-11",
        },
      ],
    };
  },
  created() {
    setInterval(this.scroll, 1000);
  },
  methods: {
    scroll() {
      this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => {
        //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.items.push(this.items[0]); // 将数组的第一个元素添加到数组的
        this.items.shift(); //删除数组的第一个元素
        this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500);
    },
  },
};
</script>
<style scoped>
</style>
