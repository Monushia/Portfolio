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

const hire = document.getElementById("hire-me")
const download = document.getElementById("downloadCV")

hire.addEventListener('click', function () {
    window.location.href = "https://github.com/Monushia"; 
}); 

download.addEventListener('click', function() {
    window.location.href = "https://www.linkedin.com/feed/"; 
});   



//About-page 




//Skills-page




//Projects-page




//Contact-page 















