<script setup></script>
<template>
  <h1>Core</h1>
  <h2>{{ $route.name }}</h2>
  <ul>
    <li><router-link :to="{ name: 'HScroll' }">HScroll</router-link></li>
    <li><router-link :to="{ name: 'LoadingIndicator' }">LoadingIndicator</router-link></li>
    <li><router-link :to="{ name: 'ImageLoader' }">ImageLoader</router-link></li>
    <li><router-link :to="{ name: 'ThemeToggle' }">ThemeToggle</router-link></li>
  </ul>
  <hr>
  <router-view></router-view>
</template>
<style scoped>
li {
  list-style-type: none;
}
</style>
