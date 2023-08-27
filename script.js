
//Home-page buttons

    // Get reference to the buttons
    const hireMeButton = document.getElementById('hire-me');
    const downloadCVButton = document.getElementById('downloadCV');
  
    // Add event listeners
    hireMeButton.addEventListener('click', () => {
      alert('You clicked the "Hire Me" button!');
      window.location.href = 'https://github.com/Monushia';
    });
  
    downloadCVButton.addEventListener('click', () => {
      alert('You clicked the "Download CV" button!');
      window.location.href = 'https://www.linkedin.com/feed/';
    });



//About-page 


//Skills-page


//Projects-page

const slideContainer = document.querySelector('.slide-show');
const slides = slideContainer.querySelector('.slide');

let currentSlideIndex = 0; 

function showSlide (index) {
  for (const slide of slides){
    slide.style.display = none; 
  }

  slides[index].style.display = 'block'; 
}

function nextSlide () {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex); 
}

showSlide(currentSlideIndex); 

setInterval(nextSlide, 5000); 


//Contact-page 

