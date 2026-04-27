// Named exports

export const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Samsungs25 Ultra", price: 150000},
  { id: 5, name: "IQ z900", price: 500 },
  { id: 6, name: "Iphone16", price: 70000 },
  { id: 7, name: "Vivo y25", price: 35000 },
  { id: 8, name: "Redmi 12 5g", price: 20000 }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}