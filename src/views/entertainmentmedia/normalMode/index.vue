<script setup lang="ts">
import { reactive } from "vue";
import { Card, Drawer, Modal } from "ant-design-vue";
import JsonData from "@/views/entertainmentmedia/jsondata.js";
const data = reactive({
  JsonData,
  drawerVal: {
    visible: false,
    name: "",
    contentList: [{}],
  },
  modalVal: {
    visible: false,
    title: "",
    video: "",
  },
});
const showDrawer = function (record: { name: string; list: any[] }): void {
  data.drawerVal = {
    ...data.drawerVal,
    visible: true,
    name: record.name,
    contentList: record.list,
  };
};
const openModal = function (record: any) {
  data.modalVal = {
    ...record,
    visible: true,
  };
};

const modalCancel = () => {
  console.log(123);
  data.modalVal = {
    ...data.modalVal,
    visible: false,
  };
};
</script>
<template>
  <div class="container">
    <div class="card_view">
      <Card title="人物列表">
        <Card.Grid
          v-for="(item, key) in data.JsonData"
          :key="key"
          style="width: 10%; padding: 0px; line-height: 70px; text-align: center"
          @click="showDrawer(item)"
          ><div class="card_item" :style="{ background: `url(${item.img})` }">{{ item.name }}</div></Card.Grid
        >
      </Card>
    </div>
    <Drawer
      width="600px"
      :title="data.drawerVal.name"
      placement="right"
      :closable="false"
      v-model:visible="data.drawerVal.visible"
    >
      <div v-if="data.drawerVal.contentList" class="drawer_body">
        <div v-for="(item, key) in data.drawerVal.contentList" :key="key" class="draverItem" @click="openModal(item)">
          <video disabled :src="item.video" />
          <div class="drawerItemTitle">{{ item.title }}</div>
        </div>
      </div>
    </Drawer>
    <Modal
      class="modal_video"
      v-model:visible="data.modalVal.visible"
      :title="data.modalVal.title"
      width="1200px"
      :footer="null"
      :onCancel="modalCancel"
    >
      <video v-if="data.modalVal.video && data.modalVal.visible" :src="data.modalVal.video" autoplay width="1150" />
    </Modal>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #f5f5f5;
  .card_view {
    padding: 30px;
    background: white;
    .card_item {
      margin: 10px;
      color: white;
      font-weight: bolder;
      background-size: cover !important;
    }
  }
}
/deep/ .ant-card-grid:hover {
  cursor: pointer;
}
.drawer_body {
  padding-left: 20px;
  .draverItem {
    display: flex;
    margin-top: 15px;
    &:hover {
      cursor: pointer;
      video {
        transform: scale(1.05);
      }
      color: @activedColor;
    }
    video {
      width: 100px;
      height: 60px;
      margin-right: 15px;
      border-radius: 10px;
    }
  }
}
</style>
