<script setup>
import ThemeToggle from "./components/core/ThemeToggle.vue";
</script>

<template>
  <div>
    <div style="text-align: right;"><ThemeToggle/></div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 2;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
