import React from "react";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/navbar";
import OrderSummary from "../components/ordersummary";

export const Cart = ({ cart, setCart }) => {
  const decrementProductQuantity = (e, id) => {
    e.preventDefault();
    const productIndex = cart.findIndex((item) => item.product_id === id);
    if (cart[productIndex].quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity--;
      setCart(updatedCart);
    }
  };

  const incrementProductQuantity = (e, id) => {
    e.preventDefault();
    const productIndex = cart.findIndex((item) => item.product_id === id);
    const updatedCart = [...cart];
    updatedCart[productIndex].quantity++;
    setCart(updatedCart);
  };
  const removeItem = (e, id) => {
    const productIndex = cart.findIndex((item) => item.product_id === id);
    if (productIndex !== -1) {
      // If the product exists, update the quantity
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    }
  };

  return (
    <>
      <Navbar />
      <div className="py-4 bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen">
        <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 grid-flow-row-dense ">
          {/* ------------ Shopping Cart ------------- */}
          {cart.map((product, i) => (
            <ItemCard
              key={i}
              quantity={product.quantity}
              id={product.product_id}
              decrementProductQuantity={decrementProductQuantity}
              incrementProductQuantity={incrementProductQuantity}
              removeItem={removeItem}
            />
          ))}

          {/* ------------ Order Summary ------------- */}
          <OrderSummary cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;
