<template>
  <div class="all">
    <div id="app"></div>
    <div class="xiang">
      <a id="baobaoxiang" style="font-size:0px;" name="baobaoxiang"></a>
      <div class="title">
        <p class="tp1">宝宝箱</p>
        <p class="tp2">THE BAY BOX</p>
      </div>
      <div class="xiangcon">

        <div class="content">
          <div class="condiv1">
            <img
              src="../../assets/images/product/xpxx_08.jpg"
              alt
              class="conimg1"
            >
            <p class="lap1">啦普哆（挚爱款）</p>
            <img
              src="../../assets/images/product/xpxx_02.jpg"
              alt
              class="jian1"
            >
          </div>
          <div class="condiv1right">
            <div class="condiv2">
              <img
                src="../../assets/images/product/xpxx_10.jpg"
                alt
                class="conimg"
              >
              <p class="lap1">啦普哆（成长款）</p>
              <img
                src="../../assets/images/product/xpxx_02.jpg"
                alt
                class="jian"
              >
            </div>
            <div class="condiv2">
              <img
                src="../../assets/images/product/xpxx_12.jpg"
                alt
                class="conimg"
              >
              <p class="lap1">啦普哆（挚金款）新生婴儿月子礼物</p>
              <img
                src="../../assets/images/product/xpxx_02.jpg"
                alt
                class="jian"
              >
            </div>
            <div class="condiv4">
              <img
                src="../../assets/images/product/xpxx_17.jpg"
                alt
                class="conimg"
              >
              <p class="lap1">啦普哆（成长款）</p>
              <img
                src="../../assets/images/product/xpxx_02.jpg"
                alt
                class="jian"
              >
            </div>
            <div class="condiv2">
              <img
                src="../../assets/images/product/xpxx_18.jpg"
                alt
                class="conimg"
              >
              <p class="lap1">啦普哆（挚金款）新生婴儿月子礼物</p>
              <img
                src="../../assets/images/product/xpxx_02.jpg"
                alt
                class="jian"
              >
            </div>
          </div>

        </div>
        <!-- <router-link to="/babybox"> -->
        <div
          class="more"
          @click="bbbox(1)"
        >
          more
          <i class="el-icon-caret-right"></i>
        </div>
        <!-- </router-link> -->

      </div>
    </div>
    <div class="xixin">
      <a id="xixinweiyang" style="font-size:0px;" name="xixinweiyang"></a>
      <div class="title">
        <p class="tp1">
          <span class="xi">悉心</span>喂养
        </p>
        <p class="tp2">LOCING FEEDING</p>
      </div>
      <div class="content2">
        <div class="tu">
          <img
            src="../../assets/images/product/xpxx_27.jpg"
            alt
          >
        </div>
        <div class="tu2">
          <img
            src="../../assets/images/product/xpxx_03.jpg"
            alt
          >
        </div>
        <div class="santu">
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_34.jpg"
              alt
            >
          </div>
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_36.jpg"
              alt
            >
          </div>
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_07.jpg"
              alt
            >
          </div>
        </div>
      </div>

      <div
        class="more"
        @click="xxwy(2)"
      >
        more
        <i class="el-icon-caret-right"></i>
      </div>
    </div>
    <div class="tiexin">
      <a id="tiexinhuli"  style="font-size:0px;" name="tiexinhuli"></a>
      <div class="title">
        <p class="tp1">
          <span class="xi">贴心</span>护理
        </p>
        <p class="tp2">CONSIDERATE CARE</p>
      </div>
      <div class="content2">
        <div class="top">
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_45.jpg"
              alt
            >
          </div>
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_47.jpg"
              alt
            >
          </div>
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_49.jpg"
              alt
            >
          </div>
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_11.jpg"
              alt
            >
          </div>
        </div>
        <div class="bottom">
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_54.jpg"
              alt
            >
          </div>
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_56.jpg"
              alt
            >
          </div>
          <div class="tu23">
            <img
              src="../../assets/images/product/xpxx_14.jpg"
              alt
            >
          </div>
        </div>
      </div>

      <div
        class="more"
        @click="txhl(3)"
      >
        more
        <i class="el-icon-caret-right"></i>
      </div>
    </div>
    <div class="tiexin">
      <a id="nuanxinfushi"></a>
      <div class="title">
        <p class="tp1">
          <span class="xi">暖心</span>服饰
        </p>
        <p class="tp2">WARM HEART DRESS</p>
      </div>
      <div class="content9">
        <el-carousel
          :interval="4000"
          type="card"
          height="440px"
          :autoplay="true"
          style="position:relative"
          indicator-position="none"
        >
          <el-carousel-item
            v-for="(item,index) of content"
            :key="index"
            autoplay="true"
          >
            <p style="position:absolut;text-align:center;font-size:18px">{{ item }}</p>
          </el-carousel-item>
        </el-carousel>
        <!-- <div class="tu21">
          <img src="../../assets/images/product/产品信息_22.jpg" alt>
        </div>
        <div class="tu22">
          <img src="../../assets/images/product/产品信息_20.jpg" alt>
        </div>
        <div class="tu23">
          <img src="../../assets/images/product/产品信息_19.jpg" alt>
        </div>
        <div class="tu22">
          <img src="../../assets/images/product/产品信息_20.jpg" alt>
        </div>
        <div class="tu21">
          <img src="../../assets/images/product/产品信息_22.jpg" alt>
        </div>-->
      </div>

      <div
        class="more"
        @click="nxfs(4)"
      >
        more
        <i class="el-icon-caret-right"></i>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/commons/footer/footer.vue";
