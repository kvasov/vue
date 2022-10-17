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
    height: 30px;
    padding: 0 10px;
  }
</style>
