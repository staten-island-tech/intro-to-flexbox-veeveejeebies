const items = [
  // First row
  {
    name: "Labubu",
    category: "performative",
    price: 74.99,
    image: "img/download.jpg",
    alt: "Labubu",
  },
  {
    name: "The Bob",
    category: "brainrot",
    price: 41.99,
    image: "img/the bob.png",
    alt: "The Bob",
  },
  {
    name: "Wired Earbuds",
    category: "performative",
    price: 29.99,
    image: "img/wireless.jpg",
    alt: "Wired Earbuds",
  },
  {
    name: "Clairo Album",
    category: "performative",
    price: 99.99,
    image: "img/clairo.webp",
    alt: "Clairo Album",
  },


  // Second row
  {
    name: "Mangos",
    category: "brainrot",
    price: 67.41,
    image: "img/mango.webp",
    alt: "Mangos",
  },
  {
    name: "Friend Group",
    category: "brainrot",
    price: 79.99,
    image: "img/Friendgroup.jpg",
    alt: "Friend Group",
  },
  {
    name: "Barbershop Haircut",
    category: "brainrot",
    price: 0.25,
    image: "img/haircut.jpg",
    alt: "Barbershop Haircut",
  },
  {
    name: "Mustard",
    category: "brainrot",
    price: 41.67,
    image: "img/mustard.jpg",
    alt: "Mustard",
  },


  // Third row
  {
    name: "Me and the Divas",
    category: "brainrot",
    price: 50.99,
    image: "img/divas.png",
    alt: "Me and the Divas",
  },
  {
    name: "Dubai Chocolate",
    category: "performative",
    price: 19.99,
    image: "img/dubai.jpg",
    alt: "Dubai Chocolate",
  },
  {
    name: "SCP-067",
    category: "brainrot",
    price: 67.67,
    image: "img/scp.jpeg",
    alt: "SCP-067",
  },
  {
    name: "Normal 67",
    category: "brainrot",
    price: 6.7,
    image: "img/regular.jpg",
    alt: "Normal 67",
  },


  // Fourth row
  {
    name: "Hachiware",
    category: "plushie",
    price: 39.99,
    image: "img/hachiware.webp",
    alt: "Hachiware",
  },
  {
    name: "Usagi",
    category: "plushie",
    price: 39.99,
    image: "img/usagi.png",
    alt: "Usagi",
  },
  {
    name: "Chiikawa",
    category: "plushie",
    price: 39.99,
    image: "img/chiikawa.webp",
    alt: "Chiikawa",
  },
  {
    name: "Nailong",
    category: "plushie",
    price: 19.99,
    image: "img/Nailong.jpeg",
    alt: "Nailong",
  },
  {
    name: "Sonny Angel Flower",
    category: "collectables",
    price: 19.99,
    image: "img/Nailong.jpeg",
    alt: "Nailong",
  },
  {
    name: "Sonny Angel Berry",
    category: "collectables",
    price: 19.99,
    image: "img/Nailong.jpeg",
    alt: "Nailong",
  },
  {
    name: "Smiski Touch Light",
    category: "collectables",
    price: 29.99,
    image: "img/Nailong.jpeg",
    alt: "Nailong",
  },
  {
    name: "Smiski Figurine",
    category: "collectables",
    price: 19.99,
    image: "img/Nailong.jpeg",
    alt: "Nailong",
  },
]
  const parent = document.querySelector(".container");
 document.querySelector(".container").insertAdjacentHTML
items.forEach((item) => {
  parent.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="child">
      <img class="display-img" src="${item.image}" alt="${item.alt}" />
      <h1 class="display-title">${item.name}</h1>
      <h2 class="display-price">$${item.price.toFixed(2)}</h2>
      <button class="addCart">Add To Cart</button>
    </div>
  `
  );
});
