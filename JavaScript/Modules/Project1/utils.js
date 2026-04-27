// Named export
export function formatCurrency(amount) {
  return "₹" + amount.toLocaleString();
}

// Default export
export default function log(message) {
  console.log("LOG:", message);
}