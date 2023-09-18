const changeText = document.querySelector("h1");

document.querySelector("button").addEventListener("click", function () {
changeText.textContent = "Goodbye World!";
})