const sections = document.querySelectorAll('section');

// Add event listener for smooth scrolling with animation
window.addEventListener('scroll', () => {
  sections.forEach((section, index) => {
    const active = window.scrollY >= section.offsetTop;
    section.classList.toggle('active', active);
  });
});

// Add parallax effect to specific sections (optional)
const parallaxItems = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  parallaxItems.forEach((item) => {
    const speed = item.dataset.speed || 0.5;
    const offset = window.scrollY * speed;
    item.style.transform = `translateY(${offset}px)`;
  });
});

// Add click events for navigation (optional)
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    window.scrollTo({
      top: sections[index].offsetTop,
      behavior: 'smooth',
    });
  });
});

// Add form validation and submission handling (optional)
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  // Validate form fields here
  // ...

  // Submit form if valid
  // ...
  event.preventDefault();
});

// Customize and add more JavaScript functionality as needed
