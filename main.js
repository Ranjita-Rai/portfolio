// Function to handle Dark/Light Mode toggle using the button icon
function changeMode() {
    const body = document.getElementById('body-main');
    const toggleButton = document.getElementById('mode-toggle');
    const icon = toggleButton.querySelector('i');

    // Check if the body currently has the light-mode class
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        // Switch to Dark Mode
        body.classList.remove('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        toggleButton.setAttribute('aria-label', 'Toggle Light Mode');
    } else {
        // Switch to Light Mode
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        toggleButton.setAttribute('aria-label', 'Toggle Dark Mode');
    }
}

// Attach the mode toggle function to the button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', changeMode);
    }
});


// Client-side form validation and custom message display
function validate(){
    const name = document.myform.name.value.trim();
    const email = document.myform.email.value.trim();
    const message = document.myform.message.value.trim();
    const formMessage = document.getElementById('form-message');
    
    // Helper function to show message
    const showMessage = (msg, isError = true) => {
        formMessage.textContent = msg;
        formMessage.classList.remove('hidden');
        if (isError) {
            formMessage.style.backgroundColor = '#ff00001a';
            formMessage.style.borderColor = '#ff0000';
            formMessage.style.color = '#ff0000';
        } else {
            formMessage.style.backgroundColor = '#00e0ff1a';
            formMessage.style.borderColor = '#00e0ff';
            formMessage.style.color = '#00e0ff';
        }
    };

    // 1. Name validation
    if(name === "" || name.length < 5){
        showMessage("Please enter your full name (at least 5 characters).");
        return false;
    } 
    
    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        showMessage("Please enter a valid e-mail address.");
        return false;
    }

    // 3. Message validation
    if (message.length < 10) {
        showMessage("Your message must be at least 10 characters long.");
        return false;
    }

    showMessage("Message sent successfully!", false);

    // Prevent default form submission (comment this out if you integrate a real backend endpoint)
    return false;
}

// // Disabling right-click context menu
// document.addEventListener('contextmenu', function(e) {
//      e.preventDefault();
// });
  
// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Only handle internal section links starting with #
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
});



// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});
