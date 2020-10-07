(() => {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const slidesContainer = document.getElementById("slides");
  const allSlides = document.querySelectorAll(".slides li");
  //by default index starts from 1
  let index = 1;

  nextButton.onclick = () => {
    //if there is no elements index can refer to, make a return;
    if (index >= allSlides.length) {
      return;
    }

    //animate every other element to a certain position every time I click the next button
    gsap.to(allSlides[index], { duration: 0.5, left: 0 });
    index++;
  };

  prevButton.onclick = () => {
    if (index <= 1) {
      return;
    }
    index--;
    gsap.to(allSlides[index], { duration: 0.5, left: 300 });
  };
})();
