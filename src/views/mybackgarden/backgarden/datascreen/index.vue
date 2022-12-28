<template>
  <div class="data-big-screen">
    <div class="backAction">
      <span v-for="(item, k) in stepLever" :key="k">
        <a @click="handelBackCity(k, item)" v-if="k < stepLever.length - 1">{{
          item
        }}</a>
        <span @click="handelBackCity" v-else>{{ item }}</span>
        <b v-if="k < stepLever.length - 1">»</b>
      </span>
    </div>

    <div class="top-content">
      <CityMap
        v-if="mapData.seriesData"
        :propsData="mapData"
        @handelClickMap="handelClickMap"
      />
    </div>
    <div class="bottom-content">
      <Population v-if="mapData.seriesData" :propsData="mapData" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue';

import CityMap from './CityMap.vue';
import Population from './Population.vue';

import mixins from './mixins';

const henanJson = import('@/assets/json/henan/henan.json');
const zhoukouJson = import('@/assets/json/henan/zhoukou.json');
const chinaJson = import('@/assets/json/china.json');

export default defineComponent({
  components: {
    CityMap,
    Population,
  },
  setup() {
    const { getJson } = mixins();
    let state = reactive({
      stepLever: ['中国'],
      mapLevel: 1,
      mapData: {
        name: '中国',
        seriesData: null,
        responseData: {},
      },
    });

    const handelClickMap = (value) => {
      const setMapData = (name, json) => {
        state.stepLever.push(name);
        getJson(json).then((res) => {
          state.mapData = { name, ...res };
        });
      };

      /* eslint-disable */
      switch (value.name) {
          case "中国":
                setMapData(value.name, chinaJson);
            break;
          case "周口市":
                setMapData(value.name, zhoukouJson);
            break;
          case "河南":
                setMapData(value.name, henanJson);
            break;
      }
      /* eslint-disable */
    };
    
    const handelBackCity = (k, name) => {
         state.stepLever = [...state.stepLever.slice(0, k)];
         handelClickMap({name})
    }
    onMounted(() => {
      getJson(chinaJson).then((res) => {
        state.mapData = {...state.mapData, ...res };
      });
    });
    return {
      ...toRefs(state),
      handelClickMap,
      handelBackCity
    };
  },
});
</script>
<style lang="less" scoped>
.data-big-screen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("~@/assets/data-bigscreen.jpeg");
  background-size: cover;
  .top-content {
    display: flex;
    flex-basis: 70%;
    overflow: hidden;
    .left,
    .right {
      flex-basis: 30%;
    }
  }
  .bottom-content {
    flex-basis: 30%;
  }
  .backAction {
    position: fixed;
    z-index: 999;
    top: 30px;
    left: 30px;
    color: white;
    font-weight: bolder;
    font-size: 20px;
    b {
      padding: 5px;
    }
  }
}
</style>
