<template>
  <canvas id="canvas_empirecode"> </canvas>
  <div class="code_toxic_img"></div>
</template>
<script>
let timer = null;
export default {
  data() {
    return {};
  },
  methods: {
    renderCanvas() {
      // window.onload = function () {
      if (timer) {
        clearInterval(timer);
      }
      var canvas = null;
      canvas = document.getElementById("canvas_empirecode");
      // getContext() 方法返回一个用于在画布上绘图的环境。
      var context = canvas.getContext("2d");
      var W = window.innerWidth;
      var H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      var fontSize = 15;
      var colunms = Math.floor(W / fontSize);
      var drops = [];
      for (var i = 0; i < colunms; i++) {
        drops.push(0);
      }
      var str = "01abcdefghijklmnopqurstuvwxyz";
      function draw() {
        //让背景逐渐由透明到不透明
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        //给字体设置样式
        //context.font = "700 "+fontSize+"px  微软雅黑";
        context.font = fontSize + "px arial";
        //给字体添加颜色
        context.fillStyle = "rgb(50, 113, 167)"; //随意更改字体颜色
        //写入图形中
        for (var i = 0; i < colunms; i++) {
          var index = Math.floor(Math.random() * str.length);
          var x = i * fontSize;
          var y = drops[i] * fontSize;
          context.fillText(str[index], x, y);
          //如果要改变时间，肯定就是改变每次他的起点
          if (y >= canvas.height && Math.random() > 0.92) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      draw();
      timer = setInterval(draw, 33);
      // };
    },
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    that.renderCanvas();
    window.onresize = function () {
      setTimeout(() => {
        that.renderCanvas();
      }, 1000);
    };
  },
};
</script>

<style lang="less" scoped>
#canvas_empirecode {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
.bg {
  width: 100%;
  height: 100%;
  background-color: black;
}
.code_toxic_img {
  width: 100%;
  height: 100px;
  margin: 30px 0;
  position: fixed;
  left: 0;
  top: 0;
  background-image: url("~@/assets/code_toxic.gif");
  background-position: -40%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
