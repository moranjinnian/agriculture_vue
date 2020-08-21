<template>
  <div class="introduce">
    <!-- title -->
    <div class="title">
      <i class="title-left"></i>
      <span>产业园区介绍</span>
      <i class="title-right"></i>
    </div>
    <div class="introduce-main">
      <!-- left text -->
      <div class="intro-text">
        <p>莒县经济开发区成立于2000年，位于县城北部，是省政府批准设立的省级开发区。开发区规划面积25平方公里，下辖27个行政村，共计2.6万人口。区内现有投产运营及在建企业168家，其中规模以上工业企业38家、世界500强外商独资企业1家、省级以上高新技术企业2家，从业人数3万余人，已形成了以精细化工、高端装备制造、绿色食品加工、高档纺织服装、新能源和新材料等产业为主导较为完善的产业体系。目前，开发区已完成“七纵七横”的骨干道路网络，同步配套供水、排水、供电、供气、供暖、燃气、弱电等管道铺设，千伏变电站、污水处理厂、工业水厂等城市基础设施完善，规划建设用地全部实现“九通一平”。拥有创新创业园、中小企业园、装备制造园、汽车零部件制造园等多个产业孵化基地和莒州创新创业中心。</p>
        <p>供水、排水、供电、供气、供暖、燃气、弱电等管道铺设，千伏变电站、污水处理厂、工业水厂等城市基础设施完善，规划建设用地全部实现“九通一平”。拥有创新创业园、中小企业园、装备制造园、汽车零部件制造园等多个产业孵化基地和莒州创新创业中心。供水、排水、供电、供气、供暖、燃气、弱电等管道铺设，千伏变电站、污水处理厂、工业水厂等城市基础设施完善，规划建设用地全部实现“九通一平”。拥有创新创业园、中小企业园、装备制造园、汽车零部件制造园等多个产业孵化基地和莒州创新创业中心。拥有创新创业园、中小企业园、装备制造园、汽车零部件制造园等多个产业孵化基地和莒州创新创业中心。</p>
        <p>莒县高新技术产业园位于莒县沭东新城，一期规划总面积8.8平方公里、1.32万亩土地。通过实施特别机制及特殊政策，该产业园重点招引落户智能制造、时尚产业等新发展动能项目，培育打造以智能智造、新能源新材料产业为主导的特色产业聚集区。</p>
      </div>
     <!-- right viedo -->
     <div class="intro-video">
        <div class="video-main">
         <videoPlay></videoPlay>
        </div>
     </div>
    </div>
     <!-- bottom img -->
     <div class="intro-bottom">
       <div class="intro-img"><img src="../assets/introduce/intro_img1.png"></div>
       <div class="intro-img"><img src="../assets/introduce/intro_img2.png"></div>
       <div class="intro-img"><img src="../assets/introduce/intro_img3.png"></div>
     </div>
  </div>
</template>
<script>
 import videoPlay from '@/components/video/video.vue'
export default {
  name: "introduce",
  components: {videoPlay},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>

</style>
