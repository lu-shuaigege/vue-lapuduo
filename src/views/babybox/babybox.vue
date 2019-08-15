<template>
  <div class="all">
    <div class="xiang">
      <aside class="left">
        <div class="title">
          <p>产品分类</p>
        </div>
        <!-- 遍历提供的数据，动态添加样式，如果点击的等于默认的就为黄色 -->
        <ul class="leftul">
          <li
            class="leftli"
            v-for="(item,index) in navlist"
            :key="index"
            @click="nav(index,item.id)"
            :style="{color:index==active?'#ffd050':'#000000'}"
          >{{item.name}}</li>
        </ul>
      </aside>
      <keep-alive>
        <section class="right">
          <div class="title">
            <p>全部产品</p>
          </div>
          <ul class="rightul">

            <li
              class="rightulli"
              v-for="(item,index) in content"
              :key="index"
            >
              <a
                :href="item.url"
                target="_blank"
              >
                <div class="rightullidiv">
                  <img
                    :src="item.pic"
                    alt=""
                    class="rightulliimg"
                  >
                </div>

                <p class="rightullip">
                  {{item.name}}
                </p>
              </a>

            </li>

          </ul>
          <div class="yema">
            <v-pagination
              :total="total"
              :current-page="current"
              @pagechange="pagechange"
            ></v-pagination>
            <!-- <div id="demo7"></div> -->
          </div>
        </section>
      </keep-alive>

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
//引入分页组件
import pagination from "@/components/commons/pagination/pagination.vue";
export default {
  data() {
    return {
      total: 0, // 记录总条数
      display: 10, // 每页显示条数
      current: 1, // 当前的页数
      category: 1, //一级分类
      page: 1, //页码
      content: [],
      navlist: [
        { name: "宝宝箱", id: 1 },
        { name: "悉心喂养", id: 2 },
        { name: "贴心护理", id: 3 },
        { name: "暖心服饰", id: 4 }
      ],
      active: 0
    };
  },
  components: {
    Footer,
    //引入分页组件
    "v-pagination": pagination
  },
  created() {
    // this.category = this.$route.params.category;

    //从sessionStorage把页面要用的参数取出来
    this.category = sessionStorage.getItem("category");

    console.log(this.category);
    this.pagination();
  },
  methods: {
    //分页组件向后台发送请求
    goAnchor,
    GetQueryString,
    pagechange: function(currentPage) {
      this.page = currentPage;
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      this.pagination();
    },
    //点击一级分类向后台获取不同的数据
    nav: function(index, id) {
      this.category = id;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("category", this.category);
      this.pagination();
      this.active = index;
    },
    //axios请求
    pagination: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.post(
        "api_findGoodsList.do",
        {
          category: this.category,
          page: this.page,
          pageSize: 9
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.content = response.data.result.list;
            this.total = response.data.result.total;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    }
  },
  mounted() {
    this.hover();
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

.xiang {
  width: 1200px;
  min-height: 600px;
  margin: 120px auto 0 auto;
  overflow: hidden;
  .left {
    width: 300px;
    display: float;
    float: left;
    .title {
      width: 100%;
      height: 40px;
      background: #262626;
      p {
        width: 100px;
        height: 100%;
        background: #d0b04b;
        line-height: 40px;
        text-align: center;
        color: #ffffff;
        font-size: 16px;
      }
    }
    .leftul {
      width: 100%;
      margin-top: 20px;

      li {
        width: 100%;
        height: 50px;
        padding: 0 15px;
        box-sizing: border-box;
        line-height: 50px;
        font-size: 16px;
        border-bottom: #cccccc dashed 1px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC",
          "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        // font-weight: bold;
        color: #000000;
        cursor: pointer;
      }
    }
  }
  .right {
    width: 860px;
    display: float;
    float: right;
    .title {
      width: 100%;
      height: 40px;
      background: #262626;
      p {
        width: 100px;
        height: 100%;
        background: #d0b04b;
        line-height: 40px;
        text-align: center;
        color: #ffffff;
        font-size: 16px;
      }
    }
    .rightul {
      width: 880px;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .rightulli {
        width: 280px;
        height: 350px;
        margin-right: 10px;
        .rightullidiv {
          width: 100%;
          height: 200px;
          background: #f2f2f2;
          display: flex;
          justify-content: center;
          align-items: center;
          .rightulliimg {
            max-width: 100%;
            max-height: 200px;
          }
        }

        .rightullip {
          margin-top: 30px;
          font-size: 16px;
          font-family: "微软雅黑";
          font-weight: bold;
        }
      }
    }
  }
}
</style>