<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="content" @click.stop>
      <slot></slot>
    </div>

  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>
<style scoped lang="scss">
  .dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 1;

    .content {
      border-radius: 8px;
      background-color: #fff;
      padding: 30px;
    }
  }
</style>
