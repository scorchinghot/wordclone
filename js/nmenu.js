const sections = {
  boiler: {
    title: "THE BOILER",
    subtitle: "Our Cajun seafood boil comes with your choice of seafood...",
    leftImg: "assets/images/menu/im1.png",
    rightImgs: ["assets/images/menu/im1.png", "assets/images/menu/im2.png", "assets/images/menu/im2.png", "assets/images/menu/im2.png"],
    boxes: [
      { title: "PICK 2lbs COMBO", subtitle: "Choose 2lbs. and get 1 side" },
      { title: "PICK 3lbs COMBO", subtitle: "Choose 3lbs. and get 2 sides" },
      { title: "PICK 4lbs COMBO", subtitle: "Choose 4lbs. and get 3 sides" },
    ],
    sidesTitle: "",
    sideImgs: [],
    sauceTitle: "",
    sauces: [],
    // here's an example of how to add sauces dynamically
    /*sauces: [
      { type: "img", src: "assets/images/menu/im1.png" },
      { type: "text", content: "BUY NOW" },
      { type: "img", src: "assets/images/menu/im2.png" }
    ],*/ 
    spiceTitle: "",
    spices: []
  },

  fryer: {
    title: "THE FRYER",
    subtitle: "Served with remoulade sauce and your choice of fries.",
    leftImg: "assets/images/menu/im18.png",
    rightImgs: ["assets/images/menu/im19.png", "assets/images/menu/im20.png", "assets/images/menu/im21.png", "assets/images/menu/im22.png", "assets/images/menu/im23.png", "assets/images/menu/im24.png"],
    boxes: [],
    sidesTitle: "",
    sideImgs: [],
    sauceTitle: "",
    sauces: [],
    spiceTitle: "",
    spices: []
  },
  soup: {
    title: "SOUP",
    subtitle: "",
    leftImg: "",
    rightImgs: ["assets/images/menu/im4.png", "assets/images/menu/im3.png"],
    boxes: [],
    sidesTitle: "",
    sideImgs: [],
    sauceTitle: "",
    sauces: [],
    spiceTitle: "",
    spices: []
  },
  sandwiches: {
    title: "Sandwiches",
    subtitle: "Served with your choice of fries.",
    leftImg: "",
    rightImgs: ["assets/images/menu/im5.png", "assets/images/menu/im6.png"],
    boxes: [],
    sidesTitle: "",
    sideImgs: [],
    sauceTitle: "",
    sauces: [],
    spiceTitle: "",
    spices: []
  },
  drinks: {
    title: "Drinks",
    subtitle: "All of our drinks are non-alcoholic.",
    leftImg: "",
    rightImgs: ["assets/images/menu/im25.png", "assets/images/menu/im26.png", "assets/images/menu/im27.png"],
    boxes: [],
    sidesTitle: "",
    sideImgs: ["assets/images/menu/im28.png", "assets/images/menu/im29.png", "assets/images/menu/im30.png", "assets/images/menu/im31.png"],
    sauceTitle: "",
    sauces: [],
    spiceTitle: "",
    spices: []
  },
  dessert: {
    title: "Dessert",
    subtitle: "Indulge in our sweet treats to finish your meal.",
    leftImg: "",
    rightImgs: ["assets/images/menu/im33.png", "assets/images/menu/im34.png"],
    boxes: [],
    sidesTitle: "",
    sideImgs: [],
    sauceTitle: "",
    sauces: [],
    spiceTitle: "",
    spices: []
  },
  // now it's dynamic so you can add more sections like this just copy the structure above and change the content
};

function loadSection(key) {
  const section = sections[key];
  const container = document.getElementById("menuContent");

  container.innerHTML = `
    <h2 class="section-title" style="color: black !important;">${section.title}</h2>
    <p class="subtitle">${section.subtitle}</p>

    <div class="img-split">
      <img class="left-img" src="${section.leftImg}" alt="" style="height: 300px; width: auto;" />
      <div class="right-grid">
        ${section.rightImgs.map(img => `<img src="${img}" alt="">`).join('')}
      </div>
    </div>

    <div class="red-boxes">
      ${section.boxes.map(box => `
        <div class="red-box">
          <h3>${box.title}</h3>
          <p>${box.subtitle}</p>
        </div>
      `).join('')}
    </div>

    ${section.sidesTitle ? `<h3 class="section-title">${section.sidesTitle}</h3>` : ""}
    <div class="img-grid">
      ${section.sideImgs.map(img => `<img src="${img}" alt="">`).join('')}
    </div>

    ${section.sauceTitle ? `<h3 class="section-title">${section.sauceTitle}</h3>` : ""}
    <div id="sauceContainer"></div>

    ${section.spiceTitle ? `<h3 class="section-title">${section.spiceTitle}</h3>` : ""}
    <div class="img-grid">
      ${section.spices.map(img => `<img src="${img}" alt="">`).join('')}
    </div>
  `;

  const sauceContainer = document.getElementById("sauceContainer");
  const sauceSection = document.createElement("div");
  sauceSection.className = "sauce-section";

  section.sauces.forEach((item) => {
    if (item.type === "img") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "Sauce Option";
      img.className = "sauce-img";
      sauceSection.appendChild(img);
    } else if (item.type === "text") {
      const text = document.createElement("div");
      text.textContent = item.content;
      text.className = "sauce-text";
      sauceSection.appendChild(text);
    }
  });

  sauceContainer.appendChild(sauceSection);
}

window.onload = () => loadSection('boiler');

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}