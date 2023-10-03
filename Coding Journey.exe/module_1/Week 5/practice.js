const myParagraphs = document.getElementsByClassName("paragraph");


// select element by tag class & id selectors can only select specific elements with id, otherwise its general
const goodSelector = document.querySelector("p");

const allSelector = document.querySelectorAll ("great id");

//color of several elements at once
allSelector.forEach ((header) => {
    header.style.backgroundColor = "blue";
    header.style.color = "white";
});



