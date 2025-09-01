(function () {
  const slides = document.getElementById("slides-comp");
  const indicatorsContainer = document.getElementById("indicators-comp");
  const totalSlides = slides.children.length;
  let currentIndex = 0;
  let intervalId;

  // Crear indicadores (cubos blancos)
  for (let i = 0; i < totalSlides; i++) {
    const cube = document.createElement("span");
    cube.classList.add("carousel-comp__indicator");
    if (i === 0) cube.classList.add("active");
    cube.dataset.index = i;
    indicatorsContainer.appendChild(cube);

    cube.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
      resetInterval();
    });
  }

  function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll(".carousel-comp__indicator").forEach((ind, i) => {
      ind.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 7000);
  }

  intervalId = setInterval(nextSlide, 7000);
})();
