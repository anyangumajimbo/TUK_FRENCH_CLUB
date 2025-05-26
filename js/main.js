// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  const menuLinks = document.querySelectorAll('#navLinks a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Set current year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('emailInput');
      const email = emailInput.value.trim();
      
      // Basic email validation
      if (!email) {
        alert('Please enter your email address.');
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Simulate API call
      const subscribeBtn = document.getElementById('subscribeBtn');
      subscribeBtn.disabled = true;
      subscribeBtn.textContent = 'Subscribing...';
      
      setTimeout(() => {
        alert('You have been successfully subscribed to our newsletter!');
        emailInput.value = '';
        subscribeBtn.disabled = false;
        subscribeBtn.textContent = 'Subscribe';
      }, 1500);
    });
  }

  // Handle lightbox for gallery images (if gallery page exists)
  setupGalleryLightbox();
  
  // Handle contact form submission (if contact page exists)
  setupContactForm();
  
  // Handle membership form submission (if membership page exists)
  setupMembershipForm();
});

// Function to handle gallery lightbox
function setupGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  
  if (galleryItems.length === 0) return;
  
  // Create lightbox elements if they don't exist
  let lightbox = document.querySelector('.lightbox');
  
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const lightboxClose = document.createElement('div');
    lightboxClose.className = 'lightbox-close';
    lightboxClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    
    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'lightbox-image';
    
    const lightboxCaption = document.createElement('div');
    lightboxCaption.className = 'lightbox-caption';
    
    lightbox.appendChild(lightboxClose);
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(lightboxCaption);
    document.body.appendChild(lightbox);
    
    // Close lightbox when clicking close button
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
    
    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
  
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  
  // Add click event to each gallery image
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add('active');
    });
  });
}



// Handle FAQ accordion (if it exists)
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isHidden = answer.style.display === 'none' || !answer.style.display;
      
      // Hide all answers
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.style.display = 'none';
      });
      
      // Show this answer if it was hidden
      if (isHidden) {
        answer.style.display = 'block';
      }
    });
  });
});


// About Section
// Dropdown toggle for mobile
document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});


// Alumni Section
// Add this JavaScript to your main.js file
document.addEventListener('DOMContentLoaded', function() {
  // Alumni Filter Functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const alumniCards = document.querySelectorAll('.alumni-card');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Filter alumni cards
        alumniCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Load More Alumni Functionality
  const loadMoreBtn = document.getElementById('loadMoreAlumni');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      const hiddenAlumni = document.querySelectorAll('.alumni-card:nth-child(n+7):not([style="display: none;"]');
      
      hiddenAlumni.forEach((alumni, index) => {
        if (index < 3) { // Show 3 more at a time
          alumni.style.display = 'flex';
        }
      });
      
      // Hide button if no more alumni to show
      if (document.querySelectorAll('.alumni-card[style="display: none;"]').length === 0) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }
});