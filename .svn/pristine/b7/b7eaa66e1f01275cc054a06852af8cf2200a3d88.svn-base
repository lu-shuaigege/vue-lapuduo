<template>
  <div id="app">
    <Header></Header>
    <transition name="router-fade">
      <router-view></router-view>
    </transition>
    <!--<Footer></Footer>-->
  </div>
</template>
<script>
import Header from "@/components/commons/header/header.vue";
// import Footer from "@/components/commons/footer/footer.vue";

export default {
  name: "App",
  components: {
    Header
    // Footer
  },
  created() {
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("userMsg") &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(localStorage.getItem("userMsg"))
        )
      );

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("userMsg", JSON.stringify(this.$store.state));
    });
  }
};
</script>
