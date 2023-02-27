<template>
  <div>
    <div class="anchor-position">
      <ul>
        <li
          v-for="(item, index) in anchorList"
          :key="index"
          :class="`${item.class} ${selectedAnchorId === item.id && 'item-click'}`"
          @click="jumpTo(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

interface anchorListParams {
  name: string;
  id: string;
  class: string;
}

export default defineComponent({
  name: "Measure",
  props: ["propsSelectedAnchorId"],
  components: {},
  setup(props) {
    const selectedAnchorId = ref<string>("anchor1");
    const anchorList = ref<anchorListParams[]>([
      {
        id: "anchor1",
        name: "HTTP/HTTPS协议",
        class: "anchor-item",
      },
      {
        id: "anchor2",
        name: "vue和react相同点、不同点",
        class: "anchor-item",
      },
      {
        id: "anchor3",
        name: "js设计模式",
        class: "anchor-item",
      },
      {
        id: "anchor4",
        name: "在浏览器输入url敲击回车后发生了什么",
        class: "anchor-item",
      },
      {
        id: "anchor5",
        name: "vue数据双向绑定原理",
        class: "anchor-item",
      },
      {
        id: "anchor6",
        name: "（vue/react）组件传值",
        class: "anchor-item",
      },
      {
        id: "anchor7",
        name: "nodejs的了解",
        class: "anchor-item",
      },
      {
        id: "anchor8",
        name: "es6的了解",
        class: "anchor-item",
      },
      {
        id: "anchor9",
        name: "原型&原型链",
        class: "anchor-item",
      },
      {
        id: "anchor10",
        name: "什么是虚拟 DOM",
        class: "anchor-item",
      },
    ]);
    const jumpTo = (id: string) => {
      selectedAnchorId.value = id;
      // if (item.id === id) item.class = "anchor-item item-click";
      let srcolls = document.getElementById(id);
      srcolls?.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    watch(
      () => props.propsSelectedAnchorId as string,
      (value) => {
        selectedAnchorId.value = value;
      }
    );

    return {
      selectedAnchorId,
      anchorList,
      jumpTo,
    };
  },
});
</script>

<style scoped lang="less">
.anchor-position {
  position: fixed;
  right: 0px;
  top: 147px;
  width: 140px;
  padding-left: 25px;
  background-color: white;
  .anchor-item {
    margin: 7px 0;
    align-items: center;
    padding: 5px 5px;
    cursor: pointer;
    font-size: 12px;
    &:hover {
      background: rgba(213, 234, 255, 0.66);
    }
  }
  ul {
    list-style-type: circle;
  }
  .item-click {
    color: @activedColor;
  }
}
</style>
