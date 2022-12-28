<template>
  <div class="pagination-hb">
    <pagination-hb
      :paginationVal="paginationVal"
      :paginationCallback="paginationCallback"
    ></pagination-hb>
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
};
</script>

<style lang="less" scoped>
.pagination-hb {
  text-align: center;
}
</style>
