<template>
  <h2 v-if="posts.length">Posts list</h2>
  <transition-group name="posts-list">
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </transition-group>

</template>
<script>
import PostItem from '@/components/PostItem'
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
  .posts-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .posts-list-enter-active,
  .posts-list-leave-active {
    transition: all .2s ease;
  }
  .posts-list-enter-from,
  .posts-list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .posts-list-move {
    transition: transform 0.2s ease;
  }
</style>
