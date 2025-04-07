const darkModeToggle = document.querySelector(".dark-mode-toggle");

if (localStorage.getItem("darkMode") === "dark") {
  darkModeToggle.classList.add("dark-mode-toggle-active");
  document.documentElement.dataset.theme = "dark";
}

darkModeToggle.addEventListener("click", function () {
  const isDark = darkModeToggle.classList.toggle("dark-mode-toggle-active");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
    document.documentElement.dataset.theme = "dark";
  } else {
    localStorage.setItem("darkMode", "light");
    document.documentElement.dataset.theme = "light";
  }
});
