const images = ["img0.jpg", "img1.jpeg"];

const randomNum2 = parseInt(Math.random() * images.length);

const chosenImage = images[randomNum2];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
