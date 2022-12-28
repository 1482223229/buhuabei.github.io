<template>
  <div>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <PageHeader title="预览组件" />
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { PageHeader } from "ant-design-vue";

export default {
  components: {
    PageHeader,
  },
  setup() {
    const state = reactive({
      text: `## v-md-editor编辑器(支持vue3.0)
[http://ckang1229.gitee.io/vue-markdown-editor/zh/](http://ckang1229.gitee.io/vue-markdown-editor/zh/)`,
    });
    watch(
      () => state.text,
      (val) => {
        console.log(val);
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
