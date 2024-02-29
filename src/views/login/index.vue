<template>
  <div class="login-container">
    <div class="form-view">
      <Form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <FormItem
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <Input v-model:value="formState.username" />
        </FormItem>

        <FormItem
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <InputPassword v-model:value="formState.password" />
        </FormItem>
        <FormItem :wrapper-col="{ offset: 8, span: 16 }">
          <Button type="primary" html-type="submit" :loading="loadding">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { Form, Input, Button } from "ant-design-vue";
import { useActions } from "@/utils/useactions";
import { loginRequest } from "@/services/login";
const FormItem = Form.Item;
const InputPassword = Input.Password;
let loadding = ref(false);
let formState = reactive({
  username: "admin",
  password: "123456",
});
const actions: any = {
  ...useActions("login", [
    "setIslogin", // -> this.actions.setIslogin
  ]),
};
const onFinish = async (values: any) => {
  loadding.value = true;
  try {
    const res: any = await loginRequest(values);
    if (res?.success) {
      actions.setIslogin(true);
    }
  } catch {
    loadding.value = false;
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-view {
    width: 400px;
  }
}
</style>
