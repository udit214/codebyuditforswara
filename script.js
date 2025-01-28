document.getElementById("getStarted").addEventListener("click", function () {
  const music = document.getElementById("backgroundMusic");
  music.play();

  document.querySelector(".landing-page").style.display = "none";
  document.querySelector(".slideshow").classList.remove("hidden");

  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  const showSlides = () => {
    slides.forEach((slide) => (slide.style.display = "none"));
    slideIndex = (slideIndex + 1) % totalSlides;
    slides[slideIndex].style.display = "block";

    if (slideIndex === totalSlides - 1) {
      setTimeout(() => {
        document.querySelector(".slideshow").style.display = "none";
        document.querySelector(".gallery").classList.remove("hidden");
      }, 4000); 
    } else {
      setTimeout(showSlides, 4000); // Transition every 4 seconds
    }
  };

  showSlides();
});
