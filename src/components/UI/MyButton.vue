<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button'
}
</script>
<style scoped lang="scss">
  button {
    margin-top: 6px;
    height: 30px;
  }
</style>
