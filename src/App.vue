<template>
  <div>
    <form @submit.prevent>
      <div class="title">New post</div>
      <input v-model="title" type="text" placeholder="name">
      <input v-model="body" type="text" placeholder="desc">
      <button @click="createPost">Create</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Name: </strong>{{ post.title}}</div>
      <div><strong>Desc: </strong>{{ post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Qwe 1', body: 'qweq weq we'},
        {id: 2, title: 'Qwe 2', body: 'qweq weq we sdfs'},
        {id: 3, title: 'Qwe 3', body: 'qweq weq we bxcvbxvcbxvc'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost);
      this.title = ''
      this.body = ''
    }
  }
}
</script>

<style lang="scss">
  body {
    padding: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

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

  .post {
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
  }
</style>
