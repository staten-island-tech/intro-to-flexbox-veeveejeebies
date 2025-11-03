const style = document.createElement("style");
style.textContent = `
.title {
  background-color: rgb(216, 155, 240);
  text-align: center;
  width: 1000px;
  margin: 100px auto;
  padding: 0px;
  font-size: 50px;
  font-family: "Kranky", serif;
}

h1 {
  font-family: "Sigmar", sans-serif;
  padding-bottom: 10px;
  font-size: 60px;
  color: rgb(59, 5, 5);
  margin-top: 0;
}

h2 {
  font-family: "Sigmar", sans-serif;
  padding-bottom: 10px;
  font-size: 30px;
  color: rgb(59, 5, 5);
  margin-top: 0;
}

.child {
  border: 5px solid rgb(213, 162, 234);
  width: 22%;
  height: auto;
  text-align: center;
  background-color: rgb(251, 204, 255);
  margin: 15px;
  border-radius: 20px;
  display: inline-block;
  vertical-align: top;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
}

.addCart {
  background-color: rgba(189, 199, 244, 1);
  border-width: 5px;
  margin: 10px auto;
  font-size: 16px;
}

html, body {
  text-align: center;
  box-sizing: border-box;
  font-family: "Sigmar", sans-serif;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
}

.container {
  width: 100%;
  text-align: center;
}

.cart-total {
  border: 1px solid #f4beff;
  padding: 15px;
  margin-top: 20px;
  background-color: #f4d1ff;
}
.cart-total h1 {
  margin-bottom: 10px;
}
.cart-total p {
  margin-bottom: 5px;
  font-size: large;
}
`;
document.head.appendChild(style);
const items = [
  // First row
  {
    name: "Labubu",
    category: "aesthetic",
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
    category: "aesthetic",
    price: 29.99,
    image: "img/wireless.jpg",
    alt: "Wired Earbuds",
  },
  {
    name: "Clairo Album",
    category: "aesthetic",
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
    category: "brainrot",
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
    category: "aesthetic",
    price: 39.99,
    image: "img/hachiware.webp",
    alt: "Hachiware",
  },
  {
    name: "Usagi",
    category: "aesthetic",
    price: 39.99,
    image: "img/usagi.png",
    alt: "Usagi",
  },
  {
    name: "Chiikawa",
    category: "aesthetic",
    price: 39.99,
    image: "img/chiikawa.webp",
    alt: "Chiikawa",
  },
  {
    name: "Nailong",
    category: "aesthetic",
    price: 19.99,
    image: "img/Nailong.jpeg",
    alt: "Nailong",
  },
  {
    name: "Sonny Angel Flower",
    category: "aesthetic",
    price: 19.99,
    image: "img/sonny flower.webp",
    alt: "Nailong",
  },
  {
    name: "Sonny Angel Berry",
    category: "aesthetic",
    price: 19.99,
    image: "img/sonny strawberries.webp",
    alt: "Nailong",
  },
  {
    name: "Smiski Touch Light",
    category: "aesthetic",
    price: 29.99,
    image: "img/smiskilamp.jpg",
    alt: "Nailong",
  },
  {
    name: "Smiski Figurine",
    category: "aesthetic",
    price: 19.99,
    image: "img/smiski figuriene.webp",
    alt: "Nailong",
  },

];

const container = document.querySelector(".container");

// DOM manipulation thing that makes it so you don't need html
items.forEach((item) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="child">
<img src="${item.image}">
<h1>${item.name}</h1>
<h2>$${item.price}</h2>
<button class="addCart">Add To Cart</button>
 </div>
  `
  );
}
);

function addToCart() {
  const buttons = document.querySelectorAll(".addCart");
  const totalDisplay = document.getElementById("total");
  const cartContainer = document.querySelector(".cart-total");
  let total = 0;

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", function () { //item click makes it add the price and then yaeah
      const item = items[index];
      total += item.price;
      totalDisplay.textContent = `${total}`; // show the total
      cartContainer.insertAdjacentHTML(
        "beforeend",
        `<p>Added: ${item.name} (${item.price})</p>` //displays item price and name
      );
    });
  });
}
addToCart();





