const btn = document.querySelector("#clickme");
btn.addEventListener("click", (event) => {
  console.log("hello");
});

const maNavBar = document.querySelector('.navbar');
const maBanner = document.querySelector('.banner');


// copy from my WesBos course

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  if (window.scrollY > (maBanner.scrollHeight / 5)) {
    maNavBar.classList.remove("transparentnav")
    maNavBar.classList.add("whitenav")
  } else {
    maNavBar.classList.add("transparentnav")
    maNavBar.classList.remove("whitenav")
  }
  // const isScrolledPast = slideInAt > sliderImage.offsetTop;
  // const isNotScrolledPast = window.scrollY < imageBottom;



  // sliderImages.forEach(sliderImage => {
  //   // half way through the image
  //   const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
  //   // bottom of the image
  //   const imageBottom = sliderImage.offsetTop + sliderImage.height;
  //   const isHalfShown = slideInAt > sliderImage.offsetTop;
  //   const isNotScrolledPast = window.scrollY < imageBottom;
  //   if (isHalfShown && isNotScrolledPast) {
  //     sliderImage.classList.add('active');
  //   } else {
  //     sliderImage.classList.remove('active');
  //   }
  // })
}

window.addEventListener('scroll', debounce(checkSlide));
