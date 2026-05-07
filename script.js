document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 64;

  const gridButton = document.querySelector("#grid-button");
  const flowButton = document.querySelector("#flow-button");
  const gridView = document.querySelector("#grid-view");
  const flowView = document.querySelector("#flow-view");

  const infoButton = document.querySelector("#info-button");
  const infoPanel = document.querySelector("#info-panel");
  const infoClose = document.querySelector("#info-close");

  const gridGallery = document.querySelector("#grid-gallery");
  const flowGallery = document.querySelector("#flow-gallery");

  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const lightboxMetaMain = document.querySelector("#lightbox-meta-main");
  const lightboxMetaSecondary = document.querySelector("#lightbox-meta-secondary");

  const photoMetadata = {
    1: {
      focal: "23mm",
      aperture: "f/2.8",
      shutter: "1/125s",
      country: "Naples"
    },
    2: {
      focal: "23mm",
      aperture: "f/2,2",
      shutter: "1/4000s",
      country: "Naples"
    },
    3: {
      focal: "23mm",
      aperture: "f/2,8",
      shutter: "1/400s",
      country: "Naples"
    },
    4: {
      focal: "50mm",
      aperture: "f/2,8",
      shutter: "1/250s",
      country: "Naples"
    },
    5: {
      focal: "50mm",
      aperture: "f/5,6",
      shutter: "1/1200s",
      country: "Naples"
    },
    6: {
      focal: "50mm",
      aperture: "f/2,8",
      shutter: "1/320s",
      country: "Naples"
    },
    7: {
      focal: "23mm",
      aperture: "f/6,4",
      shutter: "1/1250s",
      country: "Naples"
    },
    8: {
      focal: "23mm",
      aperture: "f/2,5",
      shutter: "1/3200s",
      country: "Paris"
    },
    9: {
      focal: "23mm",
      aperture: "f/2,8",
      shutter: "1/6s",
      country: "Naples"
    },
    10: {
      focal: "23mm",
      aperture: "f/2,8",
      shutter: "1/200s",
      country: "Naples"
    },
    11: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1s",
      country: "Naples"
    },
    12: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1s",
      country: "Naples"
    },
    13: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1s",
      country: "Naples"
    },
    14: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1s",
      country: "Naples"
    },
    15: {
      focal: "50mm",
      aperture: "f/16",
      shutter: "1/13s",
      country: "Paris"
    },
    16: {
      focal: "50mm",
      aperture: "f/3,6",
      shutter: "1/100s",
      country: "Naples"
    },
    17: {
      focal: "23mm",
      aperture: "f/5",
      shutter: "1/20s",
      country: "Naples"
    },
    18: {
      focal: "23mm",
      aperture: "f/2",
      shutter: "1/4s",
      country: "Paris"
    },
    19: {
      focal: "18mm",
      aperture: "f/2",
      shutter: "1/125s",
      country: "Paris"
    },
    20: {
      focal: "23mm",
      aperture: "f/2,5",
      shutter: "1/2500s",
      country: "Paris"
    },
    21: {
      focal: "23mm",
      aperture: "f/3,6",
      shutter: "1/1200s",
      country: "Naples"
    },
    22: {
      focal: "23mm",
      aperture: "f/3,6",
      shutter: "1/320s",
      country: "Naples"
    },
    23: {
      focal: "23mm",
      aperture: "f/13",
      shutter: "1/400s",
      country: "Naples"
    },
    24: {
      focal: "50mm",
      aperture: "f/7,1",
      shutter: "1/400s",
      country: "Naples"
    },
    25: {
      focal: "50mm",
      aperture: "f/2,5",
      shutter: "1/2500s",
      country: "Paris"
    },
    26: {
      focal: "23mm",
      aperture: "f/6,4",
      shutter: "1/320s",
      country: "Paris"
    },
    27: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/2000s",
      country: "Paimpol"
    },
    28: {
      focal: "18mm",
      aperture: "f/2",
      shutter: "1/500s",
      country: "Paris"
    },
    29: {
      focal: "28mm",
      aperture: "f/1",
      shutter: "1/500s",
      country: "Paris"
    },
    30: {
      focal: "18mm",
      aperture: "f/8",
      shutter: "1/125s",
      country: "Paris"
    },
    31: {
      focal: "18mm",
      aperture: "f/16",
      shutter: "1/80s",
      country: "Paimpol"
    },
    32: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/125s",
      country: "Naples"
    },
    33: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/400s",
      country: "Naples"
    },
    34: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/100s",
      country: "Naples"
    },
    35: {
      focal: "23mm",
      aperture: "f/14",
      shutter: "1/1000s",
      country: "Naples"
    },
    36: {
      focal: "23mm",
      aperture: "f/8",
      shutter: "1/1250s",
      country: "Naples"
    },
    37: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1s",
      country: "Naples"
    },
    38: {
      focal: "23mm",
      aperture: "f/5,6",
      shutter: "1/40s",
      country: "Naples"
    },
    39: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/160s",
      country: "Paris"
    },
    40: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/160s",
      country: "Naples"
    },
    41: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/160s",
      country: "Naples"
    },
    42: {
      focal: "50mm",
      aperture: "f/4,5",
      shutter: "1/320s",
      country: "Naples"
    },
    43: {
      focal: "23mm",
      aperture: "f/2,2",
      shutter: "1/160s",
      country: "Naples"
    },
    44: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/640s",
      country: "Naples"
    },
    45: {
      focal: "50mm",
      aperture: "f/16",
      shutter: "1/2000s",
      country: "Naples"
    },
    46: {
      focal: "50mm",
      aperture: "f/16",
      shutter: "1/2000s",
      country: "Naples"
    },
    47: {
      focal: "50mm",
      aperture: "f/3,6",
      shutter: "1/40s",
      country: "Naples"
    },
    48: {
      focal: "50mm",
      aperture: "f/2,8",
      shutter: "1/640s",
      country: "Naples"
    },
    49: {
      focal: "23mm",
      aperture: "f/2,8",
      shutter: "1/250s",
      country: "Naples"
    },
    50: {
      focal: "50mm",
      aperture: "f/5,6",
      shutter: "1/160s",
      country: "Naples"
    },
    51: {
      focal: "23mm",
      aperture: "f/5,6",
      shutter: "1/1000s",
      country: "Naples"
    },
    52: {
      focal: "50mm",
      aperture: "f/2,2",
      shutter: "1/640s",
      country: "Naples"
    },
    53: {
      focal: "23mm",
      aperture: "f/6,4",
      shutter: "1/125s",
      country: "Naples"
    },
    54: {
      focal: "23mm",
      aperture: "f/6,4",
      shutter: "1/125s",
      country: "Naples"
    },
    55: {
      focal: "23mm",
      aperture: "f/6,4",
      shutter: "1/25s",
      country: "Paris"
    },
    56: {
      focal: "23mm",
      aperture: "f/2",
      shutter: "1/640s",
      country: "Paris"
    },
    57: {
      focal: "23mm",
      aperture: "f/5",
      shutter: "1/500s",
      country: "Paris"
    },
    58: {
      focal: "23mm",
      aperture: "f/4",
      shutter: "1/80s",
      country: "Paris"
    },
    59: {
      focal: "23mm",
      aperture: "f/4",
      shutter: "1/500s",
      country: "Naples"
    },
    60: {
      focal: "23mm",
      aperture: "f/5,6",
      shutter: "1/400s",
      country: "Naples"
    },
    61: {
      focal: "23mm",
      aperture: "f/3,6",
      shutter: "1/640s",
      country: "Naples"
    },
    62: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/1250s",
      country: "Naples"
    },
    63: {
      focal: "50mm",
      aperture: "f/3,6",
      shutter: "1/120s",
      country: "Naples"
    },
    64: {
      focal: "23mm",
      aperture: "f/3,6",
      shutter: "1/400s",
      country: "Naples"
    },
    65: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/160s",
      country: "Naples"
    },
    66: {
      focal: "50mm",
      aperture: "f/2,8",
      shutter: "1/500s",
      country: "Naples"
    },
    67: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/800s",
      country: "Naples"
    },
    68: {
      focal: "23mm",
      aperture: "f/2,8",
      shutter: "1/250s",
      country: "Naples"
    },
    69: {
      focal: "23mm",
      aperture: "f/5,6",
      shutter: "1/500s",
      country: "Naples"
    },
    70: {
      focal: "23mm",
      aperture: "f/6,4",
      shutter: "1/320s",
      country: "Naples"
    },
    71: {
      focal: "23mm",
      aperture: "6,4",
      shutter: "1/125s",
      country: "Naples"
    },
    72: {
      focal: "23mm",
      aperture: "f/6,4",
      shutter: "1/125s",
      country: "Naples"
    },
    73: {
      focal: "23mm",
      aperture: "f/16",
      shutter: "1/160s",
      country: "Naples"
    },
    74: {
      focal: "250mm",
      aperture: "f/22",
      shutter: "1/50s",
      country: "Paris"
    }
  };

  const images = [];

  let currentImageIndex = 0;
  let isTicking = false;
  let typingTimeouts = [];

  for (let i = 1; i <= totalImages; i += 1) {
    const number = String(i).padStart(2, "0");
    const metadata = photoMetadata[i] || {};

    images.push({
      thumb: `images/thumbs/photo-${number}.jpg`,
      full: `images/full/photo-${number}.jpg`,
      alt: `Photographie ${number} de Jean-Christophe Parfait`,
      focal: metadata.focal || "",
      aperture: metadata.aperture || "",
      shutter: metadata.shutter || "",
      country: metadata.country || ""
    });
  }

  function createGridGallery() {
    images.forEach((image, index) => {
      const article = document.createElement("article");
      article.classList.add("grid-card");

      const button = document.createElement("button");
      button.classList.add("grid-item");
      button.type = "button";
      button.setAttribute("aria-label", `Ouvrir la photographie ${index + 1}`);

      const img = document.createElement("img");
      img.src = image.thumb;
      img.alt = image.alt;
      img.loading = "lazy";

      const meta = createPhotoMeta(image);

      button.appendChild(img);
      article.appendChild(button);
      article.appendChild(meta);
      gridGallery.appendChild(article);

      button.addEventListener("click", () => {
        openLightbox(index);
      });
    });
  }

  function createPhotoMeta(image) {
    const meta = document.createElement("div");
    meta.classList.add("photo-meta");

    const technical = document.createElement("p");
    technical.classList.add("photo-meta-main");

    const technicalDetails = [
      image.focal,
      image.aperture,
      image.shutter
    ].filter(Boolean);

    technical.textContent = technicalDetails.join(" · ");

    const country = document.createElement("p");
    country.classList.add("photo-meta-secondary");
    country.textContent = image.country;

    if (technical.textContent) {
      meta.appendChild(technical);
    }

    if (country.textContent) {
      meta.appendChild(country);
    }

    return meta;
  }

  function createFlowGallery() {
    images.forEach((image, index) => {
      const figure = document.createElement("figure");
      figure.classList.add("flow-item");

      const img = document.createElement("img");
      img.src = image.full;
      img.alt = image.alt;
      img.loading = "lazy";

      figure.appendChild(img);
      flowGallery.appendChild(figure);

      img.addEventListener("click", () => {
        openLightbox(index);
      });
    });

    updateCenteredFlowImage();

    flowGallery.addEventListener("scroll", () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          updateCenteredFlowImage();
          isTicking = false;
        });

        isTicking = true;
      }
    });
  }

  function showGrid() {
    gridView.classList.add("is-visible");
    flowView.classList.remove("is-visible");

    gridButton.classList.add("is-active");
    flowButton.classList.remove("is-active");
  }

  function showFlow() {
    flowView.classList.add("is-visible");
    gridView.classList.remove("is-visible");

    flowButton.classList.add("is-active");
    gridButton.classList.remove("is-active");

    updateCenteredFlowImage();

    setTimeout(updateCenteredFlowImage, 50);
  }

  function toggleInfoPanel() {
    const isOpen = infoPanel.classList.toggle("is-open");
    infoPanel.setAttribute("aria-hidden", String(!isOpen));
  }

  function closeInfoPanel() {
    infoPanel.classList.remove("is-open");
    infoPanel.setAttribute("aria-hidden", "true");
  }

  function openLightbox(index) {
    currentImageIndex = index;
    const image = images[currentImageIndex];

    const technicalDetails = [
      image.focal,
      image.aperture,
      image.shutter
    ].filter(Boolean);

    const technicalText = technicalDetails.join(" · ");
    const countryText = image.country;

    clearTypingTimeouts();

    lightboxImage.src = image.full;
    lightboxImage.alt = image.alt;

    lightboxMetaMain.textContent = "";
    lightboxMetaSecondary.textContent = "";

    lightbox.classList.remove("is-open");

    requestAnimationFrame(() => {
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
    });

    const startTypingTimeout = setTimeout(() => {
      typeText(lightboxMetaMain, technicalText, 18, () => {
        typeText(lightboxMetaSecondary, countryText, 22);
      });
    }, 470);

    typingTimeouts.push(startTypingTimeout);
  }

  function closeLightbox() {
    clearTypingTimeouts();

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    lightboxImage.src = "";
    lightboxMetaMain.textContent = "";
    lightboxMetaSecondary.textContent = "";

    document.body.classList.remove("no-scroll");
  }

  function typeText(element, text, speed = 20, callback = null) {
    element.textContent = "";

    if (!text) {
      if (callback) {
        callback();
      }

      return;
    }

    let index = 0;

    function typeCharacter() {
      element.textContent += text[index];
      index += 1;

      if (index < text.length) {
        const timeout = setTimeout(typeCharacter, speed);
        typingTimeouts.push(timeout);
      } else if (callback) {
        callback();
      }
    }

    typeCharacter();
  }

  function clearTypingTimeouts() {
    typingTimeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });

    typingTimeouts = [];
  }

  function updateCenteredFlowImage() {
    const flowImages = document.querySelectorAll(".flow-item img");
    const viewportCenter = window.innerWidth / 2;
    const maxDistance = window.innerWidth * 0.55;

    flowImages.forEach((image) => {
      const rect = image.getBoundingClientRect();
      const imageCenter = rect.left + rect.width / 2;
      const distance = Math.abs(viewportCenter - imageCenter);

      const progress = Math.max(0, 1 - distance / maxDistance);

      const scale = 0.82 + progress * 0.28;
      const opacity = 0.45 + progress * 0.55;
      const grayscale = 100 - progress * 100;

      image.style.transform = `scale(${scale})`;
      image.style.opacity = opacity;
      image.style.filter = `grayscale(${grayscale}%)`;
    });
  }

  createGridGallery();
  createFlowGallery();
  showGrid();

  gridButton.addEventListener("click", showGrid);
  flowButton.addEventListener("click", showFlow);

  infoButton.addEventListener("click", toggleInfoPanel);
  infoClose.addEventListener("click", closeInfoPanel);

  lightbox.addEventListener("click", closeLightbox);

  lightboxImage.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeInfoPanel();

      if (lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    }
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(updateCenteredFlowImage);
  });
});
