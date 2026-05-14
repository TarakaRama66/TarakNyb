function Cart({ cart }) {
  return (
    <div>
      <h1>Cart Items: {cart.length}</h1>

      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Cart;