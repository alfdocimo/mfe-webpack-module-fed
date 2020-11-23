<style lang="scss">
@import "./App.scss";
</style>

<template>
  <div>
    <navabar title="Get Schwifty! 💯"></navabar>
    <div class="Schwifty__Shell">
      <div class="Schwifty__Shell__SearchModule">
        <div id="single-spa-application:schwifty-search-module"></div>
      </div>
      <div class="Schwifty__Shell__ViewerModule">
        <div id="single-spa-application:schwifty-viewer-module"></div>
      </div>
    </div>
  </div>
</template>


<script>
import navabar from "./components/Navbar.vue";
export default {
  components: {
    navabar,
  },
};
</script>
