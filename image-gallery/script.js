const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const thumbnailsContainer = document.querySelector(".thumbnails");

let currentIndex = 0;

// Load thumbnails
galleryImages.forEach((img, index) => {
  const thumb = img.cloneNode();
  thumb.classList.remove("gallery-item");
  thumb.addEventListener("click", () => {
    showImage(index);
  });
  thumbnailsContainer.appendChild(thumb);
});

const thumbnails = thumbnailsContainer.querySelectorAll("img");

function showImage(index) {
  lightbox.classList.add("active");
  lightboxImg.src = galleryImages[index].src;
  currentIndex = index;
  updateThumbnailHighlight();
}

function updateThumbnailHighlight() {
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active-thumb", i === currentIndex);
  });
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => showImage(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});