<template>
  <div class="all">
    <div id="app"></div>
    <div class="shang">
      <!-- 导航跳转的锚点 -->
      <a
        id="shangpinfuwu"
        style="font-size:0px;"
        name="shangpinfuwu"
      ></a>
      <p class="title">
        <span class="sp1">商品</span>服务
      </p>
      <div class="content">
        <div
          class="liutu"
          v-for="item in liutu"
          :key="item.id"
        >
          <img
            :src="item.pic"
            alt
            class="img1"
          >
          <p class="p1">{{item.name}}</p>
          <p class="p2">{{item.content}}</p>
        </div>
      </div>
    </div>
    <div class="ke">
      <!-- 导航跳转的锚点 -->
      <a
        id="kehuzhichi"
        style="font-size:0px;"
        name="kehuzhichi"
      ></a>
      <div class="title">
        <p class="tp1">
          <span class="kehu">客户</span>支持
        </p>
        <p class="tp2">CUSTOMER SUPPORT</p>
      </div>
      <div class="divimg">
        <img
          src="../../assets/images/service/fwzc_25.jpg"
          alt
        >
      </div>
    </div>
    <div class="he">
      <!-- 导航跳转的锚点 -->
      <a
        id="qudaohezuo"
        style="font-size:0px;"
        name="qudaohezuo"
      ></a>
      <div class="hebj">
        <div class="hetitle">
          <p class="tp1">
            <span class="kehu">渠道</span>合作
          </p>
          <p class="tp2">CHANNELS OF COOPERATION</p>
        </div>
        <div
          class="contact-right"
          ref="ti"
          v-show="isshow"
        >
          <div class="input-name">
            <input
              class="input-type"
              type="text"
              id="name"
              placeholder="请输入姓名"
              v-model="name"
            >
          </div>
          <div class="input-name in">
            <!-- <label class="la">邮箱</label> -->
            <input
              class="input-type b"
              type="text"
              placeholder="请输入您的邮箱"
              v-model="mail"
              @change="email"
            >
          </div>
          <div class="input-name in">
            <!-- <label class="la">电话</label> -->
            <input
              class="input-type b"
              type="text"
              placeholder="请输入您的电话"
              v-model="phone"
              @change="tel"
            >
          </div>
          <div class="input-name inright">
            <textarea
              class="input-type textarea"
              type="textarea"
              rows="10"
              cols="40"
              placeholder="请输入您的描述内容"
              v-model="des"
            ></textarea>
          </div>
          <div
            class="button-us"
            @click="send"
          >
            <img
              src="../../assets/images/service/fwzc_04.png"
              alt
            >发送消息
          </div>
        </div>
        <div
          class="cheng"
          ref="ok"
          v-show="noshow"
        >
          <img
            src="../../assets/images/service/1.png"
            alt
          >
          <p class="chengp1">发送成功！</p>
          <p
            class="chengp2"
            @click="elsend"
          >再次发送信息</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/commons/footer/footer.vue";
