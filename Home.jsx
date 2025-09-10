import React from 'react';
import { useNavigate } from 'react-router-dom';
import Burger1 from '../assets/Burger1.jpeg'
import Burger2 from '../assets/Burgar2.jpeg'
import Burger3 from '../assets/Burgar3.jpeg'
import CanCoke from '../assets/CanCoke.jpeg'
import CokeSmall from '../assets/CokeSmall.jpeg'
import Fries1 from '../assets/Fries1.jpeg'
import Fries2 from '../assets/Fries2.jpeg'
import Fries3 from '../assets/Fries3.jpeg'
import greenandfish from '../assets/greensandfish.jpg'
import pizza from '../assets/pizza.jpg'
import Sprite2L from '../assets/Sprite2L.jpeg'
import SpriteCan from '../assets/SpriteCan.jpeg'
import SpriteSmall from '../assets/SpriteSmall.jpeg'


const products = [
        {
            id:1,
            image: SpriteCan,
            name: "Sprite Can",
            description: "175 ml",
            category: "Drink",
            price: 10,
            quantity: 25
        },
        {
            id:2,
            image: Sprite2L,
            name: "Sprite",
            description: "2L",
            category: "Drink",
            price: 30,
            quantity: 25
        },
        {
            id:3,
            image: SpriteSmall,
            name:  "Small bottle",
            description: "75 ml",
            category: "Drink",
            price: 10,
            quantity: 25
        },
        {
            id:4,
            image: Burger3,
            name: "Burger",
            description: "Small with chips",
            category: "Meal",
            price: 30,
            quantity: 25
        },
        {
            id:5, 
            image: Burger2,
            name: "Burger",
            description: "Cheese with Ham",
            category: "Meal",
            price: 45,
            quantity: 25
        },
        {
            id:6, 
            image: Burger3,
            name: "Burger",
            description: "Cheese, Ham, Tomato and Lettuce",
            category: "Meal",
            price: 50,
            quantity: 25
        },
        {
            id:7, 
            image: Fries3,
            name: "Chips",
            description: "Small",
            category: "Meal",
            price: 20,
            quantity: 25
        },
        {
            id:8, 
            image: Fries2,
            name: "Fries",
            description: "Medium",
            category: "Meal",
            price: 25,
            quantity: 25
        },
        {
            id:9, 
            image: Fries1,
            name: "StillFries",
            description: "Large",
            category: "Meal",
            price: 35,
            quantity: 25
        },
        {
            id:10, 
            image: pizza,
            name: "Pizza",
            description: "Bacon, Ham, Cheese, Chicken, Beef",
            category: "Meal",
            price: 100,
            quantity: 25
        },
        {
            id:11,
            image: greenandfish, 
            name: "Greens",
            description: "Lettuce, Fish, Lemon",
            category: "Meal",
            price: 40,
            quantity: 25
        },
        {
            id:12, 
            image: CanCoke,
            name: "CanCoke",
            description: "175 ml",
            category: "Drink",
            price: 10,
            quantity: 25
        },
        {
            id:13,
            image: CokeSmall, 
            name: "Coke",
            description: "2L",
            category: "Drink",
            price:  10,
            quantity: 25
        }
       
];

const Home = () => {
  const navigate = useNavigate();

  const handleNewSale = () => {
    navigate('/sales');
  };

  const handleInventory = () => {
    navigate('/inventory');
  };

  return (
    <div className="home-wrapper">
      <div className="all">
        <h2>Welcome to Wings Cafe POS & Inventory System</h2>

        <div className="customer-buttons">
          <button onClick={handleNewSale}>Make a Sale</button>
          <button onClick={handleInventory}>View Inventory</button>
        </div>

      <div className="gallery">

        
        {products.map(({ id, name, image, description, price, quantity }) => (
          <div
            key={id}
            className={`gallery-item ${quantity === 0 ? 'out-of-stock' : ''}`}
          >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p><strong>Price:</strong> M{price}</p>
            <p>{quantity > 0 ? `In stock: ${quantity}` : 'Out of Stock'}</p>
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Home;
