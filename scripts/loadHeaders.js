// Fetch Code Source - https://www.w3schools.com/js/js_api_fetch.asp //

fetch("navTop.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar").innerHTML = data;
});