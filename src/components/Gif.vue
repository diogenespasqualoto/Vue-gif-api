<template>
  <div class="gif" :style="`background-image: url('${gif.images.fixed_width.url}')`">
    <input ref="url"  readonly type="text" style="flex: 1" :value="gif.images.original.url">
    <button @click="copy()">Copy</button>
  </div>
</template>

<script>
export default {
  name: "SearchedGif",
  props: ['gif'],
  data() {
    return {
      url : ''
    }
  },
  methods: {
    copy() {
      /* Select the text field */
      this.$refs.url.select();
      this.$refs.url.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
      this.$refs.url.value = 'Copied!!!';
    }
  }
}
</script>

<style scoped>
.gif {
  width: 240px;
  height: 240px;
  margin-bottom: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.5);
}

.gif:hover {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
    -2px -2px 4px rgba(255, 255, 255, 0.5);
}

.gif input[type="text"] {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  padding: 8px;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 5px;
}

.gif input[type="text"]:focus {
  outline: none;
}

.gif button {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.gif button:hover {
  text-shadow: none;
}
</style>
