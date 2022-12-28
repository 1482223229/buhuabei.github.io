<template>
  <div class="marquee-col-view">
    <span
      class="ele-span"
      :style="`margin-left: ${Math.random() * 50 + 5}px`"
      v-for="(item, k) in sosoList"
      :key="k"
    >
      {{ item.name || "·" }}
    </span>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from "vue";

export default defineComponent({
  props: {
    dataList: {
      default: [],
    },
  },
  setup(props) {
    // const regxZzs = /^[0-9]*[1-9][0-9]*$/;
    const state = reactive({
      timer: null,
      timerCount: 0,
      dataList: [...props.dataList],
      initSoSoList: [],
      sosoList: [...props.dataList],
    });
    // state.initSoSoList = [...state.dataList.slice(0, 5)];
    // state.sosoList = [...state.initSoSoList];
    // state.timer = setInterval(() => {
    //   state.timerCount = state.timerCount + 1;
    //   if (regxZzs.test(state.timerCount / 30)) {
    //     state.sosoList = [
    //       ...state.dataList.slice(
    //         state.timerCount / 5,
    //         state.timerCount / 5 + 6
    //       ),
    //     ];
    //     if (!state.sosoList.length) {
    //       state.timerCount = 0;
    //       state.sosoList = [...state.initSoSoList];
    //     }
    //   }
    // }, 1000);

    watch(
      () => {
        return props.dataList;
      },
      (value) => {
        console.log(value);
      }
    );
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.marquee-col-view {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

/deep/ .ele-span {
  line-height: 25px;
  padding: 5px 10px;
  font-size: 13px;
  margin-left: 30px;
  border-radius: 15px;
  color: #c49a4a;
  margin-bottom: 15px;
}
.hot-span {
  border-color: red;
  color: red;
}
</style>
