<template>
  <!--脚部footer-->
  <div class="bottom-foot">
    <div class="bottom-content">
      <div class="top-line">
        <ul>
          <li
            v-for="(item,index) in headList"
            :key="index"
          >
            <a
              :class="selectNum == index ? 'active' : ''"
              @click="selectTab(index, item.path)"
            >{{item.text}}</a>
          </li>
        </ul>
        <div class="left-img">
          <img src="../../../assets/images/about/about06.jpg">
          <div class="text">啦普哆官方微信</div>
        </div>
        <div class="middle-img">扫一扫 · 知更多</div>
        <div class="right-img">
          <img src="../../../assets/images/about/about07.jpg">
          <div class="text">啦普哆官方微博</div>
        </div>
      </div>
      <div class="bottom-line">Lapador©1930-2018 沪ICP备17000368号 沪公网备31011202002849号 后台管理</div>
    </div>
  </div>
</template>

<script>
import { removeToken } from "@/utils/cookie";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      headList: [
        //tab导航
        { text: "旗下官网", path: "/home" },
        { text: "人才招聘", path: "/recruitment" },
        { text: "隐私保护政策", path: "/privacyTerms" },
        { text: "网站使用条款", path: "/websiteTerms" },
        { text: "社交使用条款", path: "/socialTerms" }
      ],
      selectNum: 0, //选中的tab下标
      showMask: false //控制遮罩层显隐的开关
    };
  },
  mounted() {},
  watch: {
    $route: {
      handler(val) {
        let path = this.$route.path;
        //   // 检索当前路径
        this.checkRouterLocal(path);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    selectTab(index, path) {
      this.selectNum = index;
      this.$router.push({
        path: path
      });
    },
    checkRouterLocal(path) {
      //监听路由 根据路由下标高亮
      // 查找当前路由下标高亮
      this.selectNum = this.headList.findIndex(item => item.path === path);
    },
    toPart(item, index) {
      this.$router.push({
        name: this.imgList[index].name,
        query: { type: item.id }
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.bottom-foot {
  height: 288px;
  width: 100%;
  background: #262626;
  .bottom-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .top-line {
      border-bottom: 1px solid #515151;
      width: 1160px;
      height: 220px;
      margin: 0 auto;
      ul {
        float: left;
        height: 220px;
        // font: 16px/220px "";
        font-size: 16px;
        line-height: 220px;
        cursor: pointer;
        li {
          float: left;
          padding: 0 30px;
          a {
            color: #ffffff;
          }
        }
      }
      .left-img {
        float: left;
        margin: 42px 0 0 80px;
        img {
          width: 100px;
          height: 100px;
        }
        .text {
          font: 16px/30px "";
          color: #ffffff;
        }
      }
      .middle-img {
        float: left;
        text-align: center;
        width: 20px;
        line-height: 14px;
        margin: 50px 20px;
        color: #ffffff;
      }
      .right-img {
        float: left;
        margin-top: 42px;
        img {
          width: 100px;
          height: 100px;
        }
        .text {
          font: 16px/30px "";
          color: #ffffff;
        }
      }
    }
    .bottom-line {
      margin-left: 230px;
      font: 16px/70px "";
      color: #919191;
    }
  }

  .change-text {
    float: right;
    font-size: 16px;
    cursor: pointer;
    color: #ffffff;
    padding-left: 20px;
  }
}

.mask {
  width: 100%;
  height: 270px;
  background: #f5f5f5;
  z-index: 9999;
  position: absolute;
  .part-name {
    height: 100%;
    width: 1000px;
    margin: 0 auto;
    ul {
      overflow: hidden;
      width: 100%;
      li {
        float: left;
        padding: 18px 50px;
        .pic {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
