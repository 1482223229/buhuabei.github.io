<template>
  <div class="image-magnifier">
    <magnifier-hb :images="list"></magnifier-hb>
    <br />
    <div class="text_list">
      <div>
        封装组件发布到npm仓库教程：<a href="https://www.jianshu.com/p/48a0ebc1496b" target="_blank"
          >https://www.jianshu.com/p/48a0ebc1496b</a
        >
      </div>
      <div>
        使用说明：<a href="https://www.npmjs.com/package/magnifier-hb" target="_blank"
          >https://www.npmjs.com/package/magnifier-hb</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  components: {},
  setup() {
    let state = reactive({
      title: "图片放大镜",
      list: [
        "https://img.alicdn.com/imgextra/i1/120488566/O1CN01slAxaL2D9HJv7lxGm_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
        "https://gd1.alicdn.com/imgextra/i1/3022821474/O1CN01Di2WYF1Ml8Thxe1HR_!!0-item_pic.jpg_400x400.jpg",
        "https://img.alicdn.com/imgextra/i1/47656577/O1CN01MTWIqf1ySJja8r1zb_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
      ],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="less">
.image-magnifier {
  display: flex;
  justify-content: center;
}
.text_list {
  text-align: left;
  padding: 50px;
  padding-left: 200px;
}
</style>
