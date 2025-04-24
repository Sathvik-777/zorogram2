// === Filtering Trip Sections ===
const filterLinks = document.querySelectorAll(".trip-filter a");
const filters = document.querySelectorAll(".filter");

if (filterLinks.length > 0 && filters.length > 0) {
    filterLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            let targetId = this.getAttribute("href").substring(1);

            // Hide all filter sections first
            filters.forEach(filter => filter.style.display = "none");

            // Show the target section
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    // Show the first filter section by default
    filters.forEach(filter => filter.style.display = "none");
    // Assuming "destination" is the ID of the default section to display
    const defaultSection = document.getElementById("destination");
    if (defaultSection) {
        defaultSection.style.display = "block";
    }
}

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
  