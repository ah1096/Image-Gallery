const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
]

/* Declaring the alternative text for each image file */

const altText = {
    "pic1.jpg" : "A pale-yellow and white cockatiel with orange cheeks",
    "pic2.jpg" : "A black and cyan bird performing a mating dance, wings outspread",
    "pic3.jpg" : "A red, yellow, and blue macaw preening",
    "pic4.jpg" : "A secretary bird with a white head, orange beak area, and a crest of black feathers",
    "pic5.jpg" : "A white and light-brown owl, possibly a barn owl"
}


/* Looping through images */



for (const image of images) {

const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', altText[image]);
thumbBar.appendChild(newImage);

thumbBar.addEventListener('click', e=> {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
})
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 

    else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

  });


