import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "/plants/snake-plant.jpg",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "/plants/peace-lily.jpg",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 20,
    category: "Succulents",
    image: "/plants/aloe-vera.jpg",
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 22,
    category: "Succulents",
    image: "/plants/jade-plant.jpg",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 35,
    category: "Indoor Plants",
    image: "/plants/areca-palm.jpg",
  },
  {
    id: 6,
    name: "Rose Plant",
    price: 18,
    category: "Flowering Plants",
    image: "/plants/rose.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="200"
              height="200"
            />

            <h3>{product.name}</h3>

            <p>Category: {product.category}</p>

            <p>${product.price}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
