import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
        console.log("Clearing cart");
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg justify-between ">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
                {cartItems.length === 0 ? (
                    <h2 className="text-xl font-bold">Your cart is empty</h2>
                ) : (
                    <h2 className="text-xl font-bold">You have {cartItems.length} items in your cart</h2>
                )}
                <ItemList items={cartItems} onItemClick={(item) => console.log(item)} />
            </div>
        </div>
    );
};

export default Cart;