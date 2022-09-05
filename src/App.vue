<template>
  <header>
    <Header />
  </header>
  <div class="content-page">
    <router-view />
  </div>
  <footer></footer>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style></style>
