<template>
  <input
    class="search-input"
    placeholder="Procure por Gif's"
    v-model="search"
    @input="onSearch"
  />
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      search: "",
      timeout: null,
    };
  },
  methods: {
    onSearch() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.makeSearch();
      }, 500);
    },
    makeSearch() {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=FwPRz2RSIRV5R3gRNV52L3SQqm9AnsnD&q=${this.search}&limit=999`
      )
        .then((response) => response.json())
        .then((result) => {
          this.$emit("gifs-fetched", result);
        });
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 18px;
  border: 2px solid #5f5f5f;
  outline: 0;
  display: block;
  width: 100%;
}

input:focus {
  border-color: #009ad7;
}

.search-input {
  background-color: #f0f0f0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  outline: none;
  transition: all 0.2s ease-in-out;
  width: 100%;
}

.search-input:focus {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
    -2px -2px 4px rgba(255, 255, 255, 0.5);
}
</style>
