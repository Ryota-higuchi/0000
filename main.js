"use strict";

{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const overlay = document.querySelector(".overlay");

  open.addEventListener("click", () => {
    open.classList.add("hide");
    overlay.classList.add("show");
  });

  close.addEventListener("click", () => {
    open.classList.remove("hide");
    overlay.classList.remove("show");
  });
}

{
  const images = document.querySelectorAll(".main img");
  let currentIndex = 0;

  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove("current");
      currentIndex++;
      if(currentIndex >= images.length) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add("current");

      play();
    },4000);
  }

  play();
}