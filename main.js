"use strict";
{
  function play(){

    setTimeout(() => {
      images[currentIndex].classList.remove("current");//1.フォーカス当たっている写真を消す
      currentIndex++;//2 2枚目の画像に移動する
      if(currentIndex >= images.length){
        currentIndex = 0;
      }
      images[currentIndex].classList.add("current");//3.写真を写真を表示

      play();
    },4000);
  }

  const images = document.querySelectorAll(".main-img img");
  let currentIndex = 0;
  play();

}

{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const overlay = document.querySelector(".overlay");
  const works = document.querySelector(".overlay nav .wor");

  open.addEventListener("click", () => {
    open.classList.add("hide");
    overlay.classList.add("show");
  });

  close.addEventListener("click", () => {
    open.classList.remove("hide");
    overlay.classList.remove("show");
  });

  // works.addEventListener("click", () => {
  //   open.classList.remove("hide");
  //   overlay.classList.remove("show");
  // });
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
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll(".animate");

  targets.forEach(target => {
    observer.observe(target);
  });
}