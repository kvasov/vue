<template>
  <navbar></navbar>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
export default {};
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

.buttons {
  display: flex;
  align-items: flex-start;

  button {
    margin-right: 10px;
  }
}

.observer {
}
</style>
