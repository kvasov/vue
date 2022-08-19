<template>
  <div>
    <button @click="addLike">Like</button>
    <button @click="addDislike">Dislike</button>
    <div>Count likes {{ likes }}</div>
    <div>Count dislikes {{ dislikes }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  }
}
</script>

<style>

</style>
