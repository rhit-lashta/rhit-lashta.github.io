// Fetch Code Source - https://www.w3schools.com/js/js_api_fetch.asp - This was probaly not the right way to make a footer and banner but I am tired and nothing else worked//

async function setupNavBar() {
    let myObject = await fetch("navTop.html");
    let myText = await myObject.text();
    document.getElementById("navbar").innerHTML = myText
    setUpDarkMode();
}

async function setupFooter() {
    let myObject = await fetch("footer.html");
    let myText = await myObject.text();
    document.getElementById("footer").innerHTML = myText
}

setupNavBar()
setupFooter()


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