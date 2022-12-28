<template>
  <div class="home">
    <div class="item-container left-container">
      <div class="head-ct">
        <img :src="require('../../assets/head_img.png')" />
      </div>
      <div class="slide-ct">
        <span class="span">踏步青云(北北)</span>
      </div>
    </div>
    <div class="item-container right-container">
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
        <span class="span">听音乐、看视频、旅行、敲代码（也喜欢，但喜欢的并不多）</span>
      </div>
      <div class="slide-ct">
        <label>Motto：</label>
        <span class="span">明天的太阳依旧升起，然岂能允许坐以待毙！</span>
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
  <footer class="footer">你好！我好！大家好！才是真的好！（纯属个人爱好，该网站非商业用途）</footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  components: {},
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
  margin-bottom: 50px;
  .item-container {
    flex: 1;
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
    line-height: 70px;
    font-size: 20px;
  }
}
.footer {
  width: 100%;
  margin-top: 50px;
  text-align: center;
  line-height: 50px;
  background: #f5f5f5;
  color: #999;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
