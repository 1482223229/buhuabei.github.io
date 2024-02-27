<template>
  <div class="notfontpage-container">
    <img :src="notFontImg" @click="toHomePage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const notFontImg = ref(require("@/assets/浪迹天涯404.png"));
const toHomePage = function () {
  router.replace("/");
};
</script>

<style lang="less" scoped>
.notfontpage-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