import {
  goAnchor,
  GetQueryString
} from "../../components/commons/header/anchor.js";
export default {
  data() {
    return {
      category: "",
      content: [
        "婴儿帽子 宝宝吉祥帽 纯棉舒适新生儿胎帽",
        "婴儿帽子 宝宝吉祥帽 纯棉舒适新生儿胎帽",
        "婴儿帽子 宝宝吉祥帽 纯棉舒适新生儿胎帽",
        "婴儿帽子 宝宝吉祥帽 纯棉舒适新生儿胎帽",
        "婴儿帽子 宝宝吉祥帽 纯棉舒适新生儿胎帽"
      ]
    };
  },
  components: { Footer },
  methods: {
    goAnchor,
    GetQueryString,
    bbbox: function(x) {
      this.category = x;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("category", this.category);
      console.log(this.category);
      //   this.pagination();
      this.$router.push({
        name: "babybox",
        params: {
          category: this.category
        }
      });
    },
    xxwy: function(x) {
      this.category = x;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("category", this.category);
      console.log(this.category);
      //   this.pagination();
      this.$router.push({
        name: "babybox",
        params: {
          category: this.category
        }
      });
    },
    txhl: function(x) {
      this.category = x;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("category", this.category);
      console.log(this.category);
      //   this.pagination();
      this.$router.push({
        name: "babybox",
        params: {
          category: this.category
        }
      });
    },
    nxfs: function(x) {
      this.category = x;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("category", this.category);
      console.log(this.category);
      //   this.pagination();
      this.$router.push({
        name: "babybox",
        params: {
          category: this.category
        }
      });
    }

    // pagination: function() {
    //   //查询条件
    //   //   var param = {
    //   //     page: page,
    //   //     pageSize: pageSize
    //   //     //其它查询条件可在下面添加
    //   //   };
    //   this.$api.post(
    //     "/api/api_findGoodsList.do",
    //     {
    //       category: this.category,
    //       page: 1,
    //       pageSize: 10
    //     },
    //     response => {
    //       if (response.status >= 200 && response.status < 300) {
    //         console.log(response.data); //请求成功，response为成功信息参数
    //         this.list = response.data.result.list;
    //         this.total = response.data.result.total;
    //       } else {
    //         console.log(response.message); //请求失败，response为失败信息
    //       }
    //     }
    //   );
    // }
  },
  mounted() {
    let maodian = this.GetQueryString("anchor"); //进入页面，如果带有锚点参数，则跳转至锚点地方，参数值就是id名
    if (maodian) {
      console.log(maodian);
      this.goAnchor("#" + maodian);
    }
  }
};
</script>
<style lang="scss" scoped>
.all {
  margin: 0px;
  padding: 0px;
  width: 100%;
  //   overflow: hidden;
}

#app {
  width: 100%;
  min-width: 1200px;
  height: 34.5vw;
  min-height: 416px;
  background: url("../../assets/images/product/xpxx_01.jpg") no-repeat;
  background-size: 100% 100%;
  margin: 0px;
  padding: 1px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.el-carousel__item:nth-child(2n) {
  background: url("../../assets/images/product/xpxx_19.jpg") no-repeat;
  // margin-right:100px;
}

.el-carousel__item:nth-child(2n + 1) {
  background: url("../../assets/images/product/xpxx_19.jpg") no-repeat;
  // margin-left: 100px;
}

