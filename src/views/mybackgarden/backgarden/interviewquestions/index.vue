<template>
  <div class="page-container" id="interview-questions-scroll-view">
    <div class="content">
      <Anchor :propsSelectedAnchorId="selectedAnchorId" />
      <h3 id="anchor1" class="anchorele anchor1">HTTP/HTTPS协议</h3>
      <div class="wrapper">
        <p class="level2-title">1.HTTP</p>
        <div class="wrapper-content">
          超文本传输协议，是一个基于请求与响应，无状态的，应用层的协议，常基于TCP/IP协议传输数据，互联网上应用最为广泛的一种网络协议,所有的WWW文件都必须遵守这个标准。设计HTTP的初衷是为了提供一种发布和接收HTML页面的方法。
        </div>
        <p class="level2-title">1.1.HTTP特点</p>
        <div class="wrapper-content">
          <ul>
            <li>1.无状态：协议对客户端没有状态存储，对事物处理没有“记忆”能力，比如访问一个网站需要反复进行登录操作</li>
            <li>
              2.无连接：HTTP/1.1之前，由于无状态特点，每次请求需要通过TCP三次握手四次挥手，和服务器重新建立连接。比如某个客户机在短时间多次请求同一个资源，服务器并不能区别是否已经响应过用户的请求，所以每次需要重新响应请求，需要耗费不必要的时间和流量。
            </li>
            <li>3.基于请求和响应：基本的特性，由客户端发起请求，服务端响应 简单快速、灵活</li>
            <li>4.通信使用明文、请求和响应不会对通信方进行确认、无法保护数据的完整性</li>
          </ul>
        </div>
        <p class="level2-title">2.HTTPS</p>
        <div class="wrapper-content">
          <ul>
            <li>HTTPS是身披SSL外壳的HTTP。</li>
            <li>
              HTTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。
            </li>
          </ul>
        </div>
        <p class="level2-title">2.2.HTTPS特点</p>
        <div class="wrapper-content">
          <ul>
            <li>1.内容加密：采用混合加密技术，中间者无法直接查看明文内容</li>
            <li>2.验证身份：通过证书认证客户端访问的是自己的服务器</li>
            <li>3.保护数据完整性：防止传输的内容被中间人冒充或者篡改</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor2" class="anchorele anchor2">vue和react相同点、不同点</h3>
      <div class="wrapper">
        <p class="level2-title">一、相同点</p>
        <div class="wrapper-content">
          <ul>
            <li>利用虚拟DOM实现快速渲染</li>
            <li>轻量级</li>
            <li>响应式组件</li>
            <li>服务器端渲染</li>
            <li>易于集成路由工具，打包工具以及状态管理工具</li>
            <li>优秀的支持和社区</li>
            <li>一切都是组件，组件实例之间可以通信并嵌套，并且都使用了Virtual Dom的思想。</li>
          </ul>
        </div>
        <p class="level2-title">二、不同点</p>
        <div class="wrapper-content">
          <ul>
            <li>
              vue本质是MVVM框架，是由MVC发展而来的（双向数据流），React本质是前端组件化框架，是由后端组件化发展而来的（单向数据流）
            </li>
            <li>
              vue是一个更小更灵活，适合开发单页面程序的简单化组件。 React是一个适合数据经常变化及构建大型项目的复杂组件
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor3" class="anchorele anchor3">js设计模式</h3>
      <div class="wrapper">
        <p class="level2-title">1.单例模式</p>
        <p class="level2-title">2.策略模式</p>
        <div class="wrapper-content">定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。</div>
        <p class="level2-title">3.代理模式</p>
        <p class="level2-title">4.迭代模式</p>
        <div class="wrapper-content">
          迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。
        </div>
        <p class="level2-title">5.发布—订阅模式</p>
        <div class="wrapper-content">
          也称作观察者模式，定义了对象间的一种一对多的依赖关系，当一个对象的状态发
          生改变时，所有依赖于它的对象都将得到通知
        </div>
        <v-md-preview
          text="```js
          // 订阅
          document.body.addEventListener('click', function() { console.log('click1'); }, false);
          document.body.addEventListener('click', function() { console.log('click2'); }, false);
          // 发布
          document.body.click(); // click1 click2
          "
        ></v-md-preview>
        <p class="level2-title">6.命令模式</p>
        <p class="level2-title">7.组合模式</p>
        <div class="wrapper-content">
          是用小的子对象来构建更大的 对象，而这些小的子对象本身也许是由更小 的“孙对象”构成的。
        </div>
        <p class="level2-title">8.装饰者模式</p>
        <div class="wrapper-content">
          以动态地给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。
          是一种“即用即付”的方式，能够在不改变对 象自身的基础上，在程序运行期间给对象动态地 添加职责
        </div>
        <p class="level2-title">9.状态模式</p>
        <div class="wrapper-content">
          事物内部状态的改变往往会带来事物的行为改变。在处理的时候，将这个处理委托给当前的状态对象即可，该状态对象会负责渲染它自身的行为
        </div>
        <p class="level2-title">10.外观模式</p>
        <div class="wrapper-content">
          为子系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使子系统更加容易使用
        </div>
        <v-md-preview
          text="```js
          // 三个处理函数
          function start() {
              console.log('start');
          }

          function doing() {
              console.log('doing');
          }

          function end() {
              console.log('end');
          }

          // 外观函数，将一些处理统一起来，方便调用
          function execute() {
              start();
              doing();
              end();
          }

          // 调用init开始执行
          function init() {
              // 此处直接调用了高层函数，也可以选择越过它直接调用相关的函数
              execute();
          }

          init(); // start doing end
          "
        ></v-md-preview>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor4" class="anchorele anchor4">在浏览器输入url敲击回车后发生了什么</h3>
      <div class="wrapper">
        <p class="level2-title">概述</p>
        在浏览器输入URL回车之后，主要发生以下六个行为：

        <div>1、URL解析</div>
        <div>2、域名解析</div>
        <div>3、tcp连接</div>
        <div>4、http请求</div>
        <div>5、响应请求</div>
        <div>6、页面渲染</div>

        <p>
          详细链接：<a href="https://www.jianshu.com/p/a0dbffd9bd43" target="_blank"
            >https://www.jianshu.com/p/a0dbffd9bd43</a
          >
        </p>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor5" class="anchorele anchor5">vue数据双向绑定原理</h3>
      <div class="wrapper">
        <p class="level2-title">一、原理分析</p>
        <ul>
          <li>1. new Vue() 首先执行初始化，对data执行响应化处理，这个过程发生在Observer中</li>
          <li>2. 同时对模板执行编译，找到其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在Compile中</li>
          <li>3. 同时定义一个更新函数和Watcher，将来对应数据变化时Watcher会调用更新函数</li>
          <li>4. 由于data的某个key在一个视图中可能出现多次，所以每个key都需要一个管家Dep来管理多个Watcher</li>
          <li>5. 将来data中数据一旦发生变化，会首先找到对应的Dep，通知所有Watcher执行更新函数</li>
        </ul>
        <p class="level2-title">二、实现思路</p>
        <ul>
          <li>1. 监听数据变化（数据劫持/数据代理）[Object.defineProperty]</li>
          <li>2. 收集视图依赖了哪些数据 （依赖收集）</li>
          <li>3. 数据变化时，自动“通知”视图需要修改哪些部分，并进行更新 （发布订阅模式）</li>
        </ul>
        <p class="level2-title">三、实现简单的双向绑定</p>

        <v-md-preview
          text="```js
          <input type='text' id='input' />
          <p id='data'></p>
          <script>
              const obj = {};
              const input = document.getElementById('input');
              // 数据劫持，实现数据->视图的绑定
              Object.defineProperty(obj, 'name', {
                  configurable: true,
                  enumerable: true,
                  get() {
                      return input.value;
                  },
                  set(newVal) {
                      input.value = newVal;
                      document.getElementById('data').innerHTML = newVal;
                  }
               });
              // 监听输入框，实现视图->数据的绑定
              input.addEventListener('keyup', () => {
                  obj.name = input.value;
              })
          </script>
          "
        ></v-md-preview>
      </div>
    </div>

    <div class="content">
      <h3 id="anchor6" class="anchorele anchor6">（vue/react）组件传值</h3>
      <div class="wrapper">
        <p class="level2-title">一、vue组件传值</p>
        <p>1、父组件传给子组件</p>
        <v-md-preview
          text="```js
           // Children.vue
           props:['msg'],
           data() {
               return {
                   myMsg:this.msg
               }
           }

           // Parent.vue
           <Children :msg='message'></Children>
          "
        ></v-md-preview>
        <p>2、子组件传给父组件</p>
        <p>// 在子组件中使用this.$emit(‘myEvent’) 触发，然后在父组件中使用@myEvent监听</p>
        <v-md-preview
          text="```js
         // Children.vue
         // 通过自定义事件addNum把值传给父组件
         this.$emit('addNum',this.childNum++)

         // Parent.vue
         <Children-Com @addNum='getNum'></Children-Com>
         methods:{
            // childNum是由子组件传入的
            getNum(childNum){
                this.parentNum = childNum
            }
          }
        "
        ></v-md-preview>
        <p>3、兄弟组价间传值</p>
        <div>
          <p>1.子组建A通过$emit监听自定义事件，向父组件传值，然后父组件再通过props将值传递给子组件</p>
          <p>2.总线传值 $emit + $on</p>
        </div>
        <p>4、使用$ref传值</p>
        <div>通过$ref的能力，给子组件定义一个ID，父组件通过这个ID可以直接访问子组件里面的方法和属性</div>
        <p>5、使用依赖注入传给后代子孙曾孙</p>
        <p>假设父组件有一个方法 getName()，需要把它提供给所有的后代</p>
        <v-md-preview
          text="```js
          // provide 选项允许我们指定我们想要提供给后代组件的数据&方法

          provide: function () {
            return {
              getName: this.getName()
            }
          }

          // 然后在任何后代组件里，我们都可以使用 inject 来给当前实例注入父组件的数据/方法：

          inject: ['getName']
        "
        ></v-md-preview>
        <p class="level2-title">二、react组件传值</p>
        <p><strong>组件传值的分类</strong></p>
        <ul>
          <li>1. 按嵌套关系分：父子传值和兄弟传值(意思是指跨组件传值)</li>
          <li>2. 按传值方法分：props，ref，context，redux</li>
        </ul>
        <ul class="ul-disc">
          <li><strong>1、 父组件向子组件传值</strong></li>
          <div>父组件向子组件传值 也是通过 props 来传，在子组件中用 this.props.xx 接收父组件传来的值</div>
          <li><strong>2. 子组件向父组件传值</strong></li>
          <div>通过 事件传递 + callback 实现</div>
          <li><strong>3. 子组件向子组件传值（包括兄弟组件）</strong></li>
          <div>
            通过总线bus 、 bus.emit(‘xx’,{data})、 bus.on(‘xx’,data=>{}) 来传值；传值的组件用
            bus.emit(‘xx’,{data})传值，接收值的组件用 bus.on(‘xx’,data=>{}) 来接收传来的值
          </div>
          <li><strong>4. 通过context上下文传值</strong></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor7" class="anchorele anchor7">nodejs的了解</h3>
      <div class="wrapper">
        nodejs是一个基于ChromeV8引擎的JavaScript运行环境，一个让JavaScript运行在服务端的开发平台，让脚本语言JavaScript能作为服务器语言。
        <p>node的优点：超强的高并发能力、使用JavaScript语法等。</p>
        <ul class="ul-disc">
          <li>http用来处理请求响应的模块</li>
          <li>fs 用来读取文件的模块</li>
          <li>url 用来解析请求数据等等</li>
          <li>Node.js还集成了 Npm 包管理工具，让我们可以很方便的通过命令行就能下载我们项目依赖的包</li>
          <li>让前端工程模块化，开发迅速，降低代码耦合度，可维护性大大增强。</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor8" class="anchorele anchor8">es6的了解</h3>
      <div class="wrapper">
        <ul class="ul-disc">
          <li>1. var、let、const各自的特点及其区别</li>
          <br />
          <pre>
    在ES6之前只有全局作用域和局部作用域，ES6新增了块级作用域let和const,下面将简单介绍var、let和const的特点以及区别。
    块级作用域：只能在声明的区域（代码块）中使用，不能在声明的区域的外部使用，否则报（xxx is not defined）。
    var：使用var声明的变量，其作用域为该变量所在的函数内，且存在变量提升现象（变量提升：可以先使用再声明），不会受到块级作用域的影响
    let：ES6新增的块级作用域
    1：使用let声明的变量具有块级作用域:，只能在当前声明的代码块中使用，必须要先声明再使用
    2：具有暂时性死区特性。 const：ES6中新增的常量（常量：值（内存地址）不可更改的量）。特点如下：

    3.1：具有块级作用域的特点，只能在当前声明的代码块中使用，必须要先声明再使用。
    3.2：声明常量时必须赋值，如果不赋值报错：Missing initializer in const declaration（在const声明中未初始化）。
    3.3：const声明的常量不可更改。
    3.4：使用const声明的常量如果是基本数据类型（比如：数字、字符串），一旦赋值，值不可以更改；
    如果是引用数据类型（数组，对象），不能重新赋值，但是可以更改数据结构内部的值（比如修改对象中的属性）
          </pre>
          <li>2. 箭头函数</li>
          <br />
          <div>
            <p>2.1、 箭头函数相当于匿名函数，并且简化了函数定义</p>
            <p>2.2、 箭头函数没有原型prototype，因此箭头函数没有this指向</p>
            <p>
              2.3、
              箭头函数没有自己的this指向，它会捕获自己定义所处的外层执行环境，并且继承这个this值。箭头函数的this指向在被定义的时候就确定了，之后永远都不会改变。
            </p>
          </div>
        </ul>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor9" class="anchorele anchor9">原型&原型链</h3>
      <div class="wrapper">
        <p>
          原型：每一个对象都有一个prototype属性可以挂载要扩展的属性和方法，在prototype上挂载的属性和方法在这个对象的任何实例上都可以调用。
        </p>
        <p>
          当一个对象调用自身不存在的属性/方法时，就会去prototype关联的父类对象上去找，如果找不到继续去父类关联的对象上去找，直到找到Object的属性和方法，找到直到调用，找不到返回undefined
        </p>
      </div>
    </div>
    <div class="content">
      <h3 id="anchor10" class="anchorele anchor10">什么是虚拟 DOM</h3>
      <div class="wrapper">
        <p>一、 起源</p>
        <div>虚拟dom最先是由facebook团队提出的，最先运用在react中，之后在vue2.0版本中引入了虚拟DOM的概念</div>
        <p>二、 虚拟 DOM 实现原理</p>
        <ul>
          <li>
            1. 用 JavaScript 对象结构表示 DOM 树的结构，比如说：一个元素对象，包含TagName、props 和
            Children这些属性。然后根据这个对象构建一个真正的 DOM 节点， 插到文档当中；
          </li>
          <li>2. 当数据状态变更的时候，重新构造一棵新的对象树。通过diff 算法，比较新旧虚拟 DOM 树的差异。</li>
          <li>3. 根据差异，对真正的 DOM 树进行增、删、改。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import Anchor from "./components/Anchor.vue";

