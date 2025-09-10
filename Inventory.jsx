import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "Sprite Can", description: "175 ml", category: "Drink", price: 10, quantity: 25 },
  { id: 2, name: "Sprite", description: "2L", category: "Drink", price: 30, quantity: 25 },
  { id: 3, name: "Small bottle", description: "75 ml", category: "Drink", price: 10, quantity: 25 },
  { id: 4, name: "Burger", description: "Small with chips", category: "Meal", price: 30, quantity: 25 },
  { id: 5, name: "Burger", description: "Cheese with Ham", category: "Meal", price: 45, quantity: 25 },
  { id: 6, name: "Burger", description: "Cheese, Ham, Tomato and Lettuce", category: "Meal", price: 50, quantity: 25 },
  { id: 7, name: "Chips", description: "Small", category: "Meal", price: 20, quantity: 25 },
  { id: 8, name: "Fries", description: "Medium", category: "Meal", price: 25, quantity: 25 },
  { id: 9, name: "StillFries", description: "Large", category: "Meal", price: 35, quantity: 25 },
  { id: 10, name: "Pizza", description: "Bacon, Ham, Cheese, Chicken, Beef", category: "Meal", price: 100, quantity: 25 },
  { id: 11, name: "Greens", description: "Lettuce, Fish, Lemon", category: "Meal", price: 40, quantity: 25 },
  { id: 12, name: "CanCoke", description: "175 ml", category: "Drink", price: 10, quantity: 25 },
  { id: 13, name: "Coke", description: "2L", category: "Drink", price: 10, quantity: 25 },
];

const Inventory = () => {
  const [products, setProducts] = useState(initialProducts);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: ""
  });
  const [adding, setAdding] = useState(false); // track if adding new product

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      quantity: product.quantity
    });
  };

  const handleSave = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, ...formData, price: Number(formData.price), quantity: Number(formData.quantity) }
          : p
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleAdd = () => {
    setAdding(true);
    setFormData({ name: "", description: "", category: "", price: "", quantity: "" });
  };

  const handleAddSave = () => {
    const newProduct = {
      id: products.length + 1,
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity)
    };
    setProducts([...products, newProduct]);
    setAdding(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mt-5">
      
      {!adding && (
        <button className="btn btn-primary mb-3" onClick={handleAdd}>
          Add Product
        </button>
      )}

      
      {adding && (
        <tr>
          <td>#</td>
          <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
          <td><input type="text" name="description" value={formData.description} onChange={handleChange} /></td>
          <td><input type="text" name="category" value={formData.category} onChange={handleChange} /></td>
          <td><input type="number" name="price" value={formData.price} onChange={handleChange} /></td>
          <td><input type="number" name="quantity" value={formData.quantity} onChange={handleChange} /></td>
          <td>
            <button className="btn btn-success btn-sm" onClick={handleAddSave}>Save</button>
            <button className="btn btn-secondary btn-sm ms-2" onClick={() => setAdding(false)}>Cancel</button>
          </td>
        </tr>
      )}

      <table className="table">
        <thead className="tab-head">
          <tr className="head-row">
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tab-body">
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {editingId === product.id ? (
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="text" name="description" value={formData.description} onChange={handleChange} />
                ) : (
                  product.description
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="text" name="category" value={formData.category} onChange={handleChange} />
                ) : (
                  product.category
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="number" name="price" value={formData.price} onChange={handleChange} />
                ) : (
                  `M${product.price}`
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
                ) : (
                  product.quantity
                )}
              </td>
              <td>
                {editingId === product.id ? (
                  <button className="btn btn-success btn-sm" onClick={() => handleSave(product.id)}>Save</button>
                ) : (
                  <button className="btn btn-primary btn-sm" onClick={() => handleEdit(product)}>Edit</button>
                )}
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
