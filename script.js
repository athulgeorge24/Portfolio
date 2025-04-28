// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

function scrollDown() {
    const target = document.getElementById("about").offsetTop;
    const scrollSpeed = 5; // Lower value = slower scrolling
    let currentScroll = window.scrollY;

    const scrollInterval = setInterval(() => {
        if (currentScroll < target) {
            currentScroll += scrollSpeed;
            window.scrollTo(0, currentScroll);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10); // Controls smoothness (lower value = smoother)
}


// Fade-in Effect Fix
window.addEventListener("scroll", function() {
    document.querySelectorAll("section").forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});
// Fade-in Effect When Scrolling (APPLIES TO ALL SECTIONS)
window.addEventListener("scroll", function() {
    document.querySelectorAll("section").forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});
const iamTextElement = document.getElementById("iam-text"); // Ensure this ID exists in HTML
const roles = ["Web Designer", "Programmer", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 50;
const delayBetween = 2000; // Time before erasing

// Find the parent element where typing effect will be placed


// Create full dynamic sentence: "I'm a ..." + typing effect
const fullTextElement = document.createElement("span");
fullTextElement.id = "full-text";
fullTextElement.textContent = "I'm a";

const typingElement = document.createElement("span"); // Auto-typing effect
typingElement.id = "typing";

fullTextElement.appendChild(typingElement); // Attach typing effect after "I'm a "
iamTextElement.appendChild(fullTextElement); // Add everything inside the existing element

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(eraseEffect, delayBetween);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, eraseSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Loop through roles
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start the typing effect
typeEffect();
window.addEventListener("scroll", function () {
    const navBar = document.querySelector("nav");
    const homeSection = document.getElementById("home");

    // Check if we've scrolled past 50% of the home section height
    if (window.scrollY > homeSection.offsetHeight * 0.5) {
        if (!navBar.classList.contains("visible")) {
            navBar.classList.add("visible"); // Show navigation bar
        }
    } else {
        if (navBar.classList.contains("visible")) {
            navBar.classList.remove("visible"); // Hide navigation bar
        }
    }
});
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let subject = document.querySelector('input[name="subject"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Send form data via email or API (Example: EmailJS)
    sendEmail(name, email, subject, message);
});

function sendEmail(name, email, subject, message) {
    // Example using EmailJS (Requires setup at https://www.emailjs.com/)
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }).then(
        () => alert("Message sent successfully!"),
        (error) => alert("Failed to send message. Try again later.")
    );
}
