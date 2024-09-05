const doc = document.firstElementChild;

function toggleTheme() {
    // Check current theme of the document
    const currentTheme = doc.getAttribute('color-scheme');

    // If there is a theme set, toggle the theme
    if (currentTheme) {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme to local storage
    } else {
        // If no theme set, set the theme based on the system theme
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
    }
}

const setTheme = theme => {
    doc.setAttribute('color-scheme', theme);
    updateButton(theme);
}

// Function to handle system theme change
function handleSystemThemeChange(event) {
    const newSystemTheme = event.matches ? 'dark' : 'light';
    setTheme(newSystemTheme);
}

// Set the theme based on the system theme when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
    }

    // Listen for system theme changes and update the theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);
});

// Update button text and icon based on the current theme
function updateButton(theme) {
    const themeButton = document.getElementById('theme-button');
    const themeIcon = themeButton.querySelector('i');
    const themeText = themeButton.querySelector('span');
    if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeText.textContent = 'Light Mode';
    } else if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon';
        themeText.textContent = 'Dark Mode';
    }
}
