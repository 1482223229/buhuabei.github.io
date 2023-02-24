<template>
  <div class="page-container">
    <div class="content">
      <h3>HTTP/HTTPS协议</h3>
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
      <h3>vue和react相同点、不同点</h3>
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
      <h3>js设计模式</h3>
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
      <h3>在浏览器输入url敲击回车后发生了什么</h3>
      <div class="wrapper">
        <p class="level2-title">概述</p>
        在浏览器输入URL回车之后，主要发生以下六个行为：

        <div>1、URL解析</div>
        <div>2、域名解析</div>
        <div>3、tcp连接</div>
        <div>4、http请求</div>
        <div>5、响应请求</div>
        <div>6、页面渲染</div>

        <a>详细链接：https://www.jianshu.com/p/a0dbffd9bd43</a>
      </div>
    </div>
    <div class="content">
      <h3>vue常用的属性及API的了解</h3>
      <div class="wrapper">答案...</div>
    </div>
    <div class="content">
      <h3>vue数据双向绑定</h3>
      <div class="wrapper">答案...</div>
    </div>
    <div class="content">
      <h3>react hooks的了解</h3>
      <div class="wrapper">答案...</div>
    </div>
    <div class="content">
      <h3>（vue/react）组件传值</h3>
      <div class="wrapper">答案...</div>
    </div>
    <div class="content">
      <h3>es6的了解</h3>
      <div class="wrapper">答案...</div>
    </div>
    <div class="content">
      <h3>原型/原型链</h3>
      <div class="wrapper">答案...</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.page-container {
  width: 100%;
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
