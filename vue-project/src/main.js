import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Core from "./views/Core.vue";
import HScroll from "./components/core/HScroll.vue";
import ImageLoader from "./components/core/ImageLoader.vue";
import LoadingIndicator from "./components/core/LoadingIndicator.vue";
import ThemeToggle from "./components/core/ThemeToggle.vue";

if ((window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme")) || localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
}

const routes = [
  { path: "/core", component: Core },
  {
    path: "/core",
    component: Core,
    children: [
      { name: "HScroll", path: "hscroll", component: HScroll },
      { name: "ImageLoader", path: "imageloader", component: ImageLoader },
      { name: "LoadingIndicator", path: "loadingindicator", component: LoadingIndicator },
      { name: "ThemeToggle", path: "themetoggle", component: ThemeToggle },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount("#app");
