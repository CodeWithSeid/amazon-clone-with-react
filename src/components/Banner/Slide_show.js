var slideIndex = 0;

// Function to show the current slide
export function showSlide() {
  // Hide all slides
  var Banner_image = document.getElementsByClassName('Banner_image');
  if(Banner_image.length > 0){
    for (var i = 0; i < Banner_image.length; i++) {
      Banner_image[i].classList.remove('DB');
    }
    Banner_image[slideIndex].classList.add('DB');
  }
}

// Function to slide left
export function slideLeft() {
  var Banner_image = document.getElementsByClassName('Banner_image');
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = Banner_image.length - 1;
  }
  showSlide();
}

// Function to slide right
export function slideRight() {
  var Banner_image = document.getElementsByClassName('Banner_image');
  slideIndex++;
  if (slideIndex >= Banner_image.length - 1) {
    slideIndex = 0;
  }
  showSlide();
}

// Automatically slide every 4 seconds
setInterval(slideRight, 4000);

// Show the initial slide
showSlide();