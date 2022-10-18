const SUN_ICON = 'fa-sun';
const MOON_ICON = 'fa-moon';

const themeSelector = document.getElementById('theme-selector');
const body = document.body;

themeSelector.onclick = () => {
    if (themeSelector.classList.contains(SUN_ICON)) {
        themeSelector.classList.replace(SUN_ICON, MOON_ICON);
        applyTheme("dark");        
    } else {
        themeSelector.classList.replace(MOON_ICON, SUN_ICON);
        applyTheme('light');
    }
};

const applyTheme = (theme) => {
    let classes = body.classList.value.split(' ');
    let currentThemeClass = classes.filter(cls => cls.toLowerCase().includes('-theme-'));

    if (currentThemeClass) {
        let currentColourSchemeNumber = currentThemeClass[0].charAt(currentThemeClass[0].length - 1);
        let newThemeClass = `${theme}-theme-${currentColourSchemeNumber}`;

        body.classList.replace(currentThemeClass, newThemeClass);
    }    
};