<template>
  <div class="page-container">
    <div class="content">
      <h3>一个用来做请求链接转发的 Chrome 浏览器插件，因为采用的是浏览器原生 API，安全性和性能能得到保障。</h3>
      <div class="wrapper">
        <p class="level2-title">一、功能</p>
        <div class="wrapper-content">
          <ul>
            <li>请求地址转发</li>
            <li>全局插件启用开关</li>
            <li>可禁用浏览器缓存</li>
            <li>采用 jsonc 以支持在转发规则中写注释</li>
            <li>可以使用 Monaco Editor（VSCode）中的部分快捷键，比如通过 ⌘K ⌘F 组合键可以实现格式化 JSON 的功能</li>
            <li>自动补全</li>
            <li>支持 CORS，支持 withCredentials</li>
            <li>跨域和缓存禁用键（右键点击浏览器工具栏的 XSwitch 插件图标 - 设置）</li>
            <li>分组规则</li>
          </ul>
        </div>
        <p class="level2-title">二、使用</p>
        <div class="wrapper-content">
          <p>所有的规则，会按照定义的顺序从前往后执行，即使匹配到了规则，也会继续往下匹配，直到最后一条启用的规则。</p>
          <v-md-preview
            text="```js
        {
            // 转发规则
            'proxy': [
              [
                '//alinw.alicdn.com/platform/daily-test/isDaily.js', // 匹配 URL
                '//alinw.alicdn.com/platform/daily-test/isDaily.json' // 替换成这个 URL
              ],
              // 字符串替换，会全局匹配
              [
                'alinw',
                'g'
              ]
              // 把链接里所有的 .min 替换掉
              // [
              //   '.min',
              //   ''
              // ],
              // 正则
              // [
              //   '(.*)/platform/daily-test/(.*).js$',
              //   'http://127.0.0.1:3000/daily-test/$1.js'
              // ],
              // 直接转换成 inline 模式的 JavaScript
              // [
              //   'https://alinw.alicdn.com/platform/daily-test/isDaily.js',
              //   'data:text/javascript,window.__isDaily = true;'
              // ]
            ],
            // 希望开启 CORS 跨域的链接
            'cors': [
              'cors.a.com',
              '(.*).b.com'
            ]
          }
        "
          ></v-md-preview>
        </div>
      </div>
    </div>
    <div>源码仓库：<a href="https://github.com/yize/xswitch" target="_blank">https://github.com/yize/xswitch</a></div>
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
