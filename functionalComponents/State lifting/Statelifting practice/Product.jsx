function Product({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>

      <button
        onClick={() =>
          addToCart("Laptop")
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          addToCart("Phone")
        }
      >
        Add Phone
      </button>
    </div>
  );
}

export default Product;