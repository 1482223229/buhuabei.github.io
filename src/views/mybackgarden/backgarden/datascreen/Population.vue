<template>
  <div id="population" style="width: 100%; height: 100%"></div>
</template>

<script>
import { defineComponent, onMounted, getCurrentInstance, watch } from "vue";

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
    const initMap = () => {
      let option = {
        xAxis: {
          type: "category",
          nameLocation: "end",
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
          axisLabel: {
            fontWeight: "bolder",
            margin: 35,
            rotate: -30,
            fontSize: 15,
          },
          data: proxy.propsData.seriesData.map((item) => {
            return item.name;
          }),
        },
        yAxis: {
          name: "人口(万人) / GDP(亿元)",
          type: "value",
          axisLabel: {
            color: "white",
            fontWeight: "bolder",
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            barWidth: 15,
            color: "red",
            label: {
              show: true,
              position: "bottom",
              color: "red",
              padding: [0, 0, 0, 20],
              rotate: -20,
              fontSize: 10,
              fontWeight: "bolder",
              formatter: (params) => {
                return `${params.value}万`;
              },
            },
            data: proxy.propsData.seriesData.map((item) => {
              return {
                value: item.mapValue,
              };
            }),
          },
          {
            type: "line",
            symbolSize: 2,
            lineStyle: {
              width: 1,
              color: "gold",
            },
            label: {
              show: true,
              position: "top",
              color: "gold",
              fontWeight: "bolder",
              formatter: (params) => {
                return `${params.value}亿`;
              },
            },
            data: proxy.propsData.seriesData.map((item) => {
              return {
                value: item.gdpValue,
                itemStyle: {
                  color: "#ffcf5e",
                },
              };
            }),
          },
        ],
      };
      const chart = proxy.echarts.init(document.getElementById("population"));
      chart.setOption(option);
      chart.resize();
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
        initMap();
      }
    );
    return {
      initMap,
    };
  },
});
</script>
<style lang="less" scoped>
#zhou_map {
  opacity: 0.5;
}
</style>