const selectedAnchorId = ref("anchor1");

nextTick(() => {
  const scrollView = document.querySelector("#interview-questions-scroll-view");
  let anchorEle = document.getElementsByClassName("anchorele");
  anchorEle = Array.from(anchorEle);
  let timer = null;
  scrollView.addEventListener("scroll", function (ev) {
    const scrollTop = ev.target.scrollTop;
    if (timer != null) {
      console.log("节流中");
      // 一直清除定时器
      clearTimeout(timer);
    }
    // 只有最后一次定时器有效执行
    timer = setTimeout(function () {
      anchorEle.forEach((item) => {
        const selectItemOffsetTop = item.offsetTop;
        if (scrollTop - selectItemOffsetTop > -251) {
          const selectedClassName = item.className.split(" ")[1];
          selectedAnchorId.value = selectedClassName;
        }
      });
    }, 500);
  });
  //节流函数
});
</script>

<style lang="less" scoped>
h3 {
  color: red;
}
ul {
  list-style-type: none;
}
.ul-disc {
  list-style-type: disc;
}
.page-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  padding: 30px;
  .content {
    .wrapper {
      padding: 10px 10px 10px 40px;
      .level2-title {
        font-weight: bolder;
        letter-spacing: 2px;
      }
      .wrapper-content {
        text-indent: 2em;
      }
    }
  }
}
</style>
