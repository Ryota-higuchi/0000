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

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserver(entries.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll(".animate");

  targets.forEach(target => {
    observer.observe(target);
  });
}