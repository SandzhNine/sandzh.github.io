document.addEventListener("DOMContentLoaded", function() {
    const slideContainer = document.getElementById("slide-container");
    const images = document.querySelectorAll(".gallery-item img");
  
    // Apply random slide direction for each image
    images.forEach(function(image) {
      const randomDirection = Math.random() < 0.5 ? "slide-left" : "slide-right";
      image.classList.add(randomDirection);
    });
  
    // Trigger slide animation after a delay
    setTimeout(function() {
      slideContainer.classList.add("fade");
      images.forEach(function(image) {
        image.classList.add("fade");
      });
    }, 1000);
  });