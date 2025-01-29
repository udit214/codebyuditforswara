document.addEventListener('DOMContentLoaded', () => {
  const getStartedButton = document.getElementById('getStarted');
  const landingPage = document.querySelector('.landing-page');
  const slideshow = document.querySelector('.slideshow');
  const gallery = document.querySelector('.gallery');
  const slideshowContainer = document.querySelector('.slideshow-container');
  const photosContainer = document.querySelector('.photos');
  const backgroundMusic = document.getElementById('backgroundMusic');

  const images = [
      { src: "./images/1.jpeg", alt: "Wedding Day Bliss", caption: "Happy Anniversary" },
      { src: "./images/2.jpeg", alt: "Traveling Together", caption: "Happy Anniversary" },
      { src: "./images/3.jpeg", alt: "Family Moments", caption: "Happy Anniversary" },
      { src: "./images/4.jpeg", alt: "Anniversary Celebration", caption: "Happy Anniversary" },
      { src: "./images/5.jpeg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/6.jpeg", alt: "Wedding Day Bliss", caption: "Happy Anniversary" },
      { src: "./images/7.jpeg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/8.jpeg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/9.jpg", alt: "Cherished Moments", caption: "CHappy Anniversary" },
      { src: "./images/10.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/11.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/12.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/13.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/14.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/16.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/17.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/18.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/19.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/20.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/21.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/22.jpg", alt: "Cherished Moments", caption: "Happy Anniversary" },
      { src: "./images/23.jpeg", alt: "Cherished Moments", caption: "Happy Anniversary" }
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
