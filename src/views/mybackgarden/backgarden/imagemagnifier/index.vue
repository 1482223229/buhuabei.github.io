<template>
  <div class="image-magnifier">
    <magnifier-hb :images="list"></magnifier-hb>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    let state = reactive({
      title: '图片放大镜',
      list: [
        'https://gd4.alicdn.com/imgextra/i4/3022821474/O1CN01ioe8cE1Ml8TqQ5rOW_!!3022821474.jpg_400x400.jpg',
        'https://gd1.alicdn.com/imgextra/i1/3022821474/O1CN01Di2WYF1Ml8Thxe1HR_!!0-item_pic.jpg_400x400.jpg',
        'http://gd3.alicdn.com/imgextra/i3/3022821474/O1CN013H676M1Ml8VAo3yOK_!!3022821474.jpg_400x400.jpg',
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
</style>
