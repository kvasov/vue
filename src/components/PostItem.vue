<template>
  <div class="post">
    <div><strong>Name: </strong>{{ post.id}} {{ post.title}}</div>
    <div><strong>Desc: </strong>{{ post.body}}</div>
    <div class="btns">
      <my-button @click="$emit('remove', post)">
        Del
      </my-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
  .post {
    position: relative;
    padding: 10px;
    margin: 0 0 10px 0;
    border: 1px solid #a7bed4;

    .name {
      font-size: 14px;
      font-weight: 500;
    }

    .desc {
      font-size: 12px;
      font-weight: 300;
    }

    .btns {
      position: absolute;
      top: 5px;
      right: 5px;

      button {
        width: 50px;
      }
    }
  }
</style>
