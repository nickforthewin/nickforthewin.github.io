let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

document.querySelectorAll(".theme-dot").forEach(item => {
    item.addEventListener('click', () => {
        setTheme(item.dataset.mode);
    })
})

function setTheme(mode) {
    if (mode == "light") {
        document.getElementById('theme-style').href = "./styles/style.css";
    }

    if (mode == "dark") {
        document.getElementById('theme-style').href = "./styles/dark.css";
    }

    localStorage.setItem('theme', mode);
}