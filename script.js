function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 4); // Set the initial view to the United States

// Add the map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add the farm location markers
var farmLocations = [
  [37.7749, -122.4194], // San Francisco
  [40.7128, -74.0060], // New York
  [34.0522, -118.2437], // Los Angeles
  [47.6062, -122.3321], // Seattle
  [39.9526, -75.1652] // Philadelphia
];

farmLocations.forEach(function(location) {
  L.marker(location).addTo(map);
});
