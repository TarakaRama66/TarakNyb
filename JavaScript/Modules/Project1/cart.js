import { getProductById } from "./product.js";
import log from "./utils.js"; // default import

let cart = [];

export function addToCart(productId) {
  const product = getProductById(productId);

  if (product) {
    cart.push(product);
    log(product.name + " added to cart");
  }
}

export function getCartTotal() {
  return cart.reduce((total, item) => total + item.price, 0);
}

export function showCart() {
  return cart;
}