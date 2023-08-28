  //Home-page buttons 

        // Get reference to the buttons
        const hireMeButton = document.getElementById("hire-me");
        const downloadCVButton = document.getElementById("downloadCV");
  
        // Add event listeners
        hireMeButton.addEventListener('click', function() {
            window.location.href = 'https://github.com/Monushia';
        }); 
  
        downloadCVButton.addEventListener('click', function () {
            window.location.href = 'https://www.linkedin.com/feed/';
        }); 

        //About-page 


        //Skills-page


        //Projects-page

        const slideContainer = document.querySelector(".slide-show");
        const slides = slideContainer.querySelectorAll(".slide");

        let currentSlideIndex = 0;  

        function showSlide (index) {
            for (const slide of slides){
            slide.style.display = 'none'; 
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

        const sendButton = document.getElementById('send.btn');
        const contactForm = document.getElementById("contact-form"); 

        sendButton.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const subject = document.getElementById('subject').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && subject && email & message) {
            alert('Form submitted successfully!'); 
            contactForm.reset(); 
            } else {
            alert('Please fill in all required fields.'); 
            } 
        });  




