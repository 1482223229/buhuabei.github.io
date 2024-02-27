<template>
  <div class="barrage">
    <div class="gutter-example">
      <div class="head-col">
        <Avatar :src="require('@/assets/douyin_myhead.jpeg')" />
        <span @click="showHideForm">求怕累（涨知识）</span>
      </div>
      <marquee direction="up" width="100%" height="350px" :scrollamount="2">
        <Barrage v-if="!formState.content" :dataList="dataList || []" />
        <div class="scroll-screen" v-else>
          <div class="title">{{ formState.title }}</div>
          <pre>{{ formState.content }}</pre>
        </div>
      </marquee>
      <div class="form-content" v-if="visible">
        <div>
          <div class="label">标题</div>
          <Input v-model:value="formState.title" />
        </div>
        <div>
          <div class="label">内容</div>
          <TextArea v-model:value="formState.content" />
        </div>
      </div>
      <marquee direction="left" width="100%" :scrollamount="2">
        <div style="color: red; line-height: 30px">
          谢谢你们那么优秀还喜欢我🌹🌹🌹&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 谢谢你们那么优秀还喜欢我🌹🌹🌹
        </div>
      </marquee>
      <div ref="rightMarquee">
        <marquee
          direction="left"
          width="100%"
          height="100px"
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
          :scrollamount="3"
        >
          <div class="marquee-child-view">
            <Card hoverable style="width: 500px" v-for="(item, k) in dataList" :key="k">
              <CardMate :title="item.name" :description="item.douyinNumber">
                <template #avatar>
                  <Avatar :src="require('@/assets/douyin_logo.jpeg')" />
                </template>
              </CardMate>
            </Card>
          </div>
        </marquee>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { Card, Avatar, Input } from "ant-design-vue";
import Barrage from "@/components/Barrage.vue";
import sosoList from "./json/sosolist";
import hotList from "./json/hotlist";

const CardMate = Card.Meta;
const TextArea = Input.TextArea;

export default defineComponent({
  components: {
    Card,
    CardMate,
    Avatar,
    Barrage,
    Input,
    TextArea,
  },
  setup() {
    const state = reactive({
      timer: null,
      timerCount: 0,
      hotList: [...hotList],
      dataList: [...sosoList],
      visible: false,
      formState: {
        title: "",
        content: "",
      },
    });

    const mouseEnter = (e) => {
      e.target.stop();
    };
    const mouseLeave = (e) => {
      e.target.start();
    };
    const showHideForm = () => {
      state.visible = !state.visible;
    };

    return {
      ...toRefs(state),
      mouseEnter,
      mouseLeave,
      showHideForm,
    };
  },
});
</script>

<style lang="less" scoped>
.barrage {
  width: 100%;
  display: flex;
  background: #000;
  padding: 30px;
  .gutter-example {
    width: 100%;
    height: 100%;
    .ant-col {
      padding: 0px 20px;
      overflow: hidden;
      background: #000;
    }
    .head-col {
      height: 100px;
      padding-top: 30px;
      color: wheat;
      font-size: 20px;
      .ant-avatar {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
    }
  }
  .scroll-screen {
    color: white;
    line-height: 20px;
  }
  .paused {
    animation-play-state: paused;
  }
  .running {
    animation-play-state: running;
  }
  .marquee-child-view {
    padding: 10px 20px;
    transform: scale(0.7);
    .ant-card {
      margin-left: 0px;
      background: none;
      border: none;

      /deep/.ant-card-body {
        width: 250px;
      }
      /deep/ .ant-card-meta-title,
      /deep/ .ant-card-meta-description {
        color: #c49a4a;
      }
    }
    display: flex;
    color: white;
    .footer-action {
      width: 200px;
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
    }
  }
  .form-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    opacity: 0.8;
    .label {
      line-height: 30px;
    }
  }
}
</style>
