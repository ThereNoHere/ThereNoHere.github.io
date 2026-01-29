const btn = document.getElementById("themeBtn");
const menu = document.getElementById("themeMenu");

const optSystem = document.getElementById("themeSystem");
const optLight  = document.getElementById("themeLight");
const optDark   = document.getElementById("themeDark");

const THEME_KEY = "themePref"; // system | light | dark

function applyTheme(pref) {
    
document.body.classList.remove("dark");

if (pref === "dark") {
    document.body.classList.add("dark");
} else if (pref === "light") {
} else {
    const isDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
if (isDark) document.body.classList.add("dark");
}
        }

function setPref(pref) {
    localStorage.setItem(THEME_KEY, pref);
    applyTheme(pref);
    menu.classList.remove("open");
}

const saved = localStorage.getItem(THEME_KEY) || "system";
applyTheme(saved);


const mq = window.matchMedia("(prefers-color-scheme: dark)");
if (mq && mq.addEventListener) {
    mq.addEventListener("change", () => {
    const pref = localStorage.getItem(THEME_KEY) || "system";
if (pref === "system") applyTheme("system");
});
}

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-wrap")) {
        menu.classList.remove("open");
    }
});

optSystem.addEventListener("click", () => setPref("system"));
optLight.addEventListener("click", () => setPref("light"));
optDark.addEventListener("click", () => setPref("dark"));