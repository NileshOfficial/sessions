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

function setCount(textArea, countSpan) {
    let textInput = document.getElementById(textArea);
    let counter = document.getElementById(countSpan);

    let text = textInput.value.trim();
    counter.innerHTML = text.length;
}