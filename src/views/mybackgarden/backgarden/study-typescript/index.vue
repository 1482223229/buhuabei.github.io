<template>
  <div class="typescript-view">
    <div class="content">
      <h3>JavaScript 与 TypeScript 的区别</h3>
      <div class="wrapper">
        TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript
        一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。 TypeScript 可处理已有的 JavaScript
        代码，并只对其中的 TypeScript 代码进行编译。
      </div>
      <h3>要求数据类型是数值</h3>
      <div class="wrapper">
        <span>{{ valueState.typeIsNumber.typeValue }}&nbsp;&nbsp;</span>
        <span>+&nbsp;&nbsp;50&nbsp;&nbsp;=&nbsp;&nbsp;</span>
        <span>{{ valueState.typeIsNumber.resultValue }}</span>
      </div>
      <v-md-preview :text="textHightLight.typeIsNumber"></v-md-preview>
      <h3>要求数据类型是字符串</h3>
      <div class="wrapper">
        <span>20&nbsp;&nbsp;</span>
        <span>+&nbsp;&nbsp;{{ valueState.typeIsString.typeValue }}&nbsp;&nbsp;=&nbsp;&nbsp;</span>
        <span>{{ valueState.typeIsString.resultValue }}</span>
      </div>
      <v-md-preview :text="textHightLight.typeIsString"></v-md-preview>
      <h3>数据类型是any</h3>
      <div class="wrapper">
        <span>20&nbsp;&nbsp;</span>
        <span>+&nbsp;&nbsp;{{ valueState.typeIsAny.typeValue1 }}&nbsp;&nbsp;=&nbsp;&nbsp;</span>
        <span>{{ valueState.typeIsAny.resultValue1 }}</span>
      </div>
      <div class="wrapper">
        <span>20&nbsp;&nbsp;</span>
        <span>+&nbsp;&nbsp;{{ valueState.typeIsAny.typeValue2 }}&nbsp;&nbsp;=&nbsp;&nbsp;</span>
        <span>{{ valueState.typeIsAny.resultValue2 }}</span>
      </div>
      <v-md-preview :text="textHightLight.typeIsAny"></v-md-preview>
      <h3>接口：interface</h3>
      <div class="wrapper">
        <span>姓名：&nbsp;&nbsp;</span>
        <span>{{ valueState.typeIsInterFace.name }}&nbsp;&nbsp;</span>
        <span>性别：&nbsp;&nbsp;</span>
        <span> {{ valueState.typeIsInterFace.sex }}</span>
      </div>
      <v-md-preview :text="textHightLight.typeIsInterFace"></v-md-preview>
      <h3>联合类型&类型断言</h3>
      <div class="wrapper">
        <div>
          <p>
            <strong>使用类型断言有两种方式：＜类型＞值 或者 值 as 类型</strong>
          </p>
        </div>
        <span>"huabei bu".length</span>
        <span>&nbsp;&nbsp;=&nbsp;&nbsp;</span>
        <span> {{ valueState.typeIsAs.stringValueLength }}</span>
      </div>
      <div class="wrapper">
        <span>12345467890.toString().length</span>
        <span>&nbsp;&nbsp;=&nbsp;&nbsp;</span>
        <span> {{ valueState.typeIsAs.numberValueLength }}</span>
      </div>
      <v-md-preview :text="textHightLight.typeIsAs"></v-md-preview>
      <h3>Typescript类的修饰符</h3>
      <div class="wrapper">
        <p>
          <strong>public :公有 在当前类里面、 子类 、类外面都可以访问</strong>
        </p>
        <p>
          <strong> protected：保护类型 在当前类里面、子类里面可以访问，在类外部没法访问 </strong>
        </p>
        <p>
          <strong> private ：私有 在当前类里面可以访问，子类、类外部都没法访问 </strong>
        </p>
        <p>
          <strong>属性如果不加修饰符 默认就是 公有 （public）</strong>
        </p>
        <p><strong>readonly: 只读</strong></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";

