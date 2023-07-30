<script setup>
import Theme from "../../utils/Theme.utils.js";

function toggle() {
  Theme.set(Theme.get() === "dark" ? "light" : "dark");
}
</script>

<template>
  <button @click="toggle">Toggle</button>
  <button @click="Theme.reset">Reset</button>
</template>

<style scoped>
button {
  color: var(--color-background);
  background-color: var(--primary-color);
  border: none;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  border-radius: 2px;
  margin-left: 2px;
}
</style>