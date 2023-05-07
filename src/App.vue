<template>
  <div>
    <Search />
    <gif-list :gifs="gifs" />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import GifList from "./components/GifList.vue";

export default {
  name: "App",
  components: {
    GifList,
    Search,
  },
  data() {
    return {
      gifs: [],
    };
  },
};
</script>

<style></style>
