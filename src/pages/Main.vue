<template>
  <div>hello</div>
  <!-- <Slider /> -->
  <Slider2 />
  <!-- <CoolBox /> -->
  <EasyBox :i="1" />
</template>
<script>
import Slider2 from '@/components/Slider2.vue';
import EasyBox from '@/components/EasyBox.vue';

export default {
  components: { Slider2, EasyBox },
};
</script>
<style lang=""></style>
