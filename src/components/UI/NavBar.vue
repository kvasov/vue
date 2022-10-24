<template>
  <div class="navbar">
    <router-link to="/">Main</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/postsstore">Posts Store</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
<script>
export default {
  name: 'navbar',
}
</script>
<style scoped lang="scss">
  .navbar {
    margin: 20px 0;
    border: 1px solid #ccc;

    a {
      display: inline-block;
      margin-right: 20px;
    }
  }
</style>