.xiang {
  width: 100%;
  height: 1030px;
  background: #ffffff;
  padding: 1px;
  box-sizing: border-box;
  .title {
    width: 200px;
    margin: 100px auto 70px auto;
    text-align: center;
    .tp1 {
      font-size: 22px;
      font-family: "微软雅黑";
      font-weight: bold;
    }
    .tp2 {
      font-size: 12px;
      font-family: "微软雅黑";
      font-weight: bold;
      color: #b2b2b2;
    }
  }
  .xiangcon {
    width: 1200px;
    margin: 0 auto;
    .content {
      .condiv1 {
        width: 530px;
        height: 765px;
        display: inline-block;
        // margin-left: 350px;
        .conimg1 {
          width: 100%;
          height: 434;
        }
        .lap1 {
          font-size: 16px;
          font-family: "微软雅黑";
          font-weight: bold;
          margin: 30px 0 20px 0;
        }
        .jian1 {
          margin-bottom: 306px;
        }
      }
      .condiv1right {
        width: 630px;
        height: 765px;
        margin-left: 20px;
        display: inline-block;
        .condiv2 {
          width: 300px;
          height: 368px;
          display: inline-block;
          margin: 0 0 0 12px;
          .conimg {
            width: 100%;
            height: 244px;
          }
          .lap1 {
            font-size: 16px;
            font-family: "微软雅黑";
            font-weight: bold;
            margin: 30px 0 20px 0;
          }
          .jian {
            float: right;
          }
        }
        .condiv4 {
          width: 310px;
          height: 255px;
          display: inline-block;
          .conimg {
            width: 100%;
            height: 100%;
          }
          .lap1 {
            font-size: 16px;
            font-family: "微软雅黑";
            font-weight: bold;
            margin: 30px 0 20px 0;
          }
          .jian {
            float: right;
          }
        }
      }
    }
    .more {
      width: 120px;
      height: 42px;
      border: 1px solid #b2b2b2;
      border-radius: 22px;
      color: #b2b2b2;
      // display: inline-block;
      text-align: center;
      line-height: 42px;
      margin: 0 auto;
    }
  }
}
.xixin {
  width: 100%;
  height: 1230px;
  background: #ffffff;
  padding: 1px;
  box-sizing: border-box;
  .title {
    width: 200px;
    margin: 100px auto 70px auto;
    text-align: center;
    .tp1 {
      font-size: 22px;
      font-family: "微软雅黑";
      font-weight: bold;
      .xi {
        color: #caac48;
      }
    }
    .tp2 {
      font-size: 12px;
      font-family: "微软雅黑";
      font-weight: bold;
      color: #b2b2b2;
    }
  }

  .content2 {
    width: 1180px;
    height: 886px;
    margin: 0 auto;
    position: relative;
    .tu {
      width: 800px;
      height: 520px;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tu2 {
      width: 440px;
      height: 328px;
      display: inline-block;
      position: absolute;
      top: 130px;
      right: 0px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tu23 {
      width: 360px;
      height: 300px;
      display: inline-block;
      margin-top: 70px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .santu {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: space-between;
    }
  }
  .more {
    width: 120px;
    height: 42px;
    border: 1px solid #b2b2b2;
    border-radius: 22px;
    color: #b2b2b2;
    // display: inline-block;
    text-align: center;
    line-height: 42px;
    margin: 80px auto 0 auto;
  }
}
.tiexin {
  width: 100%;
  height: 858px;
  background: #ffffff;
  padding: 1px;
  box-sizing: border-box;
  .title {
    width: 200px;
    margin: 100px auto 70px auto;
    text-align: center;
    .tp1 {
      font-size: 22px;
      font-family: "微软雅黑";
      font-weight: bold;
      .xi {
        color: #caac48;
      }
    }
    .tp2 {
      font-size: 12px;
      font-family: "微软雅黑";
      font-weight: bold;
      color: #b2b2b2;
    }
  }

  .content2 {
    width: 1180px;
    height: 500px;
    margin: 0 auto;
    img {
      height: 235px;
    }
    .top {
      width: 100%;
      height: 235px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }
    .bottom {
      width: 100%;
      height: 235px;
      display: flex;
      justify-content: space-between;
    }
  }
  .more {
    width: 120px;
    height: 42px;
    border: 1px solid #b2b2b2;
    border-radius: 22px;
    color: #b2b2b2;
    // display: inline-block;
    text-align: center;
    line-height: 42px;
    margin: 80px auto 0 auto;
  }
}
.content9 {
  width: 1050px;
  height: 445px;
  margin: 0 auto;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  //   div {
  //     // width: 100%;
  //     // height: 100%;
  //   }
}
.more {
  cursor: pointer;
}
</style>