export default {
  data() {
    return {
      liutu: [
        {
          id: "1",
          pic: require("../../assets/images/service/fwzc_04.jpg"),
          name: "安全III级测试",
          content:
            "Lapador®产品的设计从有效的保护心理、身体及媒体的角度出发，产品的实验场地符合欧盟最新、最严格的测试！"
        },
        {
          id: "2",
          pic: require("../../assets/images/service/fwzc_06.jpg"),
          name: "免费培训课程",
          content:
            "Lapador®在移动的环境下对母婴的生活环境进行仔细分析**同时在全球配有“内部员工和客户”产品体验中心，提供不同产品的产品体验！"
        },
        {
          id: "3",
          pic: require("../../assets/images/service/fwzc_08.jpg"),
          name: "产品随心定制",
          content:
            "Lapador®一支训练有素的服务团队为客户实现个性化特殊定制；除了安全舒适的产品外，漂亮的个性化服务也是我们一直在努力的！"
        },
        {
          id: "4",
          pic: require("../../assets/images/service/fwzc_14.jpg"),
          name: "高端物流服务",
          content:
            "Lapador®限时物流包裹交付和个性化的信封，全部拥有公司完整的知识产权！"
        },
        {
          id: "5",
          pic: require("../../assets/images/service/fwzc_17.jpg"),
          name: "全球质量保证",
          content:
            "Lapador®宝宝箱采用芬兰及欧洲各地食品级原生纤维原料确保无杂质及任何污染；安全从细节出发，每一个小的创新，都是对宝宝的全方位呵护！"
        },
        {
          id: "6",
          pic: require("../../assets/images/service/fwzc_19.jpg"),
          name: "无理由退换服务",
          content:
            "Lapador®所提供的产品以客户的满意为第一标准，使用我们产品过程中有任何的不满意，我们为您做到免费置换，全球同步不受时间、地域限制！"
        }
        // { id: "1", pic: require("../../assets/images/首页-1.jpg") },
        // { id: "2", pic: require("../../assets/images/首页-1.jpg") },
        // { id: "3", pic: require("../../assets/images/首页-1.jpg") }
      ],
      name: "",
      mail: "",
      phone: "",
      des: "",
      isshow: true,
      noshow: false
    };
  },
  components: { Footer },
  watch: {
    phone: function() {
      this.phone = this.phone.replace(/[\W]/g, "");
    }
  },
  methods: {
    //弹窗组件
    open(x) {
      this.$alert(x, "确认信息", {
        confirmButtonText: "确定"
        //页面上方提示信息，相当于alert
        // callback: action => {
        //   this.$message({
        //     type: "info",
        //     // message: `action: ${action}`
        //   });
        // }
      });
    },
    //邮箱验证
    email: function() {
      var email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (!email.test(this.mail)) {
        // alert("请输入正确的邮箱");
        this.open("请输入正确的邮箱");
        this.mail = "";
        // return;
      }
    },
    //电话验证
    tel: function() {
      if (!/^1[345789]\d{9}$/.test(this.phone)) {
        // alert("请输入正确的手机号");
        this.open("请输入正确的手机号");
        this.phone = "";
        // return;
      }
    },
    //发送请求
    send: function() {
      if (
        this.name != "" &&
        this.mail != "" &&
        this.phone != "" &&
        this.des != ""
      ) {
        this.$api.post(
          "/api_addService.do",
          {
            name: this.name,
            mail: this.mail,
            phone: this.phone,
            des: this.des
          },
          response => {
            if (response.status >= 200 && response.status < 300) {
              //   this.$refs.ok.style.cssText = "z-index:9;";
              this.isshow = false;
              this.noshow = true;
              console.log(response.data); //请求成功，response为成功信息参数
            } else {
              console.log(response.message); //请求失败，response为失败信息
            }
          }
        );
      } else {
        // alert("请把信息填写完整");
        this.open();
      }

      //改变发送成功的样式
      //   this.$refs.ti.style.cssText = "display:none;";
      // this.$refs.ok.style.cssText = "z-index:9;";
    },
    elsend: function() {
      //   this.$refs.ok.style.cssText = "z-index:-9;";

      this.isshow = true;
      this.noshow = false;
      this.name = "";
      this.mail = "";
      this.phone = "";
      this.des = "";
      console.log(this.name, this.mail, this.phone, this.des);
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
  background: url("../../assets/images/service/fwzc_01.jpg") no-repeat;
  background-size: 100% 100%;
  margin: 0px;
  padding: 1px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.shang {
  width: 1070px;
  height: 1100px;
  margin: 0 auto;
  padding: 1px;
  box-sizing: border-box;
  .title {
    text-align: center;
    margin: 100px auto;
    font-size: 22px;
    font-family: "微软雅黑";
    font-weight: bold;

    // color: #caac48;
    .sp1 {
      color: #caac48;
    }
  }

  .content {
    width: 78vw;
    max-width: 1070px;
    min-width: 1070px;
    height: 850px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;

    .liutu {
      width: 265px;
      height: 400px;
      text-align: center;
      margin: 0 20px 50px 20px;

      .p1 {
        font-size: 16px;
        font-family: "微软雅黑";
        // font-weight: bold;
        margin: 20px auto;
      }

      .p2 {
        font-size: 16px;
        font-family: "微软雅黑";
        // font-weight: bold;
        text-align: left;
        line-height: 30px;
      }
    }
  }
}

.title {
  width: 200px;
  height: 50px;
  margin: 100px auto 70px auto;
  text-align: center;

  .tp1 {
    font-size: 22px;
    font-family: "微软雅黑";
    font-weight: bold;

    .kehu {
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

.ke {
  width: 100%;
  height: 970px;
  text-align: center;
  padding: 1px;
  box-sizing: border-box;
  .divimg {
    width: 1200px;
    // height: 792px;
    display: inline-block;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.he {
  width: 100%;
  min-width: 1200px;
  height: 857px;
  background: url("../../assets/images/service/fwzc_03.jpg") no-repeat;
  background-position: center center; //不管页面怎么变背景图始终是处于中间位置
  background-size: cover;
  padding: 1px;
  box-sizing: border-box;

  .hebj {
    width: 1180px;
    height: 590px;
    background: #ffffff;
    margin: 135px auto;
    position: relative;
    .hetitle {
      width: 95px;
      height: 100px;
      // margin: 260px 0 0 395px;
      display: inline-block;
      position: absolute;
      top: 120px;
      left: 42px;

      .tp1 {
        font-size: 22px;
        font-family: "微软雅黑";
        font-weight: bold;
        margin: 5px 0;

        .kehu {
          color: #caac48;
        }
      }

      .tp2 {
        font-size: 12px;
        font-family: "微软雅黑";
        font-weight: bold;
        color: #b2b2b2;
        line-height: 20px;
      }
    }

    .contact-right {
      display: inline-block;
      width: 960px;
      height: 528px;
      margin: 62px 0 0 220px;
      position: relative;

      .input-name {
        width: 320px;
        height: 40px;
        border-bottom: 1px solid #b2b2b2;
        margin-top: 40px;

        .input-type {
          width: 320px;
          height: 40px;
          font-size: 18px;
          border: none;
          outline: none;
          // background: #6a6a69;
          opacity: 0.8;
        }
      }

      .in {
        width: 320px;
        height: 100px;
        border-bottom: 1px solid #b2b2b2;

        .la {
          display: inline-block;
          font-size: 18px;
          color: #999999;
          margin-bottom: 20px;
        }
      }

      .inright {
        width: 320px;
        height: 325px;
        border-bottom: 1px solid #b2b2b2;
        display: inline-block;
        position: absolute;
        left: 460px;
        top: 0px;
      }

      .button-us {
        width: 353px;
        height: 64px;
        background: #caad49;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-family: "微软雅黑";
        font-weight: bold;
        color: #ffffff;
        position: absolute;
        right: 0px;
        bottom: 0px;
        cursor: pointer;

        img {
          margin-right: 5px;
        }
      }
    }
  }
}
.textarea {
  width: 320px !important;
  height: 320px !important;
}
.cheng {
  width: 960px;
  height: 528px;
  background: #ffffff;
  position: absolute;
  top: 60px;
  left: 218px;
  //   z-index: -9;
  text-align: center;
  font-size: 16px;

  //   display: none;
  .chengp1 {
    margin: 20px auto;
  }

  .chengp2 {
    width: 360px;
    height: 60px;
    color: #ffffff;
    background: #caac48;
    line-height: 60px;
    display: inline-block;
    cursor: pointer;
  }
}
.b {
  margin-top: 50px;
}
</style>