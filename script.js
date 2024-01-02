let cartItems = [];
let total = 0;

function addToCart(productName) {
  const productPrice = getProductPrice(productName);
  cartItems.push({ name: productName, price: productPrice });
  total += productPrice;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  // Clear the current items in the cart
  cartList.innerHTML = "";

  // Populate the cart with the updated items
  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
  });

  // Update the total
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function getProductPrice(productName) {
  // Replace this with actual pricing logic
  if (productName === "AirPods Pro 6") {
    return 199.99;
  } else if (productName === "Power Bank") {
    return 29.99;
  } else {
    return 0;
  }
}
