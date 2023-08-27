// Smooth scroll to different target sections
//store the a href in an array to add a smooth scrolling effect

document.querySelectorAll('a[href=^"#"]').forEach (anchor => {
    anchor.addEventListener ('click', function (e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute(href)).scrollIntoView({
            behavior: "smooth"
        });
    });
}); 

//Home-page buttons

document.addEventListener('DOMContentLoaded', function() {
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
  });  

            



//About-page 




//Skills-page




//Projects-page




//Contact-page 















