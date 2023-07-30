<script setup>
import { setTheme } from "../../utils/theme.js";

function toggle() {
  setTheme(localStorage.getItem("theme") === "dark" ? "light" : "dark");
}
</script>

<template>
  <button @click="toggle">Toggle</button>
</template>

<style scoped>
button {
  color: var(--color-background);
  background-color: var(--primary-color);
  border: none;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  border-radius: 2px;
}
</style>
