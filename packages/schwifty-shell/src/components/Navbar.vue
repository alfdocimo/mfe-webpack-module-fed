<template>
  <nav class="Navbar">
    <h1>{{ title }}</h1>
    <span>The shell for this app is made on Vue! 💚</span>
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