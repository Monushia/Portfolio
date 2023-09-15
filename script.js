  //Hamburger menu 

        const mobileMenu = document.getElementById("mobile-menu");
        const navBar = document.querySelector(".nav-bar ul");

        mobileMenu.addEventListener("click", () => {
            navBar.classList.toggle("open");  
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


    //Contact-validation  

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

            alert ('Email submitted successfully! '); 
            contactForm.reset(); 

        });    


        function isValidEmail(email) {
            //Basic email validation using regular expression
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            return emailPattern.test(email); 
        };   

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
        
        
        //Recaptcha validation

        const express = require('express'); 
        const bodyParser = require('body-parser');
        const fetch = require('node-fetch');
        
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        
        app.post('/submit-form', async (req, res) => {
          const { recaptchaToken } = req.body;
        
          // Verify the reCAPTCHA token with Google
          const secretKey = '6LeYASUoAAAAAJwRjwFKmT2xGRToTEztd-G6SEA3'; 
          const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
        
          const response = await fetch(verificationUrl, { method: 'POST' });
          const data = await response.json();
        
          if (data.success) {
            // reCAPTCHA verification passed; process the form submission
            // Your email sending logic should go here
            res.send('Form submitted successfully!');
          } else {
            // reCAPTCHA verification failed
            res.status(400).send('reCAPTCHA verification failed.');
          }
        });
        
        app.listen(3000, () => {
          console.log('Server is running on port 3000');
        });  
        
      


   




