<template>
  <div class="all">
    <div id="app"></div>
    <div class="top">
      <!-- 导航跳转的锚点 -->
      <a
        id="pinpaijianjie"
        style="font-size:0px;"
        name="pinpaijianjie"
      ></a>
      <p class="p1">
        <span class="pin">品牌</span>
        <span class="jian">简介</span>
      </p>
      <p class="Brand">BRAND INTRODUCTION</p>
      <div class="topcon">

        <div class="topleft">
          <span class="shuxian"></span>
          <span class="time">TIME CHANGES, CONDENSED IN LAPADOR BETWEEN</span>
        </div>
        <div class="bigimg">
          <img
            src="../../assets/images/about/about02.jpg"
            alt
          >
        </div>
        <div class="topright">
          <p class="toprightp1">Finland Lapador s.r.l</p>
          <p class="toprightp1">
            <b>2017年《财富》全球未上市百强公司</b>
          </p>
          <p class="toprightp2">
            Lapador®1930创立于圣诞老人故乡一芬兰，至今半个多世纪的品牌历史；全球领先的母婴用品及芬兰宝宝箱研发、生产、销售商；旗下拥有Lapador®、啦普哆®、Visiel®、唯心怡®、Aiooma®、嗳嘛®等品牌；产品系列涵盖：安全防护、备孕健康、孕期胎教、生产哺乳、婴儿用品等。
            <br>Lapador®凭借半个多世纪的技术积累，坚持品质创新、不断改进产品；"full
            love from born"的品牌理念，从原料、生产到成品严格把关、严格检测，使得每一件产品倍加舒适、更值得信赖;“时代变迁，浓缩于啦普哆之间..."
          </p>
        </div>

      </div>
      <div class="yuan">
        <p class="yuanp1">CONTACT</p>
        <p class="yuanp2">US</p>
      </div>
    </div>
    <div class="love">
      <!-- 导航跳转的锚点 -->
      <a
        id="pinpailishi"
        style="font-size:0px;"
        name="pinpailishi"
      ></a>
      <p class="lo">
        <b>LOVE</b>
      </p>

      <p class="lovep2">
        <span class="pin">品牌</span>
        <span class="jian">历史</span>
      </p>
      <p class="Brand">BRAND INTRODUCTION</p>
      <ul class="shiji">
        <li
          class="shijili1"
          @click="showbtn(1)"
          ref="color1"
          style="color:#000000"
        >20世纪30年代</li>
        <li
          class="shijili2"
          @click="showbtn(2)"
          ref="color2"
        >20世纪50年代</li>
        <li
          class="shijili3"
          @click="showbtn(3)"
          ref="color3"
        >20世纪70年代</li>
        <li
          class="shijili4"
          @click="showbtn(4)"
          ref="color4"
        >进入20世纪</li>
        <li
          class="shijili5"
          @click="showbtn(5)"
          ref="color5"
        >今天</li>
      </ul>
      <div
        class="content"
        v-show="isShow"
      >
        <div class="contentimg">
          <img
            src="../../assets/images/about/about04.jpg"
            alt
          >
        </div>
        <p
          class="contentp"
          v-text="con"
        ></p>
      </div>
    </div>
    <div class="la">
      <!-- 导航跳转的锚点 -->
      <a
        id="quanqiuyanfa"
        style="font-size:0px;"
        name="quanqiuyanfa"
      ></a>
      <p class="lap1">
        <span class="lap1sp1">啦普哆</span>
        <span class="lap1sp2">（中国）</span>
      </p>
      <p class="Global">Global RESEARCH AND DEVELOPMENT</p>
      <p class="lacontent">
        啦普哆母婴用品(上海）有限公司由芬兰Lapador s.r.l在华成立的
        <span class="lacontentsp">全资控股子公司</span>，全面负责Lapador®大中华区品牌事物；大中华区总部位于中国·上海，同时在江苏·苏州、江苏·盐城等地拥有
        <span class="lacontentsp">全资控股生产基地</span>。85年Lapador®从单一的芬兰宝宝箱制造商到全球母婴用品专家的蜕变，得到了全球万千妈咪、宝贝的支持与肯定：“从心出发 北欧品质 中国制造”。
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/commons/footer/footer.vue";

//引入的导航页面跳转锚点的方法
//在要锚点的地方添加 a 标签
import {
  goAnchor,
  GetQueryString
} from "../../components/commons/header/anchor.js";

export default {
  data() {
    return {
      isShow: 1,
      con:
        "经历了二战炮火的芬兰当时新生儿的死亡率高达 6.5%，为了降低这个数字，提倡更加科学的孕育理念，政府决定给家境相对贫困的准妈妈免费赠送一个宝宝箱。"
    };
  },

  components: { Footer },
  mounted() {
    let maodian = this.GetQueryString("anchor"); //进入页面，如果带有锚点参数，则跳转至锚点地方，参数值就是id名
    if (maodian) {
      console.log(maodian);
      this.goAnchor("#" + maodian);
    }
  },
  /////////////////////////////////////////////////////////////////
  //引入的导航页面跳转锚点的方法
  methods: {
    goAnchor,
    GetQueryString,
    ////////////////////////////////////////////////////////////

    showbtn: function(x) {
      console.log(this.isShow);
      console.log(x);
      if (x == 1) {
        console.log(this.isShow);
        this.con =
          "经历了二战炮火的芬兰当时新生儿的死亡率高达 6.5%，为了降低这个数字，提倡更加科学的孕育理念，政府决定给家境相对贫困的准妈妈免费赠送一个宝宝箱。";
        this.$refs.color1.style.cssText = "color:#000000;";
        this.$refs.color2.style.cssText = "color:#aeaeae;";
        this.$refs.color3.style.cssText = "color:#aeaeae;";
        this.$refs.color4.style.cssText = "color:#aeaeae;";
        this.$refs.color5.style.cssText = "color:#aeaeae;";
        console.log(this.$refs);
      } else if (x == 2) {
        console.log(this.isShow);
        this.con =
          "Jorma Koljonen先生创立了Lapador®宝宝箱品牌，宝宝箱的功能性和物品内容得到了较大丰富，民众接受并认可使用纸箱作为宝宝床，Lapador®宝宝箱大大降低了芬兰新生儿死亡率。";
        this.$refs.color1.style.cssText = "color:#aeaeae;";
        this.$refs.color2.style.cssText = "color:#000000;";
        this.$refs.color3.style.cssText = "color:#aeaeae;";
        this.$refs.color4.style.cssText = "color:#aeaeae;";
        this.$refs.color5.style.cssText = "color:#aeaeae;";
      } else if (x == 3) {
        console.log(this.isShow);
        this.con =
          "睡袋在Lapador®宝宝箱中首次亮相，同时棉质纺织品、法兰绒的使用，宝宝箱的舒适性得到较大的提高；同时Lapador®宝宝箱中增加了 一次性纸尿片、奶瓶等更方便母亲的婴儿产品。";
        this.$refs.color1.style.cssText = "color:#aeaeae;";
        this.$refs.color2.style.cssText = "color:#aeaeae;";
        this.$refs.color3.style.cssText = "color:#000000;";
        this.$refs.color4.style.cssText = "color:#aeaeae;";
        this.$refs.color5.style.cssText = "color:#aeaeae;";
      } else if (x == 4) {
        console.log(this.isShow);
        this.con =
          "Lapador®宝宝箱为了鼓励 母乳喂养，纸箱里选择性的去除了奶瓶…Lapador®对宝宝箱包装全新设计并积极开拓海外市场，服务于更多的母婴家庭受到民众的普遍欢迎。";
        this.$refs.color1.style.cssText = "color:#aeaeae;";
        this.$refs.color2.style.cssText = "color:#aeaeae;";
        this.$refs.color3.style.cssText = "color:#aeaeae;";
        this.$refs.color4.style.cssText = "color:#000000;";
        this.$refs.color5.style.cssText = "color:#aeaeae;";
      } else if (x == 5) {
        console.log(this.isShow);
        this.con =
          "Lapador®以全新中文品牌“啦普哆®”致力于设计更符合中国元素的宝宝箱，服务万千中国妈咪宝贝。";
        this.$refs.color1.style.cssText = "color:#aeaeae;";
        this.$refs.color2.style.cssText = "color:#aeaeae;";
        this.$refs.color3.style.cssText = "color:#aeaeae;";
        this.$refs.color4.style.cssText = "color:#aeaeae;";
        this.$refs.color5.style.cssText = "color:#000000;";
      }
      //   if (this.isShow) {
      //     this.btnText = "隐藏";
      //   } else {
      //     this.btnText = "显示";
      //   }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./about.scss";
</style>