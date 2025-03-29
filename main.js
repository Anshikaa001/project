// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
      
    });
  });
});

// Order button click handler
const orderBtn = document.getElementById('order-btn');
orderBtn.addEventListener('click', () => {
  alert('Thank you for your interest! Our online ordering system is coming soon.');
});

// Add animation to menu items when they come into view
const menuItems = document.querySelectorAll('.menu-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

menuItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'all 0.5s ease';
  observer.observe(item);
});

// Add animation to sections when they come into view
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  if (section.id !== 'home') {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    sectionObserver.observe(section);
  }
});