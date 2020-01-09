<template>
  <div class="my-swiper">
    <swiper :options="swiperOption" v-if="imgsrc.length">
      <swiper-slide v-for="item in imgsrc" :key="item.id">
        <img :src="item.img" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["imgsrc"],
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: { el: ".swiper-pagination" }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.my-swiper {
  width: 100%;
  height: 134px;
}
</style>