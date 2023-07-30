class Theme {
  static init() {
    const theme = localStorage.getItem("theme");
    if (theme) this.set(theme);
  }

  static set(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  static get() {
    const mediaTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const setTheme = localStorage.getItem("theme");
    return setTheme || mediaTheme;
  }

  static reset() {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }
}

export default Theme;

window.Theme = Theme;