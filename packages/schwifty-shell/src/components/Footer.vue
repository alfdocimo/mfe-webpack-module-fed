<template>
  <nav class="Footer">
    <span>{{ author }}</span>
    <a href="https://github.com/alfdocimo/mfe-webpack-module-fed">view on Github</a>
  </nav>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "./Footer.scss";
</style>