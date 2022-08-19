<template>
  <form @submit.prevent>
    <div class="title">New post</div>
    <input v-model="post.title" type="text" placeholder="name">
    <input v-model="post.body" type="text" placeholder="desc">
    <button @click="createPost">Create</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>
<style scoped lang="scss">
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .title {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 500;
    }

    input {
      margin-bottom: 3px;
      width: 200px;
      height: 30px;
      padding: 3px;
      font-size: 14px;
    }

    button {
      margin-top: 6px;
      width: 200px;
      height: 30px;
    }
  }
</style>
