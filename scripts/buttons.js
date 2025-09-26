// Fetch Code Source - https://www.w3schools.com/js/js_api_fetch.asp //

// This adds the navagation bar to an html if and element has the id "navbar"
fetch("navTop.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar").innerHTML = data;
    setUpDarkMode();
});

// This adds the footer bar to an html if and element has the id "footer"
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("footer").innerHTML = data;
});


let dropBtns = document.querySelectorAll("#drop");
let hideObjs = document.querySelectorAll("#hide");
for (let i = 0; i < dropBtns.length; i++) {

    dropBtns[i].addEventListener("click", function() {
        toggleHide(hideObjs[i]);
    });
}

function toggleHide(hide) {
   
    hide.hidden = !hide.hidden;
}

// For dark mode, I did not have one specific inspirtation because it is so common but I just going to say https://www.google.com/ //

function setUpDarkMode() {
    darkBtns = document.querySelectorAll("#darkBtn");
    darkModes = document.querySelectorAll("#darkMode");
    for (let i = 0; i < darkBtns.length; i++) {

        darkBtns[i].addEventListener("click", function() {
            toggleDarkMode();
        });
    }
}

function toggleDarkMode() {
    
    for (let i = 0; i < darkModes.length; i++) {
        darkModes[i].classList.toggle("darkMode");
    }
    
}


 