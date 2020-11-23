<template>
  <nav class="Navbar">
    <h1>{{ title }}</h1>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "./Navbar.scss";
</style>