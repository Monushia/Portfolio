            // JavaScript to toggle the menu
            const menuToggle = document.getElementById("menu-toggle");
            const navBar = document.getElementById("nav-bar");

            menuToggle.addEventListener("click", () => {
                navBar.classList.toggle("open");
                const navLinks = document.querySelector(".nav-bar.open ul");
                if (navLinks.style.display === "flex") {
                    navLinks.style.display = "none";
                } else {
                    navLinks.style.display = "flex";
                }
            });

            // Close the menu when a link is clicked
            const navLinks = document.querySelectorAll(".nav-bar a");

            navLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    if (window.innerWidth <= 390) {
                        navBar.classList.remove("open");
                        const navLinks = document.querySelector(".nav-bar.open ul");
                        navLinks.style.display = "none";
                    }
                });
            });

            // Toggle the menu when the window is resized
            window.addEventListener("resize", () => {
                if (window.innerWidth > 390) {
                    navBar.classList.remove("open");
                    const navLinks = document.querySelector(".nav-bar.open ul");
                    navLinks.style.display = "flex";
                }
            }); 

            // Open the menu initially on page load if the viewport width is less than or equal to 390px
            window.addEventListener("load", () => {
                if (window.innerWidth <= 390) {
                    navBar.classList.add("open");
                    const navLinks = document.querySelector(".nav-bar.open ul");
                    navLinks.style.display = "flex";
                }
            });


        
            //Home page buttons functionality 

            // Get reference to the buttons
            const hireMeButton = document.getElementById("hire-me");
            const downloadCVButton = document.getElementById("downloadCV");
    
            // Add event listeners
            hireMeButton.addEventListener('click', function() {
                window.location.href = '#contact'; 
            }); 
    
            downloadCVButton.addEventListener('click', function () {
                window.location.href = 'https://monushiaz.netlify.app/Monushia%20Zimri%20Resume%202023%20(2).pdf';  
            });                       

     
                        
            // Contact-validation

            const contactForm = document.getElementById("contact-form");
            const nameInput = document.getElementById("name");
            const subjectInput = document.getElementById("subject");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");
            const sendButton = document.getElementById("send-btn");

            contactForm.addEventListener('submit', function (event) {
                event.preventDefault();

                const nameValue = nameInput.value.trim();
                const subjectValue = subjectInput.value.trim();
                const emailValue = emailInput.value.trim();
                const messageValue = messageInput.value.trim();
                const recaptchaResponse = grecaptcha.getResponse(); // Get reCAPTCHA response

                if (nameValue === '' || subjectValue === '' || emailValue === '' || messageValue === '') {
                    alert('Please fill out all fields.');
                    return;
                }

                if (!isValidEmail(emailValue)) {
                    alert('Please enter a valid email address.');
                    emailInput.focus();
                    return;
                }

                if (!recaptchaResponse) {
                    alert('Please complete the reCAPTCHA before submitting the form.');
                    return;
                }

                // If all validations pass including reCAPTCHA, the form will submit
                alert('Email submitted successfully!');
                contactForm.reset();
            });

            function isValidEmail(email) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }



            // Recaptcha validation       
  
            function enableSubmitButton() {
                document.getElementById('submit').disabled = false;
            }

            function handleSubmit(event) {
                event.preventDefault();

                const recaptchaResponse = grecaptcha.getResponse();

                if (!recaptchaResponse) {
                alert('Please complete the reCAPTCHA before submitting the form.');
                } else {
                // reCAPTCHA is completed, you can send the email here
                sendMail();
                }
            }

            document.getElementById('form').addEventListener('submit', handleSubmit);

            grecaptcha.ready(function() {
                grecaptcha.execute('6Le9FCUoAAAAAM1AZpsXGU1OIC3c_CM7eZd5iquE', { action: 'submit' }).then(enableSubmitButton);
            }); 
                    

        //Emailjs-validation  

        function sendMail() {
            var params = {
                name: document.getElementById ("name").value, 
                email: document.getElementById("email").value,
                message: document.getElementById("message").value, 
            }; 

            const serviceID = "service_v5ku1me"; 
            const templateID = "template_4by0cjg";  

            emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("name").value=""; 
                document.getElementById("email").value="";
                document.getElementById("message").value=""; 
                console.log(res); 
            })

            .catch((err) => {
                console.error(err); 
                alert("An error occurred while sending the email. Please try again"); 
            });  
        };   



