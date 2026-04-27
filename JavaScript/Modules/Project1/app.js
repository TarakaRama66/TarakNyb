import { addToCart, getCartTotal, showCart } from "./cart.js";
import { formatCurrency } from "./utils.js";

// Add products
addToCart(1);
addToCart(3);
addToCart(4);

// Show cart
console.log("Cart Items:", showCart());

// Show total
console.log("Total:", formatCurrency(getCartTotal()));