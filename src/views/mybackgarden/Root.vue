<template>
  <div class="root-view">
    <EmpireCode />
    <div class="container">
      <nav id="nav">
        <router-link to="/home">主页</router-link> |
        <router-link to="/backgarden">后花园</router-link>
      </nav>

      <div class="router-view">
        <PageHeader v-if="route.path && !route.path.includes('/home')" :title="pageTitle" @back="onBack" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, watch } from "vue";
import { PageHeader } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import EmpireCode from "@/components/EmpireCode.vue";

interface IState {
  route: any;
  router: any;
  pageTitle: any;
}
export default {
  components: {
    PageHeader,
    EmpireCode,
  },
  setup() {
    const state: IState = reactive({
      route: useRoute(),
      router: useRouter(),
      pageTitle: {},
    });
    state.pageTitle = state.route.meta.title || "huabei-wz";
    const onBack = () => {
      state.router.go(-1);
    };

    watch(
      () => state.route.meta,
      (value) => {
        state.pageTitle = value.title || "huabei-wz";
      }
    );
    return {
      ...toRefs(state),
      onBack,
    };
  },
};
</script>

<style scoped lang="less">
.root-view {
  width: 100%;
  height: 100%;
  padding: 0 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  .container {
    flex: 1;
    background: white;
    overflow: hidden;
    overflow-y: scroll;
  }
  #nav {
    padding: 30px;
    text-align: center;
    font-size: 20px;
    a {
      color: @themeColor;
    }
  }

  #nav a.router-link-exact-active {
    color: @activedColor;
    font-weight: bold;
  }
}
/deep/.anticon-arrow-left:hover {
  color: @activedColor;
}
</style>
