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
        function enableSubmitButton() {

            document.getElementById('send-btn').disabled = false;
    
          }

          function handleSubmit(event) {
    
            event.preventDefault();
    
            const recaptchaResponse = grecaptcha.getResponse();
    
            if (!recaptchaResponse) {
    
              alert('Please complete the reCAPTCHA before submitting the form.');
    
            } else {

            }
          }
    
          document.getElementById('form').addEventListener('submit', handleSubmit);
    
          grecaptcha.ready(function() {
    
            grecaptcha.execute('6LeYASUoAAAAAFFy--WOctrbNa0dEi97OB3y8xKw', {action: 'submit' }).then(enableSubmitButton);
    
          });   
      


   




