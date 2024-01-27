var images = document.querySelectorAll("#slider img");
var currentImage = 0;

function slide() {
  // Add classes to manage slide transition animation
  images[currentImage].classList.remove("slide-in");
  images[currentImage].classList.add("slide-out");

  // Increment current image index
  currentImage = (currentImage + 1) % images.length;

  // Add classes to show next image
  images[currentImage].classList.add("slide-in");
  images[currentImage].classList.remove("slide-out");

  // Reset the current image after the transition ends
  setTimeout(function() {
    images[currentImage].classList.remove("slide-in");
  }, 500);
}

// Start sliding automatically every 3 seconds
setInterval(slide, 3000);


///////fivem

function connectToFivemServer() {
  // Replace "yourserverip" with the IP address or hostname of your FiveM server
  window.location.href = "fivem://connect/lghorba_city.mena-host.online";
}






////discord