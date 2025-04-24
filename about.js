document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
  
    // Remove the 'active' class from all links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    // Add the 'active' class to the current page link
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href').split("/").pop(); // Get href part (page name)
      if (linkHref === currentPage) {
        link.classList.add('active'); // Add active class to the current page link
      }
    });
  });
  