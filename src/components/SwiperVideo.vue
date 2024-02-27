<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
interface IProps {
  list: Array<any>;
}
// eslint-disable-next-line no-undef
const props = defineProps<IProps>();
const activedSlide = ref(0);

onMounted(() => {
  var mySwiper = new Swiper(".swiper-container", {
    // loop: true,
    slidesPerView: 1.3,
    slidesPerGroup: 1,
    effect: "coverflow",
    centeredSlides: true,
    coverflow: {
      rotate: 0,
      stretch: 450,
      depth: 800,
      modifier: 1,
      slideShadows: true,
    },
    // 如果需要前进后退按钮
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    onSlideChangeEnd: (swiper: any) => {
      activedSlide.value = swiper.activeIndex;
      setTimeout(() => {
        watchVideoProgress(mySwiper);
      }, 500);
    },
  });

  watchVideoProgress(mySwiper);
});
const watchVideoProgress = (mySwiper: any) => {
  document.getElementById("videoMedia")?.addEventListener(
    "ended",
    () => {
      mySwiper?.slideNext(true);
    },
    false
  );
};
</script>
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, key) in props.list" :key="key">
        <video
          v-if="activedSlide === key"
          :src="item"
          style="width: 100%; maxheight: 100%"
          controls
          id="videoMedia"
          autoplay
        />
        <video v-else :src="item" style="width: 100%; maxheight: 100%" />
      </div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<style scoped lang="less">
.swiper-container {
  width: 1411px;
  height: 655px;
  margin: 30px;
}
.swiper-slide {
  width: 1411px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
