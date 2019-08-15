<template>
  <!-- <div>
    <el-carousel height="440px">
      <el-carousel-item class="el-carousel__item" v-for="item in imgList" :key="item.id">
        <img class="carousel-image" :src="item.pic"/>
      </el-carousel-item>
  </el-carousel>-->
  <!--下面的主要内容-->
  <!-- <img src="../../assets/images/首页-2.jpg"/>
  </div>-->
  <div id="app-home">
    <div class="left">
      <span class="sp">微信</span>
      <img src="../../assets/images/index/sy_14.png" class="wei">
      
      <span class="sp">微博</span>
      <img src="../../assets/images/index/sy_03.png" class="bo">
<img src="../../assets/images/about/about06.jpg" alt="" class="wei1" >
<img src="../../assets/images/about/about07.jpg" alt="" class="bo1">
    </div>
    
    <div class="right">
      <div>
        <img src="../../assets/images/index/sy_07.png">
        <span class="rightprev">PREV</span>
      </div>

      <div>
        <span class="rightnext">NEXT</span>
        <img src="../../assets/images/index/sy_11.png">
      </div>
    </div>
    <ul>
      <li
        class="slide1"
        :class='[activeIndex == 1 ? outStyle : "",showIndex == 1 ? "next-show" : ""]'
      >
        <div
          class="center"
          :class='[showIndex == 1 ? "child-in" : ""]'
        >
          <p class="full">FULL LOVE FROM BORN</p>
          <p class="ni">你的品质选择</p>
          <p class="ni">
            <span class="cheng">成就宝宝</span> 品质生活
          </p>
          <p class="Your">Your quality choice makes Your baby’s quality life</p>
          <p class="Your">Everything can be simple</p>
          <div class="liao">
            <p>
              了解更多
              <i class="layui-icon layui-icon-triangle-r"></i>
            </p>
          </div>
        </div>
      </li>
      <li
        class="slide1"
        :class='[activeIndex == 2 ? outStyle : "",showIndex == 2 ? "next-show" : ""]'
      >
        <div
          class="center"
          :class='[showIndex == 2 ? "child-in" : ""]'
        >
          <p class="full">FULL LOVE FROM BORN</p>
          <p class="ni">你的品质选择</p>
          <p class="ni">
            <span class="cheng">成就宝宝</span> 品质生活
          </p>
          <p class="Your">Your quality choice makes Your baby’s quality life</p>
          <p class="Your">Everything can be simple</p>
          <div class="liao">
            <p>
              了解更多
              <i class="layui-icon layui-icon-triangle-r"></i>
            </p>
          </div>
        </div>
      </li>
      <li
        class="slide1"
        :class='[activeIndex == 3 ? outStyle : "",showIndex == 3 ? "next-show" : ""]'
      >
        <div
          class="center"
          :class='[showIndex == 3 ? "child-in" : ""]'
        >
          <p class="full">FULL LOVE FROM BORN</p>
          <p class="ni">你的品质选择</p>
          <p class="ni">
            <span class="cheng">成就宝宝</span> 品质生活
          </p>
          <p class="Your">Your quality choice makes Your baby’s quality life</p>
          <p class="Your">Everything can be simple</p>
          <div class="liao">
            <p>
              了解更多
              <i class="layui-icon layui-icon-triangle-r"></i>
            </p>
          </div>
        </div>
      </li>
      <li
        class="slide1"
        :class='[activeIndex == 4 ? outStyle : "",showIndex == 4 ? "next-show" : ""]'
      >
        <div
          class="center"
          :class='[showIndex == 4 ? "child-in" : ""]'
        >
          <p class="full">FULL LOVE FROM BORN</p>
          <p class="ni">你的品质选择</p>
          <p class="ni">
            <span class="cheng">成就宝宝</span> 品质生活
          </p>
          <p class="Your">Your quality choice makes Your baby’s quality life</p>
          <p class="Your">Everything can be simple</p>
          <div class="liao">
            <p>
              了解更多
              <i class="layui-icon layui-icon-triangle-r"></i>
            </p>
          </div>
        </div>
      </li>
      <li
        class="slide1"
        :class='[activeIndex == 5 ? outStyle : "",showIndex == 5 ? "next-show" : ""]'
      >
        <div
          class="center"
          :class='[showIndex == 5 ? "child-in" : ""]'
        >
          <p class="full">FULL LOVE FROM BORN</p>
          <p class="ni">你的品质选择</p>
          <p class="ni">
            <span class="cheng">成就宝宝</span> 品质生活
          </p>
          <p class="Your">Your quality choice makes Your baby’s quality life</p>
          <p class="Your">Everything can be simple</p>
          <div class="liao">
            <p>
              了解更多
              <i class="layui-icon layui-icon-triangle-r"></i>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="foot">
      <div class="footp">
        <p>向下</p>
        <p>滑动</p>
      </div>
      <img
        src="../../assets/images/index/shu.png"
        alt
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        // { id: "1", pic: require("../../assets/images/首页-1.jpg") },
        // { id: "2", pic: require("../../assets/images/首页-1.jpg") },
        // { id: "3", pic: require("../../assets/images/首页-1.jpg") }
      ],
      activeIndex: -1,
      showIndex: 1,
      wheel: true,
      direction: "",
      slideCount: 5,
      styleList: ["out-left", "out-right", "out-top", "out-bottom"],
      outStyle: ""
    };
  },
  methods: {
    handleWheel: function(e) {
      let that = this;
      if (that.wheel) {
        that.wheel = false;
        setTimeout(function() {
          that.wheel = true;
        }, 1000);
        that.outStyle = that.styleList[that.getRandom(0, 3)];
        if (e.wheelDelta > 0) {
          // 向上滚动
          if (that.direction == "up" || that.direction == "") {
            if (that.activeIndex == -1) {
              // 初始状态，第一次滚动
              that.activeIndex = 1;
            } else {
              if (that.activeIndex == 1) {
                that.activeIndex = that.slideCount;
              } else {
                that.activeIndex -= 1;
              }
            }
          } else {
            if (that.activeIndex == that.slideCount) {
              that.activeIndex = 1;
            } else {
              that.activeIndex += 1;
            }
          }
          that.direction = "up";
          if (that.activeIndex == 1) {
            that.showIndex = that.slideCount;
          } else {
            that.showIndex -= 1;
          }
        } else {
          // 向下滚动
          if (that.direction == "down" || that.direction == "") {
            if (that.activeIndex == -1) {
              // 初始状态，第一次滚动
              that.activeIndex = 1;
            } else {
              if (that.activeIndex == that.slideCount) {
                that.activeIndex = 1;
              } else {
                that.activeIndex += 1;
              }
            }
          } else {
            if (that.activeIndex == 1) {
              that.activeIndex = that.slideCount;
            } else {
              that.activeIndex -= 1;
            }
          }
          that.direction = "down";
          if (that.activeIndex == that.slideCount) {
            that.showIndex = 1;
          } else {
            that.showIndex += 1;
          }
        }
        console.log("activeIndex=" + that.activeIndex);
        console.log("showIndex=" + that.showIndex);
      }
    },
    //  生成x~y之间的随机数
    getRandom(x, y) {
      let Range = y - x;
      let Rand = Math.random();
      return x + Math.round(Rand * Range);
    }
  },
  created() {
    window.addEventListener("wheel", this.handleWheel, false); // 监听页面鼠标滚动事件
  },
  components: {}
};
</script>

