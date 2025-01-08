document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');


  const revealOnScroll = () => {
    const viewportHeight = window.innerHeight;

    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportHeight - 100) {
        el.classList.add('active');
      }
    });
  };

 
  const updateNavLinks = () => {
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSectionId)) {
        link.classList.add('active');
      }
    });
  };

 
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

 
  window.addEventListener('scroll', () => {
    revealOnScroll();
    updateNavLinks();
  });

  revealOnScroll();
  updateNavLinks();
});


document.addEventListener('DOMContentLoaded', () => {
 
  const createFallingStars = () => {
    const starCount = 100;
    const container = document.querySelector('.container');

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const leftPosition = Math.random() * window.innerWidth;
      const delay = Math.random() * 5;

      star.style.left = `${leftPosition}px`;
      star.style.animationDelay = `${delay}s`;

      container.appendChild(star);
    }
  };

  createFallingStars();

  const reveals = document.querySelectorAll('.reveal');
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  const revealOnScroll = () => {
    const viewportHeight = window.innerHeight;

    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportHeight - 100) {
        el.classList.add('active');
      }
    });
  };

  
  window.addEventListener('scroll', () => {
    revealOnScroll();
    updateNavLinks();
  });

 
  revealOnScroll();
  updateNavLinks();
});


function typeWriter(element, text, speed) {
  let i = 0;
  const interval = setInterval(function() {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, speed);
}


document.addEventListener('DOMContentLoaded', function() {
  const typewriterElement = document.getElementById('typewriter');
  const text = "Welcome."; 
  const speed = 200; 
  typeWriter(typewriterElement, text, speed);
});