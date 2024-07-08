import React, { createContext } from "react";
import { useState } from "react";

// Create the context
export const CartContext = createContext();

// Create the provider Compponent
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add products to cart items
    const addtoCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product])
    };

    // Function to remove items from the cart
    const removeFromCart = (product) => {
        setCartItems((prevItems) => prevItems.filter(item => item !== product));
    };


    return (
        // Provides Cartcontext to its children component.It sets the value prop to an following objects
        <CartContext.Provider value={{ cartItems, addtoCart, removeFromCart, }}>
            {/* It renders any child components render inside cartprovider */}
            {children}
        </CartContext.Provider>
    );

};
