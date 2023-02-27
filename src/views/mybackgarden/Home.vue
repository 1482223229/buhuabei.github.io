<template>
  <div class="home">
    <Sakura />
    <div class="item-container left-container">
      <div class="head-ct">
        <img :src="require('../../assets/head_img.jpeg')" />
      </div>
      <div class="slide-ct">
        <span class="span">踏步青云(北北)</span>
      </div>
    </div>
    <div class="item-container right-container">
      <div class="slide-ct">
        <label><i :class="`iconfont icon-dingwei`"></i>：</label>
        <span class="span">浙江 杭州</span>
      </div>
      <div class="slide-ct">
        <label>Age：</label>
        <span class="span">95后</span>
      </div>
      <div class="slide-ct">
        <label>当前从事：</label>
        <span class="span">web前端</span>
      </div>
      <div class="slide-ct">
        <label>爱好：</label>
        <span class="span">听音乐、刷剧、旅行、敲代码</span>
      </div>
      <div class="slide-ct">
        <label>简书首页：</label>
        <span class="span">
          <a href="https://www.jianshu.com/u/c56332222810" target="_blank" rel="noopener noreferrer">
            https://www.jianshu.com/u/c56332222810
          </a>
        </span>
      </div>
      <div class="slide-ct">
        <label>Motto：</label>
        <span class="span">明天的太阳依旧升起，然岂能允许坐以待毙！</span>
      </div>
      <div style="line-height: 30px">
        <label>网站源码地址：</label>
        <span class="span">
          <a href="https://github.com/buhuabei229/buhuabei229.github.io" target="_blank" rel="noopener noreferrer"
            >https://github.com/buhuabei229/buhuabei229.github.io
          </a>
        </span>
      </div>
    </div>
    <!-- <div class="item-container left-container">
      <iframe
        src="http://jjf577757.xyz:8000/"
        width="320px"
        height="500px"
        style="border: none; border-radius: 15px"
      ></iframe>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Sakura from "@/components/Sacura.vue";

export default defineComponent({
  components: { Sakura },
  setup() {
    const state = reactive({
      count: 1 as number,
    });
    state.count = state.count + 1;
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  background: #f9f9f9;
  padding: 50px 0;
  margin: 50px;
  margin-top: 0px;
  .item-container {
    flex: 1;
  }
  .iconfont {
    font-size: 20px;
  }
  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
    min-width: 300px;
    padding-left: 50px;
    .head-ct {
      text-align: center;
      margin-bottom: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
      }
    }
    .slide-ct {
      display: flex;
      margin-bottom: 20px;
      line-height: 30px;
      text-align: center;
      label {
        display: block;
        width: 30%;
        text-align: right;
        padding-right: 10px;
      }
      span {
        flex: 1;
      }
    }
  }
  .right-container {
    text-align: left;
    overflow: hidden;
    flex-basis: 50%;
    line-height: 50px;
    font-size: 20px;
  }
}
</style>
