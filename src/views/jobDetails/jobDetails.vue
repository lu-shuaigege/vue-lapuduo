<template>
  <div>
    <div class="recruitment-part">
      <div class="content">
        <div class="details">
          <div class="line"></div>
          <h3 class="name">{{name}}</h3>
          <div class="position">
            <img src="../../assets/images/recruit/point.png">
            <span>{{address}}</span>
          </div>
          <div
            class="request-info"
            v-html="des"
          ></div>
          <div
            class="confirm"
            @click="shen"
          >
            申 请
          </div>
          <div
            class="tan"
            v-show="isShow"
          >
            <div
              class="guan"
              @click="guan"
            >X</div>
            请将简历提交至企业hr邮箱xxxxxxxxx@xxx.com
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/commons/footer/footer.vue";

export default {
  data() {
    return {
      isShow: false,
      id: "",
      address: "",
      cnt: "",
      des: "",
      name: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.address = this.$route.params.address;
    this.cnt = this.$route.params.cnt;
    this.des = this.$route.params.des;
    this.name = this.$route.params.name;
    console.log(this.id);
    console.log(this.address);
    console.log(this.cnt);
    console.log(this.des);
    console.log(this.name);
    console.log(this.isShow);
    // this.in();
  },
  methods: {
    //调用接口
    // in: function() {
    //   this.$api.post(
    //     "/api/api_findJobList.do",
    //     {
    //       page: 1,
    //       pageSize: 100
    //     },
    //     response => {
    //       if (response.status >= 200 && response.status < 300) {
    //         console.log(response.data); //请求成功，response为成功信息参数

    //         this.tableData = response.data.result.list;
    //       } else {
    //         console.log(response.message); //请求失败，response为失败信息
    //       }
    //     }
    //   );
    // },
    shen: function() {
      this.isShow = true;
      console.log(this.id);
    },
    guan: function() {
      this.isShow = false;
      console.log(this.id);
    }
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
.top-header {
  height: 100px;
  width: 100%;
}

.recruitment-part {
  background-image: url("../../assets/images/recruit/rczp_01.jpg");
  width: 100%;
  height: 1180px;
  min-height: 1180px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    width: 100%;
    position: absolute;
    top: 30%;
    left: 0;
    height: 900px;
    background: #ffffff;
    .details {
      width: 1000px;
      margin: 0 auto;
      .line {
        width: 730px;
        height: 5px;
        background: #c9ab48;
        margin: 30px 0 16px 0;
      }
      .name {
        font: 28px/50px "";
        font-weight: 500;
      }
      .position {
        width: 452px;
        height: 58px;
        border-bottom: 1px solid #d7d7d7;
      }
      .request-info {
        b {
          font-weight: bold;
        }
        width: 730px;
        font-size: 16px;
      }
      .confirm {
        width: 130px;
        height: 42px;
        background: #c9ab48;
        font: 16px/42px "";
        color: #ffffff;
        border: none;
        border-radius: 4px;
        margin-top: 50px;
        text-align: center;
      }
    }
  }
}
.tan {
  width: 300px;
  height: 100px;
  padding: 20px;
  font-size: 18px;
  border-radius: 10px;
  background: #000000;
  color: #ffffff;
  position: fixed;
  z-index: 100;
  left: 45%;
  top: 48%;
  .guan {
    width: 20px;
    height: 20px;
    background: #999999;
    text-align: center;
    line-height: 20px;
    float: right;
    cursor: pointer;
  }
}
</style>


