<script setup>
function toggle() {
  const isMediaDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isAttrDark = document.documentElement.getAttribute("data-theme") !== "light";
  if (isMediaDark && isAttrDark) return toLight();
  toDark();
}
function toLight() {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
}
function toDark() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
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
    padding: .2rem .4rem;
    cursor: pointer;
}
</style>
