const DOMSelectors = {
  name: document.getElementById(""),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

addToCart();

function addToCart() {
  const buttons = document.querySelectorAll("button");
  const totalDisplay = document.getElementById("total");
  let total = 0;


  buttons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const item = items[index];
      total = total + item.price;

      const container = document.querySelector(".cart-total");
      container.insertAdjacentHTML( "beforeend", `<p>Added: ${item.name} (${item.price})</p>`

      )
      console.log(`Added ${item.name} ${total}` );
    });
  });
  
}
