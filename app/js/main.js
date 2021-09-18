
(() => {
  runSlideshow('.slideshow__gallery', 'li');

  function runSlideshow(slideshowSelector, slidesSelector) {
    const slideshowInterval = 3000;
    const classActive = 'slideshow__gallery__item_active';
    const classPrev = 'slideshow__gallery__item_prev';
    
    let slideShows = document.querySelectorAll(slideshowSelector);
    slideShows.forEach(slideShow => {
      slideShow.slides = slideShow.querySelectorAll(slidesSelector);
      if (slideShow.slides.length < 2) return;
      if (!slideShow.querySelector('.' + classActive));
        slideShow.slides[0].classList.add(classActive);
        slideShow.intervalId = setInterval(() => nextSlide(slideShow), slideshowInterval);
      }); 
      function nextSlide(slideShow) {
        let activeSlide = slideShow.querySelector('.' + classActive);
        slideShow.querySelectorAll('.' + classPrev).forEach(e => e.classList.remove(classPrev));
        activeSlide.classList.replace(classActive, classPrev);
        getNextSibling(activeSlide).classList.add(classActive);
      }
      function getNextSibling(currentSlide) {
        return currentSlide.nextElementSibling || currentSlide.parentElement.children[0];
      }
  }
  function addArrows(slideShow) {
    createArrow('left');
    createArrow('right');
    function createArrow(direction){
      let arrow = document.createElement('span');
      arrow.classList.add('slideshow__gallery__' + direction);
      arrow.classList.addEventListener('mouseenter', slideshowPause);
      arrow.classList.addEventListener('mouseleave', slideshowRun);
      arrow.addEventListener('click', direction === 'left' ? slideshowPrev : slideshowNext);
      slideShow.appendChild(arrow);
    }
    function slideshowPause() {
      
    }
    function slideshowRun() {}
    function slideshowNext() {}
    function slideshowPrev() {}

  function addArrows(slideShow) {
    let pager = document.createElement('p');
    pager.classList.add('slideshow__gallery__pager');
    slideShow.slides.forEach((e, i) => {
      let dot = document.createElement('span');
      dot.slidesNum = i;
      dot.addEventListener('click', slideshowToPage)
      pager.appendChild(dot);
    });
    pager.children[0].classList.add('slideshow__gallery__pager_active');
    pager.addEventListener('', slideshowRun);
    slideShow.appendChild(pager);
    function slideshowToPage() {
    }
  }
}
})();