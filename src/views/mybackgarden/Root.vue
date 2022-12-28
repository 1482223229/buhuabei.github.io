<template>
  <div class="root-view">
    <header class="homebanner"></header>
    <nav id="nav">
      <router-link to="/home">主页</router-link> |
      <router-link to="/backgarden">后花园</router-link>
    </nav>
    <div class="router-view">
      <PageHeader v-if="route.path && !route.path.includes('/home')" :title="pageTitle" @back="onBack" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { PageHeader } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    PageHeader,
  },
  setup() {
    const state = reactive({
      route: useRoute(),
      router: useRouter(),
      pageTitle: "",
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
  .homebanner {
    width: 100%;
    height: 30%;
    background: url("../../assets/homebanner.jpg");
    background-position: 50%;
    background-size: cover;
    min-height: 200px;
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
