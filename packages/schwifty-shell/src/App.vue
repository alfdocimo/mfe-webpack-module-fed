<style lang="scss">
@import "./App.scss";
</style>

<template>
  <div class="Schwifty">
    <Navabar title="Get Schwifty! 💯"></Navabar>
    <div class="Schwifty__Shell">
      <div class="Schwifty__Shell__SearchModule">
        <div id="single-spa-application:schwifty-search-module"></div>
      </div>
      <div class="Schwifty__Shell__ViewerModule">
        <div id="single-spa-application:schwifty-viewer-module"></div>
      </div>
    </div>
    <Footer author="Alfredo Narvaez Docimo"></Footer>
  </div>
</template>


<script>
import Navabar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navabar,
    Footer,
  },
};
</script>
