<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" class="text-3xl font-bold underline">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
