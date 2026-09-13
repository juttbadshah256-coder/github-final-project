import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="120"
                height="120"
              />

              <div>
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>

                <button onClick={() => handleDecrease(item)}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => handleIncrease(item)}>
                  +
                </button>

                <br />

                <button onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <h2>
            Total: ${total.toFixed(2)}
          </h2>
        </>
      )}
    </div>
  );
}

export default CartItem;
