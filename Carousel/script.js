const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const slideIndicator = document.getElementsByClassName("slide-indicators");

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
  for (let slideIndic of slideIndicator) {
    slideIndic.classList.remove("active-slide")
  }
}
setInterval(moveToNextSlide, 3000);
function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slideIndicator[slidePosition].classList.add("active-slide")
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slideIndicator[slidePosition].classList.add("active-slide")
  slides[slidePosition].classList.add("carousel-item-visible");
}
