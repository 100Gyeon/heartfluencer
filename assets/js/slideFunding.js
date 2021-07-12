const slideWrapper = document.querySelector('.container');
const slides = document.querySelectorAll('.item');
const totalSlides = slides.length; // item의 개수
const sliderWidth = slideWrapper.clientWidth; // container의 width
const slider = document.querySelector('.slider');
let slideIndex = 0;

slider.style.width = sliderWidth * totalSlides + 'px';

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slider.style.left = -(sliderWidth * slideIndex) + 'px';
  }
  slideIndex++;
  if (slideIndex === totalSlides) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 2000);
}