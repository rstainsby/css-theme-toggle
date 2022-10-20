const SUN_ICON = 'fa-sun';
const MOON_ICON = 'fa-moon';

const themeSelector = document.getElementById('theme-selector');
const colorSlider = document.getElementById('color-slider');
const body = document.body;

themeSelector.onclick = () => {
    if (themeSelector.classList.contains(SUN_ICON)) {
        body.classList.replace('light', 'dark');  
        themeSelector.classList.replace(SUN_ICON, MOON_ICON);   
    } else {
        body.classList.replace('dark', 'light');  
        themeSelector.classList.replace(MOON_ICON, SUN_ICON);
    }
};

colorSlider.oninput = () => {
    let currentClasses = body.classList.value.split(' ');
    let currentTheme = currentClasses.filter(cls => cls.toLowerCase().includes('theme-'));

    if (currentTheme) {
        body.classList.replace(currentTheme, 'theme-' + colorSlider.value);
    }
}

const applyTheme = (theme) => {
    let classes = body.classList.value.split(' ');
    let currentThemeClass = classes.filter(cls => cls.toLowerCase().includes('-theme-'));

    if (currentThemeClass) {
        let currentColourSchemeNumber = currentThemeClass[0].charAt(currentThemeClass[0].length - 1);
        let newThemeClass = `${theme}-theme-${currentColourSchemeNumber}`;

        body.classList.replace(currentThemeClass, newThemeClass);
    }    
};