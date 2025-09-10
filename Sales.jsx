import React, { useState } from "react";

const productsList = [
  { id: 1, name: "Sprite Can", price: 10 },
  { id: 2, name: "Burger", price: 30 },
  { id: 3, name: "Pizza", price: 100 },
  { id: 4, name: "Fries", price: 25 },
];

const Sales = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    if (!selectedProduct || quantity < 1) {
      setMessage("⚠️ Please select a product and valid quantity.");
      return;
    }

    const productObj = productsList.find((p) => p.name === selectedProduct);
    const existingItem = cart.find((item) => item.id === productObj.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productObj.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...productObj, quantity }]);
    }

    setSelectedProduct("");
    setQuantity(1);
    setMessage("");
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handlePlaceOrder = () => {
    if (!customerName || cart.length === 0) {
      setMessage("⚠️ Please enter customer name and add items to cart.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setMessage(
      `✅ Order placed by ${customerName}. Total: M${total}. Items: ${cart
        .map((i) => `${i.quantity} x ${i.name}`)
        .join(", ")}`
    );

    setCustomerName("");
    setCart([]);
  };

  return (
    <div className="sales-container">
      <h1>🛒 Make a Sale</h1>

      
      <div className="form-group">
        <label>Product</label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">-- Select Product --</option>
          {productsList.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name} - M{p.price}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>

      <button className="btn-primary" onClick={handleAddToCart}>
        ➕ Add to Cart
      </button>

     
      <h2>🛍️ Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">No items added yet.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>M{item.price}</td>
                <td>M{item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    ✖ Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
                Total:
              </td>
              <td colSpan="2" style={{ fontWeight: "bold" }}>
                M{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <button className="btn-success" onClick={handlePlaceOrder}>
        ✅ Place Order
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Sales;
