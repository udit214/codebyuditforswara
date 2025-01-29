document.addEventListener('DOMContentLoaded', () => {
  const getStartedButton = document.getElementById('getStarted');
  const landingPage = document.querySelector('.landing-page');
  const slideshow = document.querySelector('.slideshow');
  const gallery = document.querySelector('.gallery');
  const slideshowContainer = document.querySelector('.slideshow-container');
  const photosContainer = document.querySelector('.photos');
  const backgroundMusic = document.getElementById('backgroundMusic');

  const images = [
      { src: "./images/1.jpeg", alt: "Wedding Day Bliss", caption: "Wedding Day Bliss" },
      { src: "./images/2.jpeg", alt: "Traveling Together", caption: "Traveling Together" },
      { src: "./images/3.jpeg", alt: "Family Moments", caption: "Family Moments" },
      { src: "./images/4.jpeg", alt: "Anniversary Celebration", caption: "Anniversary Celebration" },
      { src: "./images/5.jpeg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/6.jpeg", alt: "Wedding Day Bliss", caption: "Wedding Day Bliss" },
      { src: "./images/7.jpeg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/8.jpeg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/9.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/10.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/11.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/12.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/13.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/14.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/16.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/17.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/18.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/19.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/20.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/21.jpg", alt: "Cherished Moments", caption: "Cherished Moments" },
      { src: "./images/22.jpg", alt: "Cherished Moments", caption: "Cherished Moments" }
  ];

  images.forEach(image => {
      const slide = document.createElement('div');
      slide.classList.add('slide', 'fade');
      slide.innerHTML = `<img src="${image.src}" alt="${image.alt}"> <p>${image.caption}</p>`;
      slideshowContainer.appendChild(slide);

      const photoCard = document.createElement('div');
      photoCard.classList.add('photo-card');
      photoCard.innerHTML = `<img src="${image.src}" alt="${image.alt}"> <p>${image.caption}</p>`;
      photosContainer.appendChild(photoCard);
  });

  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  const showSlides = () => {
      slides.forEach((slide) => (slide.style.display = "none"));
      slideIndex = (slideIndex + 1) % totalSlides;
      slides[slideIndex].style.display = "block";

      if (slideIndex === totalSlides - 1) {
          setTimeout(() => {
              slideshow.style.display = "none";
              gallery.classList.remove("hidden");
          }, 4000);
      } else {
          setTimeout(showSlides, 4000);
      }
  };

  getStartedButton.addEventListener('click', () => {
      landingPage.style.display = "none";
      slideshow.classList.remove("hidden");
      backgroundMusic.play();
      showSlides();
  });
});
