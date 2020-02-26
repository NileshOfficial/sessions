function openSideNav() {
    let sideNav = document.getElementById("sideNav");
    sideNav.style.display = "block";
}

function closeSideNav() {
    let sideNav = document.getElementById("sideNav");
    sideNav.style.display = "none";
}

function changeLanguage(language) {
    let currLanguage = document.getElementById("currentLanguage");
    currLanguage.innerHTML = language;
}