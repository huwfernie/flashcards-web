import { localStorage } from "./handlers";

function init() {
    const lastTheme = localStorage.get("theme");
    const testNotNull = lastTheme !== null;
    const test1 = lastTheme === "theme-light"
    const test2 = lastTheme === "theme-dark"
    const test3 = lastTheme === "theme-retro"
    if (testNotNull && (test1 || test2 || test3)) {
        document.documentElement.classList.replace("theme-light", lastTheme);
    }
}

export default { init };
