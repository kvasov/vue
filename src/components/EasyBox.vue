<template>
  <div>
    <!-- <button @click="showSingle">Show single picture.</button> -->
    <button @click="showMultiple">Show a group of pictures.</button>

    <vue-easy-lightbox
      :visible="visibleRef"
      :moveDisabled="true"
      :scrollDisabled="true"
      :loop="true"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    >
      <template v-slot:toolbar=""> </template>
    </vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  components: {
    VueEasyLightbox,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgsRef = ref([]);

    const onShow = () => {
      visibleRef.value = true;
    };
    // const showSingle = () => {
    //   imgsRef.value = 'https://via.placeholder.com/468x400';
    //   onShow();
    // };
    const showMultiple = () => {
      imgsRef.value = [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
      ];
      indexRef.value = 0;
      onShow();
    };
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgsRef,

      showMultiple,
      onHide,
    };
  },
});
</script>
