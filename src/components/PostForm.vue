<template>
  <form @submit.prevent>
    <div class="title">New post</div>
    <my-input v-model="post.title" placeholder="name"/>
    <my-input v-model="post.body" placeholder="desc"/>
    <my-button @click="createPost">
      Create
    </my-button>
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

    button {
      width: 200px;
    }
  }
</style>
