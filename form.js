function showSection(id, event) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".section").forEach(section => section.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    event.target.classList.add("active");
  }
  
  // FOOD
  function addFood() {
    const type = document.getElementById("foodType").value;
    const name = document.getElementById("foodName").value;
    const price = document.getElementById("foodPrice").value;
    const loc = document.getElementById("foodLocation").value;
  
    if (!type || !name || !price || !loc) return alert("Please fill all fields!");
  
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${type} - ${name} - ₹${price} - ${loc}</span>
      <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;
    document.getElementById("foodCart").appendChild(div);
  
    document.getElementById("foodType").value = "";
    document.getElementById("foodName").value = "";
    document.getElementById("foodPrice").value = "";
    document.getElementById("foodLocation").value = "";
  }
  
  // ACCOMMODATION
  function addHotel() {
    const name = document.getElementById("hotelName").value;
    const cost = document.getElementById("hotelCost").value;
    const loc = document.getElementById("hotelLocation").value;
  
    if (!name || !cost || !loc) return alert("Please fill all fields!");
  
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${name} - ₹${cost} - ${loc}</span>
      <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;
    document.getElementById("hotelCart").appendChild(div);
  
    document.getElementById("hotelName").value = "";
    document.getElementById("hotelCost").value = "";
    document.getElementById("hotelLocation").value = "";
  }
  
  // TRAVEL
  function toggleTravelCostField() {
    const type = document.getElementById("travelType").value;
    const costInput = document.getElementById("travelCost");
    costInput.placeholder = (type === "bike" || type === "car") ? "Fuel Cost" : "Ticket Price";
  }
  
  function addTravel() {
    const type = document.getElementById("travelType").value;
    const cost = document.getElementById("travelCost").value;
    const from = document.getElementById("fromPlace").value;
    const to = document.getElementById("toPlace").value;
  
    if (!type || !cost || !from || !to) return alert("Please fill all fields!");
  
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${type} - ₹${cost} - ${from} ➡️ ${to}</span>
      <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;
    document.getElementById("travelCart").appendChild(div);
  
    document.getElementById("travelType").value = "";
    document.getElementById("travelCost").value = "";
    document.getElementById("fromPlace").value = "";
    document.getElementById("toPlace").value = "";
  }
  
  // LOCATION FETCH
  function getLocationAndSetAddress(inputId) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
          const data = await response.json();
          const address = data.display_name;
          document.getElementById(inputId).value = address;
        } catch (error) {
          alert("Failed to fetch address.");
        }
      }, () => {
        alert("Location access denied.");
      });
    } else {
      alert("Geolocation not supported.");
    }
  }
  
  // SUBMIT
  function submitForm() {
    alert("Form submitted successfully!");
  }
  