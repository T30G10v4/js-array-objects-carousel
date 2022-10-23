const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageDisplayedDOM = document.getElementById("image-displayed");
const thumbnailsDOM = document.getElementById("thumbnails");
const leftDOM = document.getElementById("left");
const rightDOM = document.getElementById("right");

// Stato iniziale
let imageIndex = 0;
writeImageDisplayedDOM(imageIndex);
writeThumbnailsDOM(images.length);
const arrayThumbnailsDOM = document.getElementsByClassName("inactive");
addActiveClass(imageIndex);

// Quando clicco sullo slider... 
leftDOM.addEventListener("click", displayImageLeft);
rightDOM.addEventListener("click", displayImageRight);

imageDisplayedDOM.addEventListener("click", displayImageRight);

for(let i = 0; i < arrayThumbnailsDOM.length; i++) {

    arrayThumbnailsDOM[i].addEventListener("click", () => {
 
        removeActiveClass(imageIndex);
        imageIndex = i;
        writeImageDisplayedDOM(imageIndex);
        addActiveClass(imageIndex);

    });

}

setInterval(() => {

    displayImageRight();
    
}, 2000);

/**
 * Description Funzione che scrive nel DOM l'immagine image-displayed con indice "index"
 * @param {number} index - Indice dell'oggetto
 * @returns {void}
 */
function writeImageDisplayedDOM(index) {

    let result =    `
                    <img class="fit-cover" src="${images[index].image}" alt="${images[index].title}">
                    <h1 class="main-title font-size-20">${images[index].title}</h1>
                    <p class="paragraph font-size-15">${images[index].text}</p>
                    `;

imageDisplayedDOM.innerHTML = "";
imageDisplayedDOM.innerHTML = result;

}

/**
 * Description Funzione che scrive nel DOM le thumbnail di "index" immagini.
 * @param {number} index
 * @returns {void}
 */
function writeThumbnailsDOM(index) {

    let stringImageDisplayed = "";
    
    for(let i = 0; i < index; i++) {

        stringImageDisplayed += `<div class="inactive col-20">
    
                                <img class="little-image" src="${images[i].image}" alt="${images[i].title}">
    
                                </div>`;
    
    }

    thumbnailsDOM.innerHTML = "";
    thumbnailsDOM.innerHTML = stringImageDisplayed;

}

/**
 * Description Funzione che mostra la prossima immagine a sinistra, al click del pulsante left. Se non esiste, resetta
 *              il contatore.
 * @returns {void}
 */
function displayImageLeft() {

    removeActiveClass(imageIndex);
    if(imageIndex <= 0 ) {imageIndex=images.length-1;}
    else {imageIndex--;}
    addActiveClass(imageIndex);
    writeImageDisplayedDOM(imageIndex);
    
}

/**
 * Description Funzione che mostra la prossima immagine a destra, al click del pulsante right. Se non esiste, resetta
 *              il contatore.
 * @returns {void}
 */
function displayImageRight() {

    removeActiveClass(imageIndex);
    if(imageIndex >= images.length - 1) {imageIndex=0;}
    else {imageIndex++;}
    addActiveClass(imageIndex);
    writeImageDisplayedDOM(imageIndex);

}

function addActiveClass(index) {

    arrayThumbnailsDOM[index].classList.add("active");

}

function removeActiveClass(index) {

    arrayThumbnailsDOM[index].classList.remove("active");

}