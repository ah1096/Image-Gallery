const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

let pictures = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg"
]

/* Declaring the alternative text for each image file */
document.getElementById("pic1").alt = "Closeup of a human eye";
document.getElementById("pic2").alt = "A pale brown sand dune";
document.getElementById("pic3").alt = "Purple and white flowers";
document.getElementById("pic1").alt = "Closeup of a human eye";
document.getElementById("pic1").alt = "Closeup of a human eye";


/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