interface myMsgInterFace {
  name: string;
  sex: string;
}
export default defineComponent({
  components: {},
  setup() {
    let state = reactive({
      valueState: {
        typeIsNumber: {
          typeValue: 100,
          resultValue: 0,
        },
        typeIsString: {
          typeValue: "21",
          resultValue: "",
        },
        typeIsAny: {
          typeValue1: "undefined",
          typeValue2: "null",
          resultValue1: "",
          resultValue2: "",
        },
        typeIsInterFace: {
          name: "",
          sex: "",
        },
        typeIsAs: {
          numberValueLength: 0,
          stringValueLength: 0,
        },
      },
    });

    const computerTypeIsNumber = (value: number) => {
      state.valueState.typeIsNumber.resultValue = 50 + value;
    };
    const computerTypeIsString = (value: string) => {
      state.valueState.typeIsString.resultValue = "20" + value;
    };
    const computerTypeIsAny = (value: any) => {
      if (value === undefined) {
        state.valueState.typeIsAny.resultValue1 = 20 + value;
      } else {
        state.valueState.typeIsAny.resultValue2 = 20 + value;
      }
    };
    const computerTypeIsInterFace = (value: myMsgInterFace) => {
      state.valueState.typeIsInterFace = { ...value };
    };
    const computerTypeIsAs = (value: string | number) => {
      if ((value as string).length) {
        state.valueState.typeIsAs.stringValueLength = (value as string).length;
      } else {
        state.valueState.typeIsAs.numberValueLength = value.toString().length;
      }
    };
    onMounted(() => {
      let userName: string;
      let numberValue: number;
      userName = "huabei bu";
      numberValue = 1234567890;
      computerTypeIsNumber(state.valueState.typeIsNumber.typeValue);
      computerTypeIsString(state.valueState.typeIsString.typeValue);
      computerTypeIsAny(undefined);
      computerTypeIsAny(null);
      computerTypeIsInterFace({ name: userName, sex: "男" });
      computerTypeIsAs(userName);
      computerTypeIsAs(numberValue);
    });
    return {
      ...toRefs(state),
      computerTypeIsNumber,
      computerTypeIsString,
      computerTypeIsAny,
      computerTypeIsAs,
      textHightLight: {
        typeIsNumber:
          "```js\n\
          const computerTypeIsNumber = (value : number) => { \n\
              state.valueState.typeIsNumber.resultValue = 50 + value; \n\
          };\n\
          computerTypeIsString(100) \n\
        ",
        typeIsString:
          "```js\n\
          const computerTypeIsString = (value: string) => {\n\
             state.valueState.typeIsString.resultValue = '20' + value; \n\
          };\n\
          computerTypeIsString('21')  \n\
        ",
        typeIsAny:
          "```js\n\
          const computerTypeIsAny = (value: any) => {\n\
             state.valueState.typeIsAny.resultValue = '20' + value; \n\
          };\n\
          computerTypeIsAny(undefined); // NaN \n\
          computerTypeIsAny(null); // 20 \n\
        ",
        typeIsInterFace:
          "```java \n\
          interface myMsgInterFace { \n\
            name: string; \n\
            sex: string; \n\
          } \n\
          const computerTypeIsInterFace = (value: myMsgInterFace) => { \n\
            state.valueState.typeIsInterFace = { ...value }; \n\
          }; \n\
          computerTypeIsInterFace({ name: 'huabei bu', sex: '男' }); \n\
        ",
        typeIsAs:
          "```js \n\
          const computerTypeIsAs = (value: string | number) => { \n\
            if ((value as string).length) { \n\
              state.valueState.typeIsAs.stringValueLength = (value as string).length; \n\
            } else { \n\
              state.valueState.typeIsAs.numberValueLength = value.toString().length; \n\
            } \n\
          }; \n\
          ```注意事项：类型断言并不是普通意义上的类型转换，断言成一个联合类型中不存在的类型是不允许的：``` \n\
          function toBoolean(something: string | number): boolean { \n\
              return <boolean>something; \n\
          }\n\
          // Type 'string | number' cannot be converted to type 'boolean' \n\
        ",
      },
    };
  },
});
</script>

<style lang="less" scoped>
.typescript-view {
  width: 100%;
  padding: 30px;
  .content {
    .wrapper {
      padding: 10px 10px 10px 40px;
    }
  }
}
</style>
