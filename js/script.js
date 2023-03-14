// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// QUI HO LE IMMAGINI
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]

const itemsContainer = document.querySelector(".slider-items")

for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class = "item">
            <img src="${currentImage}" alt="">
        </div>`;

    itemsContainer.innerHTML += sliderItem;
}




const itemsArray = document.getElementsByClassName("item")
console.log(itemsArray);



let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active"); 


const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


nextBtn.addEventListener("click", function () {


    prevBtn.classList.remove("hidden")

    if (activeItemIndex < (itemsArray.length - 1)) {


        itemsArray[activeItemIndex].classList.remove("active");


        activeItemIndex++;


        itemsArray[activeItemIndex].classList.add("active");




        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        }
    }

});



prevBtn.classList.add("hidden");


prevBtn.addEventListener("click", function () {

    nextBtn.classList.remove("hidden");



    itemsArray[activeItemIndex].classList.remove("active");


    activeItemIndex--;


    itemsArray[activeItemIndex].classList.add("active");
    if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden")
    }


})