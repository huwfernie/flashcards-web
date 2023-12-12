

function init() {
    const lastTheme = window.localStorage.getItem("theme");
    const test1 = lastTheme === "theme-light"
    const test2 = lastTheme === "theme-dark"
    const test3 = lastTheme === "theme-retro"
    if (test1 || test2 || test3) {
        document.documentElement.classList.replace("theme-light", lastTheme);
    }
}

export default { init };
