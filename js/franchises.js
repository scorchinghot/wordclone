const franchises = [
  {
    id: 'lorem',
    name: 'Madison, AL',
    title: 'MADISON, ALABAMA',
    description: 'Located in the heart of Madison, Alabama, our Amazing Cajun restaurant brings authentic Cajun flavors to the Tennessee Valley. Enjoy fresh seafood boils in a family-friendly atmosphere.',
    address: 'lorem',
    phone: 'lorem',
    hours: 'Sun – Thu: 11:30am – 8:30pm<br>Fri – Sat: 11:30am – 9:30pm',
    attractions: ['Research Park', 'Madison Square', 'Dublin Park'],
    image: 'assets/images/visitus/im1.png'
  },
];

const menuContainer = document.getElementById('franchise-menu');
const contentContainer = document.getElementById('franchise-content');

franchises.forEach((franchise, index) => {
  const btn = document.createElement('button');
  btn.textContent = franchise.name;
  btn.dataset.id = franchise.id;
  if (index === 0) btn.classList.add('active');
  btn.addEventListener('click', () => {
    document.querySelectorAll('.franchise-menu button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderFranchise(franchise);
  });
  menuContainer.appendChild(btn);
});

renderFranchise(franchises[0]);

function renderFranchise(franchise) {
  contentContainer.innerHTML = `
    <h2 class="franchise-title">${franchise.title}</h2>
    <p class="franchise-description">${franchise.description}</p>
    <div class="franchise-split">
      <div class="franchise-left">
        <p><strong>Address:</strong> ${franchise.address}</p>
        <p><strong>Phone:</strong> ${franchise.phone}</p>
        <p><strong>Hours:</strong><br>${franchise.hours}</p>
      </div>
      <div class="franchise-right">
        <img src="${franchise.image}" alt="${franchise.name}" />
        <div class="franchise-attractions">
          <strong>Nearby Attractions:</strong><br>
          ${franchise.attractions.join(' | ')}
        </div>
      </div>
    </div>
    <div class="franchise-order">
      <a href="#">ORDER NOW</a>
    </div>
  `;
}
