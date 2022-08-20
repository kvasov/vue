<template>
  <div>
    <my-button @click="showDialog">Create new</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>

    <post-list
      :posts="this.posts"
      @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
export default {
  components: {
    PostForm, PostList
  },

  data() {
    return {
      posts: [
        {id: 1, title: 'Qwe 1', body: 'qweq weq we'},
        {id: 2, title: 'Qwe 2', body: 'qweq weq we sdfs'},
        {id: 3, title: 'Qwe 3', body: 'qweq weq we bxcvbxvcbxvc'},
      ],
      dialogVisible: false
    }
  },

   methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id != post.id)
    },
    showDialog() {
      this.dialogVisible = true;
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




</style>
