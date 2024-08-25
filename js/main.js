/* eslint-disable no-unused-vars */
// Start writing JavaScript here!
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = carousel.querySelector('.carousel__contents')
const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const dotscontainer = carousel.querySelector('.carousel__dots')

const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})

nextButton.addEventListener('click', () => {
  const currentSlide = carousel.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  const destination = getComputedStyle(nextSlide).left

  contents.style.transform = 'translateX(-' + destination + ')'
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')

  previousButton.removeAttribute('hidden')
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', true)
  }

  //Highlight dot
  const currentDot = dotscontainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', () => {
  const currentSlide = carousel.querySelector('.is-selected')
  const previousSlide = currentSlide.previousElementSibling
  const destination = getComputedStyle(previousSlide).left

  contents.style.transform = 'translateX(-' + destination + ')'
  currentSlide.classList.remove('is-selected')
  previousSlide.classList.add('is-selected')

  nextButton.removeAttribute('hidden')
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute('hidden', true)
  }

  //Highlight dot
  const currentDot = dotscontainer.querySelector('.is-selected')
  const previousDot = currentDot.previousElementSibling
  currentDot.classList.remove('is-selected')
  previousDot.classList.add('is-selected')
})

// dots.forEach(dot => {
//     dot.addEventListener('click', () => {
//         let clickedDotIndex
//         for(let index = 0; index < dots.length; index++) {
//             if(dots[index] === dot) {
//                 clickedDotIndex = index;
//             }
//         }
//         const slideToShow = slides[clickedDotIndex];
//         const destination = getComputedStyle(slideToShow).left;

//         contents.style.left = '-' + destination;

//         console.log(contents.style.left)

//         slides.forEach(slide => {
//             slide.classList.remove('is-selected')
//         })
//         slideToShow.classList.add('is-selected');

//         dots.forEach(d => {
//             d.classList.remove('is-selected')
//         });
//         dot.classList.add('is-selected');

//         //Show / hide buttons
//         if(clickedDotIndex === 0) {
//             previousButton.setAttribute('hidden', true);
//             nextButton.removeAttribute('hidden');
//         } else if(clickedDotIndex === dots.length - 1){
//             previousButton.removeAttribute('hidden');
//             nextButton.setAttribute('hidden', true);
//         } else {
//             previousButton.removeAttribute('hidden');
//             nextButton.removeAttribute('hidden')
//         }
//     })
// })

dotscontainer.addEventListener('click', event => {
    const dot = event.target.closest('button');
    if (dot) {
        const index = Array.from(dotscontainer.children).indexOf(dot);
        const slideToShow = slides[index];
        const destination = getComputedStyle(slideToShow).left;
        console.log(destination)

        // Move the content container to the selected slide's position
        contents.style.transform = 'translateX(-' + destination + ')'

        // Update the selected slide
        slides.forEach(slide => {
            slide.classList.remove('is-selected');
        });
        slideToShow.classList.add('is-selected');

        // Update the selected dot
        dots.forEach(d => {
            d.classList.remove('is-selected');
        });
        dot.classList.add('is-selected');

        // Show or hide navigation buttons based on the selected slide
        if (index === 0) {
            previousButton.setAttribute('hidden', true);
            nextButton.removeAttribute('hidden');
        } else if (index === dots.length - 1) {
            previousButton.removeAttribute('hidden');
            nextButton.setAttribute('hidden', true);
        } else {
            previousButton.removeAttribute('hidden');
            nextButton.removeAttribute('hidden');
        }
    }
});

