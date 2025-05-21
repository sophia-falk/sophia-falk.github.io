// Adding the visual effect for descriptors INTRO

document.addEventListener("DOMContentLoaded", function () {
  const roles = document.querySelectorAll(".intro-role");
  const mask = document.querySelector(".role-mask");
  const rolesContainer = document.querySelector(".roles-container");
  let currentIndex = 0;
  let isAnimating = false;

  // Set initial active role
  roles[0].classList.add("active");

  // Function to handle the animation and role transition
  function changeRole() {
    if (isAnimating) return;
    isAnimating = true;

    // First phase: mask covers the text (black bar grows from left to right)
    mask.classList.add("animating");

    // At halfway point (when text is fully covered), change the active role
    setTimeout(() => {
      // Hide current role
      roles[currentIndex].classList.remove("active");

      // Move to next role
      currentIndex = (currentIndex + 1) % roles.length;

      // Show new role
      roles[currentIndex].classList.add("active");

      // Second phase: mask reveals the new text (black bar shrinks from right to left)
      mask.classList.remove("animating");
      mask.classList.add("reversing");
    }, 1500); // Half of the 3s animation time

    // When animation is complete, reset for next time
    setTimeout(() => {
      mask.classList.remove("reversing");
      isAnimating = false;
    }, 3100); // Just after animation completes
  }

  // Trigger on hover
  rolesContainer.addEventListener("mouseenter", function () {
    if (!isAnimating) {
      changeRole();
    }
  });

  // Optional: Automatically cycle roles every few seconds
  // setInterval(() => {
  //   if (!isAnimating) {
  //     changeRole();
  //   }
  // }, 5000);
});

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDropdown = document.querySelector('.mobile-dropdown');
  
  if (mobileMenuToggle && mobileDropdown) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileDropdown.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-dropdown a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileDropdown.classList.remove('active');
      });
    });
  }
});
