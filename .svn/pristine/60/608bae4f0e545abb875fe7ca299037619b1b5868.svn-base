<template>
  <div class="all">
    <div class="center">
      <div class="left">
        <p class="p1">{{clubdata.title}}</p>
        <p class="p3">
          <span class="sp1">阅读：{{clubdata.readCnt}}</span>
          <span class="sp1">好看：{{clubdata.goodCnt}}</span>
          <span class="sp1">时间：{{clubdata.createTime}}</span>
        </p>
      </div>
      <div class="img">
        <img
          src="../../assets/images/Clubdetails/clubdetails_03.jpg"
          alt=""
        >
      </div>

      <div class="title">
        <div class="hong"></div>
        <div class="titletop">{{clubdata.introduce}}</div>

      </div>
      <div
        ref="con"
        class="content"
        v-html="clubdata.content"
      >
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/commons/footer/footer.vue";
export default {
  targetUser: state => state.targetUser,
  data() {
    return {
      clubdata: {
        id: "", //当前id
        content: "", //内容
        createTime: "", //发布时间
        goodCnt: "", //好看人数
        introduce: "", //文章简要
        pic: "", //图片
        readCnt: "", //阅读
        title: "" //标题
      }
    };
  },
  components: {
    Footer
  },
  created() {
    // this.id = this.$route.params.id;
    //从sessionStorage把页面要用的参数取出来
    this.id = sessionStorage.getItem("id");
    // sessionStorage.clear("id");
    this.pagination();
  },
  updated() {
    // jquery方法修改
    $(".content")
      .find("p")
      .css("font-size", "20px")
      .css("line-height", "35px")
      .css("color", "#000000");
    $(".content")
      .find("p")
      .find("img")
      .css("width", "100%");
    // // refs
    // this.$refs.con.style.width = "1200px";
  },

  mounted() {
    // var con = document.querySelectorAll(".content p img");
    // this.con.style.width = "1200px";
  },
  methods: {
    pagination: function() {
      this.$api.post(
        "api_findArticleDetail.do",
        {
          id: this.id
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.clubdata.content = response.data.result.content;
            this.clubdata.createTime = response.data.result.createTime;
            this.clubdata.goodCnt = response.data.result.goodCnt;
            this.clubdata.introduce = response.data.result.introduce;
            this.clubdata.pic = response.data.result.pic;
            this.clubdata.readCnt = response.data.result.readCnt;
            this.clubdata.title = response.data.result.title;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
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
  .center {
    width: 1200px;
    margin: 0 auto;
    .left {
      width: 1200px;
      height: 140px;
      margin: 130px 0 0 0;
      .p1 {
        font-size: 30px;
        font-family: "微软雅黑";
        font-weight: bold;
        color: black;
        max-height: 80px;
        height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //超出几行才会变点
      }
      .p3 {
        margin: 36px 0 0 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC",
          "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        span {
          display: inline-block;
          min-width: 80px;
          height: 20px;
        }
      }
    }
    .img {
      width: 180px;
      height: 130px;
      display: inline-block;
      margin-left: 500px;
    }
    .title {
      width: 1120px;
      height: 155px;
      border: 1px solid #999999;
      border-radius: 10px 10px 0 0;
      margin: 0 auto;
      overflow: hidden;
      font-size: 24px;
      line-height: 40px;
      color: #000000;
      .hong {
        width: 100%;
        height: 10px;
        background: red;
      }
      .titletop {
        height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //超出几行才会变点
        margin: 32px 30px;
      }
    }
    .content {
      width: 100%;
      height: 100%;
      border: 3px dashed #b5bfcc;
      margin-top: 20px;
      padding: 10px;
      box-sizing: border-box;
      p {
        img {
          width: 1200px !important;
          height: 100%;
        }
      }
    }
  }
}
</style>
