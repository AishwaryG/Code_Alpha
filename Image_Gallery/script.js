const images = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
  "assets/5.jpg",
]; // Array of image file names

let currentIndex = 0;
const galleryImg = document.getElementById("galleryImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to display current image
function displayImage() {
  galleryImg.src = images[currentIndex];
}

// Event listener for previous button
prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  displayImage();
});

// Event listener for next button
nextBtn.addEventListener("click", () => {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  displayImage();
});

// Display initial image
displayImage();
