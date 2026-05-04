const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".lightbox-close");
const previousButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

const totalImages = 64;
const images = [];

let currentImageIndex = 0;

for (let i = 1; i <= totalImages; i += 1) {
  const number = String(i).padStart(2, "0");

  images.push({
    thumb: `images/thumbs/photo-${number}.jpg`,
    full: `images/full/photo-${number}.jpg`,
    alt: `Photographie ${number} de Jean-Christophe Parfait`
  });
}

function createGallery() {
  images.forEach((image, index) => {
    const button = document.createElement("button");
    button.classList.add("gallery-item");
    button.type = "button";

    const img = document.createElement("img");
    img.src = image.thumb;
    img.dataset.full = image.full;
    img.alt = image.alt;
    img.loading = "lazy";

    button.appendChild(img);
    gallery.appendChild(button);

    button.addEventListener("click", () => {
      openLightbox(index);
    });
  });
}

function updateLightboxImage() {
  lightboxImage.src = images[currentImageIndex].full;
  lightboxImage.alt = images[currentImageIndex].alt;
}

function openLightbox(index) {
  currentImageIndex = index;
  updateLightboxImage();

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  document.body.classList.remove("no-scroll");
}

function showPreviousImage() {
  currentImageIndex -= 1;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  updateLightboxImage();
}

function showNextImage() {
  currentImageIndex += 1;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  updateLightboxImage();
}

createGallery();

closeButton.addEventListener("click", closeLightbox);
previousButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    showPreviousImage();
  }

  if (event.key === "ArrowRight") {
    showNextImage();
  }
});
