
function changeMode() {
    var selectedMode = document.getElementById('modeSelect').value;
    
    if (selectedMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.style.backgroundImage = "none";  // Clear any background image
        document.body.style.backgroundColor = "black"; // Set dark mode background color
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundImage = "linear-gradient(to right, #000428, #004e92)"; // Light mode gradient
        document.body.style.backgroundColor = ""; // Reset background color
    }
}



function validate(){
    var name=document.myform.name.value;
    var E=document.myform.email.value;
    var atposition=E.indexOf("@");
    var dotposition=E.lastIndexOf(".");
    if(name==" "){
        alert("name cannot be empty");
        return false;
    }else if(name.length<5){
        alert("Enter your full name");
    }else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=E.length){
        alert("Please enter a valid e-mail address ");
        return false;
    }
    else{
        return true;
    }
}
// Get all social links
const socialLinks = document.querySelectorAll('.social-link');

// Define social media URLs
const socialUrls = {
  instagram: 'https://www.instagram.com/ran_zee_taa_/?fbclid=IwY2xjawFHjOJleHRuA2FlbQIxMAABHSRy2H-FKnhXTnARMXKEgvOlKNfLHPocVEb3KrioPuPDlc4AFP4NpKw7LQ_aem_l3LBBnxkZUfOE1_1Ajgr4g',
  facebook: 'https://www.facebook.com/profile.php?id=100067637703022',
  github: 'https://github.com/Ranjita-Rai',
  linkedin: 'https://www.linkedin.com/in/ranjita-rai-28ba1b261'
};

// Add event listener to each social link
socialLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get social media platform from data attribute
    const social = link.getAttribute('data-social');

    // Open social media page in new tab
    window.open(socialUrls[social], '_blank');
  });
});

//for disabling inspect
 document.addEventListener('contextmenu', function(e) {
     e.preventDefault();
   });
  
//for click links of navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

