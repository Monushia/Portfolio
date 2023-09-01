  //Hamburger menu 

        const hamMenu = document.getElementById("mobile-menu");
        const navBar = document.querySelector(".nav-bar"); 

        hamMenu.addEventListener('click', function() {
            navBar.classList.toggle("active"); 
        });  

   
  //Home page buttons functionality 

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


    //Skills-page - 3D image slider




    //Projects image slider 

        const slideContainer = document.querySelector(".slide-show");
        const slides = slideContainer.querySelectorAll(".slide");

        let currentSlideIndex = 0; 

        function showSlide (index) { 
            for (const slide of slides){
            slide.style.display = 'none';  
        };  

        slides[index].style.display = 'block'; 
        }; 

        function nextSlide () {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex); 
        }; 

        showSlide(currentSlideIndex); 

        setInterval(nextSlide, 5000);      


    //Contact-validation 

        const contactForm = document.getElementById("contact-form");
        const nameInput = document.getElementById("name"); 
        const subjectInput = document.getElementById("subject");
        const emailInput = document.getElementById("email"); 
        const messageInput = document.getElementById("message"); 
        const sendButton = document.getElementById("send.btn"); 

        contactForm.addEventListener('submit', function (event) {  
            event.preventDefault(); 

            const nameValue = nameInput.value.trim(); 
            const subjectValue = subjectInput.value.trim(); 
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();  

            if (nameValue === '') {
                alert('Please enter your name. '); 
                nameInput.focus(); 
                return; 
            };  

            if (subjectValue === '') {
                alert('Please enter a subject. ');
                subjectInput.focus(); 
                return; 
            };

            if (emailValue === '') {
                alert('Please enter your email. '); 
                emailInput.focus();  
                return; 

            } else if (!isValidEmail(emailValue)) {
                alert('Please enter valid email address. ');
                emailInput.focus(); 
                return; 

            }; 

            if (messageValue === '') {
                alert('Please enter the message. ');
                messageInput.focus(); 
                return; 
            };

            //If all validations pass the form will submit 

            alert ('Form submitted successfully! '); 
            contactForm.reset(); 

        }); 


        function isValidEmail(email) {
            //Basic email validation using regular expression
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            return emailPattern.test(email); 
        };  
   




