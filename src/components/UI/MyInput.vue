<template>
  <input :value="modelValue" @input="updateInput" type="text">
</template>
<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>
<style scoped lang="scss">
  input {
    margin-bottom: 3px;
    width: 200px;
    height: 30px;
    padding: 3px;
    font-size: 14px;
  }
</style>
