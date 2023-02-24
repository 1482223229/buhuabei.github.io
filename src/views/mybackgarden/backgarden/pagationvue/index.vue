<template>
  <div class="pagination-hb">
    <pagination-hb :paginationVal="paginationVal" :paginationCallback="paginationCallback"></pagination-hb>
    <br />
    <div class="text_list">
      <div>
        封装组件发布到npm仓库教程：<a href="https://www.jianshu.com/p/48a0ebc1496b" target="_blank"
          >https://www.jianshu.com/p/48a0ebc1496b</a
        >
      </div>
      <div>
        使用说明：<a href="https://www.npmjs.com/package/pagination-hb" target="_blank"
          >https://www.npmjs.com/package/pagination-hb</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paginationVal: {
        pageSize: 10,
        current: 1,
        total: 0,
      },
    };
  },
  methods: {
    paginationCallback(optionsVal) {
      if (JSON.stringify(optionsVal) === JSON.stringify(this.paginationVal)) {
        return;
      } else {
        this.paginationVal = { ...optionsVal };
      }
    },
  },
  mounted() {
    this.paginationCallback({
      pageSize: 10,
      current: 1,
      total: 100,
    });
  },
};
</script>

<style lang="less" scoped>
.pagination-hb {
  text-align: center;
}
.text_list {
  text-align: left;
  padding: 50px;
  padding-left: 200px;
}
</style>
