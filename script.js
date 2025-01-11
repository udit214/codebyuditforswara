document.getElementById("getStarted").addEventListener("click", function () {
    // Play background music
    const music = document.getElementById("backgroundMusic");
    music.play();
  
    // Hide the landing page and show the gallery
    document.querySelector(".landing-page").style.display = "none";
    document.querySelector(".gallery").style.display = "block";
  });
  