<template>
  <div class="pages">
    <div
      v-for="pageNum in totalPages"
      :key="pageNum"
      :class="{'current': pageNum === this.currentPage}"
      @click="$emit('changePage', pageNum)"
    >
        {{pageNum}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
  .pages {
    display: flex;

    div {
      margin-right: 4px;
      border: 1px solid #ccc;
      padding: 2px 4px;
      cursor: pointer;

      &.current {
        background-color: #000;
        border-color: #000;
        color: #fff;
        cursor: default;
      }
    }
  }
</style>
