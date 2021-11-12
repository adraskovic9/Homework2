const $ = (e) => document.querySelector(e);
const slides = document.getElementsByClassName("slide");
let slideCount = slides.length - 1;
let mouseState = false;
 
$(".slider").addEventListener("mouseenter", () => mouseState = true );
$(".slider").addEventListener("mouseout", () => mouseState = false);
 
 
 
 
let slideIndex = 0;
showSlides(slideIndex);
 
slides[slideIndex].addEventListener("click", (item) => {
  console.log(item);
});
 
function setMouseState() {
  mouseState = !mouseState;
  console.log(mouseState);
}
 
document.addEventListener(
  "keydown",    
  (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if (mouseState) {
      if (code == "ArrowRight" && slideIndex < slideCount) plusSlides(1);
      else if (code == "ArrowLeft" && slideIndex > 0) plusSlides(-1);
    }
  },
  false
);
 
function plusSlides(n) {
  slides[slideIndex].style.display = "none";
  // slideCount < slideIndex ?
  showSlides((slideIndex += n));
  mouseState = true;
}
 
function currentSlide(n) {
  showSlides((slideIndex = n));
}
 
function showSlides(n) {
  console.log(slideIndex, slideCount);
  if (slideIndex === slideCount) {
    $(".next").style.display = "none";
  } else {
    $(".next").style.display = "block";
  }
  if (slideIndex === 0) {
    $(".prev").style.display = "none";
  } else {
    $(".prev").style.display = "block";
  }
 
  slides[slideIndex].style.display = "block";
  //   slides[slideIndex].style.display = "none";
}