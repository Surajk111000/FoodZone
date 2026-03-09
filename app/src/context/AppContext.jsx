import React, { createContext, useState, useCallback } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  // Add to cart
  const addToCart = useCallback((food) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === food.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === food.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...food, quantity: 1 }];
    });
  }, []);

  // Remove from cart
  const removeFromCart = useCallback((foodId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== foodId));
  }, []);

  // Update cart quantity
  const updateCartQuantity = useCallback((foodId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(foodId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === foodId ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromCart]);

  // Clear cart
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Add to wishlist
  const addToWishlist = useCallback((food) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.find(item => item.id === food.id);
      if (exists) {
        return prevWishlist.filter(item => item.id !== food.id);
      }
      return [...prevWishlist, food];
    });
  }, []);

  // Check if in wishlist
  const isInWishlist = useCallback((foodId) => {
    return wishlist.some(item => item.id === foodId);
  }, [wishlist]);

  // Get cart total
  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }, [cart]);

  // Get cart item count
  const getCartCount = useCallback(() => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  }, [cart]);

  const value = {
    cart,
    wishlist,
    showCart,
    showWishlist,
    selectedFood,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    isInWishlist,
    getCartTotal,
    getCartCount,
    setShowCart,
    setShowWishlist,
    setSelectedFood,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
