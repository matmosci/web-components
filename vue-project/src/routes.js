import Core from "./views/Core.vue";
import HScroll from "./components/core/HScroll.vue";
import ImageLoader from "./components/core/ImageLoader.vue";
import LoadingIndicator from "./components/core/LoadingIndicator.vue";
import ThemeToggle from "./components/core/ThemeToggle.vue";

export const routes = [
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
