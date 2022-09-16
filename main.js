const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg"
]

/* Declaring the alternative text for each image file */

let altText = {
    "pic1.jpg" : "Closeup of a human eye",
    "pic2.jpg" : "A pale brown sand dune",
    "pic3.jpg" : "Purple and white flowers",
    "pic4.jpg" : "Wall with Egyptian imagery",
    "pic5.jpg" : "Light brown butterfly on bright green leaf"
}


/* Looping through images */

for (const image of images)
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/${img}');
newImage.setAttribute('alt', 'altText[image]');
thumbBar.appendChild(newImage);

thumbBar.addEventListener('click', e=> {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
})

/* Wiring up the Darken/Lighten button */
