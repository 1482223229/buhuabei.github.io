<template>
  <div id="map" v-if="propsData.name.includes('中国')" style="width: 100%; height: 150%"></div>
  <div id="map" v-else style="width: 100%; height: 100%"></div>
</template>

<script>
import { defineComponent, onMounted, getCurrentInstance, watch, reactive, toRefs } from "vue";

export default defineComponent({
  inject: {
    echarts: {
      from: "echarts",
    },
  },
  components: {},
  props: ["propsData"],
  setup(props) {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      propsDt: {},
    });
    const initMap = () => {
      let option = {
        tooltip: {
          trigger: "item",
          type: "cross",
          formatter: function (params) {
            var a =
              "<div style='background-color: orange;padding: 5px 10px;text-align:center;color:white;font-size: 16px;'>" +
              params.name +
              "</div>";
            var num = Math.ceil(params.data.name[1].length / 10);
            a += "<div style='padding:3px; color: red; font-weight: bold'>";
            for (var i = 0; i < num; i++) {
              a += params.value + "万人<br>";
            }
            a += "</div>";

            return a;
          },
        },
        visualMap: {
          min: 50,
          max: 1000,
          text: ["High", "Low"],
          x: "left",
          y: "center",
          realtime: false,
          calculable: true,
          show: false,
          textStyle: {
            color: "white",
            fontSize: 10,
          },
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        series: [
          {
            name: "周口",
            type: "map",
            map: "cs",
            roam: false,
            label: {
              normal: {
                textStyle: {
                  fontSize: "8px",
                  fontWeight: "bold",
                },
              },
            },

            layoutCenter: ["50%", "50%"], //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
            //            layoutSize: 11200,
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } },
            },
            data: forMatterListData(),
          },
        ],
      };

      proxy.echarts.registerMap("cs", proxy.propsData.responseData);
      const chart = proxy.echarts.init(document.getElementById("map"));
      chart.setOption(option);
      chart.resize();
      chart.on("click", function (params) {
        proxy.$emit("handelClickMap", params);
      });
    };

    const forMatterListData = () => {
      return proxy.propsData.seriesData.map((item) => {
        item.value = item.mapValue;
        return item;
      });
    };

    onMounted(() => {
      proxy?.$nextTick(() => {
        initMap();
      });
      window.addEventListener("resize", () => {
        setTimeout(() => {
          initMap();
        }, 1000);
      });
    });

    watch(
      () => props.propsData,
      () => {
        proxy.$nextTick(() => {
          initMap();
        });
      }
    );

    return {
      ...toRefs(state),
      initMap,
      forMatterListData,
    };
  },
});
</script>

<style lang="less" scoped>
#map {
  opacity: 0.8;
}
</style>
