<template>
  <div class="root-view">
    <EmpireCode />
    <div class="container">
      <nav id="nav">
        <router-link to="/home">主页</router-link> |
        <router-link to="/backgarden">
          <span :class="pageTitle !== '主页' ? 'active-nav' : ''">{{
            pageTitle === "主页" ? "后花园" : pageTitle
          }}</span>
        </router-link>
      </nav>

      <div class="router-view">
        <!-- <PageHeader v-if="route.path && !route.path.includes('/home')" :title="pageTitle" @back="onBack" /> -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, watch } from "vue";
// import { PageHeader } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import EmpireCode from "@/components/EmpireCode.vue";

interface IState {
  route: any;
  router: any;
  pageTitle: any;
}
export default {
  components: {
    // PageHeader,
    EmpireCode,
  },
  setup() {
    const state: IState = reactive({
      route: useRoute(),
      router: useRouter(),
      pageTitle: "后花园",
    });
    state.pageTitle = state.route.meta.title || "后花园";
    const onBack = () => {
      state.router.go(-1);
    };

    watch(
      () => state.route.meta,
      (value) => {
        state.pageTitle = value.title || "后花园";
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
  padding: 0 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: 150px;

  .container {
    margin-bottom: 20px;
    position: relative;
    flex: 1;
    background: #ffe5e5;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    border-radius: 30px;
    .router-view {
      flex: 1;
      overflow: hidden;
      overflow-y: scroll;
      padding: 0 20px;
    }
  }

  #nav {
    padding: 30px;
    text-align: center;
    font-size: 20px;
    a {
      color: @themeColor;
    }
  }
  .active-nav {
    color: @activedColor;
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
