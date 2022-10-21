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

let result = "";
let currentImage = 0;

result =    `
            <img class="fit-cover" src="${images[0].image}" alt="${images[0].title}">
            <h1 class="main-title font-size-20">${images[0].title}</h1>
            <p class="paragraph font-size-15">${images[0].text}</p>
            `

imageDisplayedDOM.innerHTML = result;

console.log(result);

result = "";

console.log(result);

for(let i = 0; i < images.length; i++) {

    result +=   `<div class="inactive col-20">

                    <img class="little-image" src="${images[i].image}" alt="${images[i].title}">

                </div>`

}

console.log(result);

thumbnailsDOM.innerHTML = result;

