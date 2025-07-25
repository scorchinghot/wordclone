const map = L.map('map').setView([33.7488, -84.3881], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const stateCenters = {
  "georgia": [33.7488, -84.3881],
  "texas": [29.7604, -95.3698],
  "california": [37.7749, -122.4194],
  "new york": [40.7128, -74.0060],
  "new jersey": [40.0583, -74.4057],
  "rhode island": [41.5801, -71.4774],
  "alabama": [32.3792, -86.3077]
};

const locationsData = [
  {
    state: "Texas",
    locations: [
      {
        name: "format",
        storeNumber: "is",
        address: "like this",
        cityStateZip: "and then",
        phone: "type this",
        hours: "Sun-Thu: 11:30 AM - 10:00 PM, Fri-Sat: 11:30 AM - 11:00 PM",
        viewUrl: "visitus.html",
        orderUrl: "and you're done",
        latlng: [32.9865, -96.8890]
      }
    ]
  },
];

function generateLocations() {
  const container = document.getElementById("locations-container");

  locationsData.forEach(group => {
    const section = document.createElement("div");
    section.className = "state-section";
    section.dataset.state = group.state;

    const header = document.createElement("div");
    header.className = "state-header";
    header.innerHTML = `${group.state.toUpperCase()} <span>${group.locations.length} location${group.locations.length > 1 ? 's' : ''} ▼</span>`;
    header.onclick = () => toggleSection(header);

    const content = document.createElement("div");
    content.className = "locations";
    content.style.display = "none";
    if (group.locations.length > 1) content.classList.add("grid");

    group.locations.forEach(loc => {
      const card = document.createElement("div");
      card.className = "location-card";
      card.innerHTML = `
        <h4>${loc.name} <small>Store #${loc.storeNumber}</small></h4>
        <p>${loc.address}<br>${loc.cityStateZip}<br>${loc.phone}</p>
        <p>${loc.hours}</p>
        <a class="btn" href="${loc.viewUrl}">VISIT US</a>
        <a class="btn btn-outline" href="${loc.orderUrl}">ORDER NOW</a>
      `;
      content.appendChild(card);

      if (loc.latlng) {
        L.marker(loc.latlng).bindPopup(loc.name).addTo(map);
      }
    });

    section.appendChild(header);
    section.appendChild(content);
    container.appendChild(section);
  });
}

function toggleSection(header) {
  const section = header.parentElement;
  const content = section.querySelector('.locations');
  const arrow = header.querySelector('span');

  const isOpen = content.classList.contains('open');

  if (isOpen) {
    content.classList.remove('open');
    arrow.innerHTML = arrow.innerHTML.replace('▲', '▼');
  } else {
    content.classList.add('open');
    arrow.innerHTML = arrow.innerHTML.replace('▼', '▲');
  }
}

function setupSearch() {
  const input = document.getElementById('stateSearch');
  if (!input) return;

  input.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();
    let found = false;

    document.querySelectorAll('.state-section').forEach(section => {
      const state = section.dataset.state.toLowerCase();
      const match = state.includes(query);
      section.style.display = match ? 'block' : 'none';

      if (!found && query && state === query && stateCenters[state]) {
        map.setView(stateCenters[state], 11);
        found = true;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateLocations();
  setupSearch();
});

document.querySelectorAll('.locations').forEach(loc => {
  const cards = loc.querySelectorAll('.location-card');
  if (cards.length > 1) {
    loc.classList.add('grid');
  } else {
    loc.classList.remove('grid');
  }
});


