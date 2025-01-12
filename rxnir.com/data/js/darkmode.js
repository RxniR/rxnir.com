const toggleDarkMode = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "" : "dark";

    document.body.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
};

document.getElementById("themeToggle").addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
    }
});