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
          <Button type="primary" html-type="submit">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { Form, Input, Button } from "ant-design-vue";
import { useActions } from "@/utils/useactions";
const FormItem = Form.Item;
const InputPassword = Input.Password;
let formState = reactive({
  username: "admin",
  password: "123456",
});
const actions = {
  ...useActions("login", [
    "setIslogin", // -> this.actions.setIslogin
  ]),
};
const onFinish = (values: any) => {
  actions.setIslogin(true);
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
