document.addEventListener("DOMContentLoaded", function () {
    // === Typing Effect for Quotes ===
    const quotes = [
        "Plan. Explore. Share.",
        "Discover. Capture. Inspire.",
        "Organize. Document. Connect.",
        "Prepare. Experience. Engage.",
        "Chart. Photograph. Bond.",
        "Schedule. Snap. Share."
    ];

    let currentQuoteIndex = 0;
    const quoteElement = document.getElementById("quote");

    function typeQuote(index = 0) {
        const currentQuote = quotes[currentQuoteIndex];

        if (index < currentQuote.length) {
            quoteElement.textContent += currentQuote.charAt(index);
            setTimeout(() => typeQuote(index + 1), 100);
        } else {
            setTimeout(() => {
                quoteElement.textContent = "";
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                typeQuote();
            }, 2000);
        }
    }

    if (quoteElement) {
        typeQuote();
    }

    // === Start Button Modal ===
    document.getElementById('startButton').addEventListener('click', function () {
        document.getElementById('backgroundContainer').classList.remove('hidden');
        this.style.display = 'none';
    });

    document.getElementById('planButton').addEventListener('click', function () {
        const tripName = document.getElementById('tripName').value.trim();
        const numberOfDays = parseInt(document.getElementById('numberOfDays').value, 10);
        const tripTitle = document.getElementById('tripTitle');
        const tripFormContainer = document.getElementById('tripFormContainer');
        const tripContainer = document.getElementById('tripContainer');
        const dayButtonsContainer = document.getElementById('dayButtonsContainer');

        if (!tripName || isNaN(numberOfDays) || numberOfDays <= 0) {
            alert('Please enter a valid trip name and number of days.');
            return;
        }

        tripFormContainer.classList.add('hidden');
        tripTitle.textContent = `Trip: ${tripName} (${numberOfDays} days)`;
        tripTitle.classList.remove('hidden');
        tripContainer.classList.remove('hidden');
        dayButtonsContainer.innerHTML = '';

        for (let i = 1; i <= numberOfDays; i++) {
            const dayBox = document.createElement('div');
            dayBox.className = 'day-box';
            dayBox.textContent = `Day ${i}`;
            dayBox.addEventListener('click', function () {
                alert(`Plan for Day ${i}`);
            });
            dayButtonsContainer.appendChild(dayBox);
        }
    });

    document.getElementById('resetButton').addEventListener('click', function () {
        document.getElementById('tripTitle').textContent = '';
        document.getElementById('tripTitle').classList.add('hidden');
        document.getElementById('tripContainer').classList.add('hidden');
        document.getElementById('dayButtonsContainer').innerHTML = '';
        document.getElementById('tripFormContainer').classList.remove('hidden');
        document.getElementById('tripName').value = '';
        document.getElementById('numberOfDays').value = '';
    });

    document.getElementById('closeButton').addEventListener('click', function () {
        document.getElementById('backgroundContainer').classList.add('hidden');
        document.getElementById('startButton').style.display = 'block';
    });

    // === Filtering Trip Sections ===
    const filterLinks = document.querySelectorAll(".trip-filter a");
    const filters = document.querySelectorAll(".filter");

    if (filterLinks.length > 0 && filters.length > 0) {
        filterLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                filters.forEach(filter => filter.style.display = "none");
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = "block";
                }
            });
        });

        filters.forEach(filter => filter.style.display = "none");
        const defaultSection = document.getElementById("destination");
        if (defaultSection) {
            defaultSection.style.display = "block";
        }
    }
});
// Script to highlight the active page dynamically
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
  
    const navLinks = document.querySelectorAll('.nav-link');  // Get all navbar links
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href').split("/").pop();  // Get href part (page name)
      if (linkHref === currentPage) {
        link.classList.add('active'); // Add active class to the current page link
      }
    });
  });
  