<style lang="scss" scoped>
/*// .el-carousel__item {
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .carousel-image {
//     max-width: 100%;
//     max-height: 100%;
//   }
// }*/
  .wei1{
    width: 80px;
    height: 80px;
    opacity: 0;
  }
  .bo1{
    width: 80px;
    height: 80px;
    opacity: 0;
  }
#app-home {

  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 1px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  padding-top: 60px;
  min-width: 1200px;
}

a {
  font-family: "微软雅黑";
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

.yellow {
  color: #e9bc54;
}

.left {
  width: 190px;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* border: 1px solid; */
  transform: rotate(-90deg);
  margin-top: 370px;
  // margin-left: -30px;
  position: relative;
  z-index: 10;
}
.wei:hover+span+img+img{
  opacity: 1;
}
.bo:hover+img+img{
  opacity: 1;
}
.sp {
  font-size: 14px;
  margin: 0px 14px;
}

.right {
  /* color: #ffffff; */
  float: right;
  margin-right: 66px;
  position: fixed;
  right: 0px;
  z-index: 10;
}

.rightprev {
  font-family: "微软雅黑";
  font-size: 16px;
  font-weight: bold;
  color: #c7c7d0;
}

.rightnext {
  font-family: "微软雅黑";
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

.rightnexti {
  display: inline-block;
  transform: rotate(180deg);
}

.center {
  margin: 360px 0 0 343px;
}

.center p {
  margin: 13px 0;
}

.full {
  font-family: "微软雅黑";
  font-size: 16px;
  font-weight: bold;
  color: #ffd050;
}

.ni {
  font-family: "黑体";
  font-size: 56px;
  font-weight: bold;
  color: #ffffff;
}

.cheng {
  color: #ffd050;
}

.Your {
  font-family: "微软雅黑";
  font-size: 16px;
  /* font-weight: bold; */
  color: #f1f0f2;
}

.liao {
  width: 154px;
  height: 50px;
  background: #ffd050;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  color: #ffffff;
  font-size: 16px;
  margin: 50px 0 0 0;
}

.foot {
  width: 60px;
  height: 105px;
  border-top: 2px solid #c7c7d0;
  border-left: 2px solid #c7c7d0;
  border-right: 2px solid #c7c7d0;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  /* font-weight: bold; */
  color: #ffffff;
  /* position: absolute; */
  /* bottom: 0px; */
  /*margin: 125px auto 0 auto;*/
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
}

.footp {
  margin: 10px 0;
  text-align: center;
}

ul,
li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.slide1 {
  background: url("../../assets/images/index/index.jpg") no-repeat;
  //   background-size: cover;
}

.out-left {
  -webkit-animation: out_left 1s ease forwards;
  z-index: 9;
}
.out-right {
  -webkit-animation: out_right 1s ease forwards;
  z-index: 9;
}
.out-top {
  -webkit-animation: out_top 1s ease forwards;
  z-index: 9;
}
.out-bottom {
  -webkit-animation: out_bottom 1s ease forwards;
  z-index: 9;
}
.next-show {
  z-index: 8;
}
@keyframes out_left {
  30% {
    transform: scale(0.8) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.6) translateX(-1920px);
    opacity: 0;
  }
}
@keyframes out_right {
  30% {
    transform: scale(0.8) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.6) translateX(1920px);
    opacity: 0;
  }
}
@keyframes out_top {
  30% {
    transform: scale(0.8) translateY(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.6) translateY(-1920px);
    opacity: 0;
  }
}
@keyframes out_bottom {
  30% {
    transform: scale(0.8) translateY(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.6) translateY(1920px);
    opacity: 0;
  }
}
.child-in {
  -webkit-animation: child_in 1.5s ease;
}
@keyframes child_in {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  20% {
    transform: translateY(100px);
    opacity: 0.4;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

