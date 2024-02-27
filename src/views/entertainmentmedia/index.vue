<script setup lang="ts">
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { Menu } from "ant-design-vue";
import { CodepenSquareFilled, DropboxSquareFilled } from "@ant-design/icons-vue";

const router = useRoute();
const data = reactive({
  current: [router.path === "/entertainment-media" ? "/entertainment-media/normal-mode" : router.path],
});
watch(
  () => router.path,
  (to) => {
    data.current = [to];
  }
);
</script>

<template>
  <div class="container">
    <Menu v-model:selectedKeys="data.current" mode="horizontal">
      <Menu.Item key="/entertainment-media/normal-mode">
        <template #icon>
          <CodepenSquareFilled />
        </template>
        <router-link to="/entertainment-media/normal-mode"> 正常模式 </router-link>
      </Menu.Item>
      <Menu.Item key="/entertainment-media/combination-mode">
        <template #icon>
          <DropboxSquareFilled />
        </template>
        <router-link to="/entertainment-media/combination-mode"> 组合模式 </router-link>
      </Menu.Item>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>
