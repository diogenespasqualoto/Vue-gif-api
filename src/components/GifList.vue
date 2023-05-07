<template>
  <div>
    <gif v-for="gif in gifs" :key="gif.id" :gif="gif" />
  </div>
</template>

<script>
import Gif from "./Gif.vue";
export default {
  name: "GifList",
  components: { Gif },
  props: {
    gif: array,
  },
};
</script>

<style scoped></style>
