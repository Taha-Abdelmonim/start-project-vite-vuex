<template>
  <h1>Home View</h1>
  <p v-if="fullName">{{ fullName }}</p>
  <hello-comp />
</template>

<script>
import { mapActions, mapState, useStore } from "vuex";
import HelloComp from "../components/HelloComp.vue";

export default {
  name: "Home",
  components: {
    HelloComp,
  },
  setup() {
    const store = useStore();
    store.dispatch("printFullName");
    let fullName = store.state.fullName;
    return {
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #080;
}
</style>
