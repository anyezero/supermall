<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import { getHomeMul } from "../../network/Home";
// import Swiper from "../../components/common/swiper/Swiper.vue";
// import SwiperItem from "../../components/common/swiper/SwiperItem.vue";
// import { Swiper, SwiperItem } from "../../components/common/swiper";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    // Swiper,
    // SwiperItem,
    HomeSwiper,
    RecommendView,
  },
  created() {
    getHomeMul().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
