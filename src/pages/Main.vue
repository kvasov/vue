<template>
  <div>hello</div>
  <Slider />
  <!-- <Slider2 /> -->
  <!-- <CoolBox /> -->
  <EasyBox :i="1" />
</template>
<script>
import Slider from '@/components/Slider.vue';
import EasyBox from '@/components/EasyBox.vue';

export default {
  components: { Slider, EasyBox },
};
</script>
<style lang=""></style>
