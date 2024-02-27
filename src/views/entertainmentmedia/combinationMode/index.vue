<script setup lang="ts">
import { reactive, watch, ref, toRaw, computed } from "vue";
import { Input, Row, Col, Table, Select, Button, Modal } from "ant-design-vue";
import JsonData, { typeList } from "@/views/entertainmentmedia/jsondata.js";
import { ColumnProps } from "ant-design-vue/es/table/interface";
import SwiperVideo from "@/components/SwiperVideo.vue";
type Key = ColumnProps["key"];

const name = ref("");
const title = ref("");
const type = ref(null);
const data = reactive<{
  selectedRowKeys: Key[];
  oldDataSource: any;
  dataSource: any;
  modalVisible: boolean;
}>({
  oldDataSource: [{}],
  dataSource: [{}],
  selectedRowKeys: [],
  modalVisible: false,
});
const hasSelected = computed(() => data.selectedRowKeys.length > 0);

(function getDataSource() {
  let dataSource = [{}];
  dataSource = [];
  JsonData.forEach((item: any) => {
    if (item.list?.length) {
      item.list.forEach((ele: any) => {
        dataSource.push(ele);
      });
    }
  });
  data.oldDataSource = [...dataSource];
  data.dataSource = [...dataSource];
})();

const columns = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "视频地址",
    dataIndex: "video",
    key: "video",
  },
];

const filterDataSource = () => {
  const newData = toRaw(data);
  const nameVal = name.value;
  const titleVal = title.value;
  const typeVal = type.value === "全部" || !type.value ? "" : type.value;
  if (!nameVal && !titleVal && !typeVal) {
    data.dataSource = [...data.oldDataSource];
    return;
  }
  const list = newData.oldDataSource.filter(
    (item: any) => {
      return item.name.includes(nameVal) && item.title.includes(titleVal) && item.type.includes(typeVal);
    },
    { immediate: true }
  );
  data.dataSource = [...list];
};

const onSelectChange = (selectedRowKeys: Key[]) => {
  data.selectedRowKeys = selectedRowKeys || [];
};
const openModal = () => {
  data.modalVisible = true;
};
const modalCancel = () => {
  data.modalVisible = false;
  data.selectedRowKeys = [];
};

watch(name, () => {
  filterDataSource();
});
watch(title, () => {
  filterDataSource();
});
watch(type, () => {
  filterDataSource();
});
</script>

<template>
  <div class="container">
    <div class="search_form">
      <Row type="flex">
        <Col flex="200px">
          <Input v-model:value="name" style="width: 150px" placeholder="按名称查找" />
        </Col>
        <Col flex="300px">
          <Input v-model:value="title" style="width: 250px" placeholder="按标题查找" />
        </Col>
        <Col flex="auto">
          <Select v-model:value="type" style="width: 250px" placeholder="选择适用情景类型" :options="typeList">
          </Select>
        </Col>
      </Row>
    </div>
    <div class="open_modal">
      <div></div>
      <Button type="primary" :disabled="!hasSelected" @click="openModal"> 播放选中视频 </Button>
    </div>

    <Table
      :dataSource="data.dataSource"
      :columns="columns"
      rowKey="video"
      :row-selection="{ selectedRowKeys: data.selectedRowKeys, onChange: onSelectChange }"
    />
    <Modal
      class="modal_video"
      v-if="data.modalVisible"
      v-model:visible="data.modalVisible"
      :title="null"
      width="1500px"
      :footer="null"
      :onCancel="modalCancel"
    >
      <SwiperVideo :list="data.selectedRowKeys" />
    </Modal>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #f5f5f5;
  .search_form {
    padding: 30px;
    margin-bottom: 15px;
    background: white;
  }
  .open_modal {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}
</style>
