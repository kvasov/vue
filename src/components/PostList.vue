<template>
  <h2 v-if="posts.length">Posts list</h2>
  <post-item
    v-for="post in posts"
    :post="post"
    :key="post.id"
    @remove="$emit('remove', post)"
  />
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

</style>
