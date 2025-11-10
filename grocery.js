const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];

function total(cart) {
  let total = 0;
  cart.forEach((item) => {          // You could also use (el) for element because it's more 
   let itemPrice = item.price;
    if (itemPrice < 5) {
      itemPrice = itemPrice - (itemPrice * 0.05);
    }
    total += itemPrice * item.quantity;
  });


  return total;
}

console.log("Total:", total(cart));
