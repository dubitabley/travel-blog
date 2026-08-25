/**
 * Script for handling the theming on the site, only handles
 * saving/loading from localstorage since I'm using css only
 * for theme stuff lol
 */

const Theme = {
    System: "system",
    Light: "light",
    Dark: "dark",
};

const THEME_KEY = "theme";

// sets up the event listeners
function setup() {
    const systemThemeInput = document.getElementById("theme-system");
    const lightThemeInput = document.getElementById("theme-light");
    const darkThemeInput = document.getElementById("theme-dark");

    systemThemeInput.addEventListener("input", () => {
        saveTheme(systemThemeInput, Theme.System);
    });
    lightThemeInput.addEventListener("input", () => {
        saveTheme(lightThemeInput, Theme.Light);
    });
    darkThemeInput.addEventListener("input", () => {
        saveTheme(darkThemeInput, Theme.Dark);
    });

    const existingTheme = loadTheme();
    if (existingTheme) {
        switch (existingTheme) {
            case Theme.System:
                systemThemeInput.checked = true;
                break;
            case Theme.Light:
                lightThemeInput.checked = true;
                break;
            case Theme.Dark:
                darkThemeInput.checked = true;
                break;
        }
    }
}

function saveTheme(input, theme) {
    if (input.checked) {
        globalThis.localStorage.setItem(THEME_KEY, theme);
    }
}

function loadTheme() {
    return globalThis.localStorage.getItem(THEME_KEY);
}

globalThis.addEventListener("load", setup);
