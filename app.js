const SUN_ICON = 'fa-sun';
const MOON_ICON = 'fa-moon';

const themeSelector = document.getElementById('theme-selector');
const colorSlider = document.getElementById('color-slider');
const body = document.body;

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
    applyDarkTheme();
}

themeSelector.onclick = () => {
    if (themeSelector.classList.contains(SUN_ICON)) {
        applyLightTheme();
    } else {
        applyDarkTheme();
    }
};

const applyLightTheme = () => {
    body.classList.replace('light', 'dark');  
    themeSelector.classList.replace(SUN_ICON, MOON_ICON);   
}

const applyDarkTheme = () => {
    body.classList.replace('dark', 'light');  
    themeSelector.classList.replace(MOON_ICON, SUN_ICON);
}

colorSlider.oninput = () => {
    let currentClasses = body.classList.value.split(' ');
    let currentTheme = currentClasses.filter(cls => cls.toLowerCase().includes('theme-'));

    if (currentTheme) {
        body.classList.replace(currentTheme, 'theme-' + colorSlider.value);
    }
}