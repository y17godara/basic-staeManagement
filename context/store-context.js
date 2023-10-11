import React, { useState, createContext, useContext } from 'react';

const useStore = () => {
    const [user, setUser] = useState("");
    const [cartCount, setCartCount] = useState(0);

    // const login = () => setUser("John");
    // const logout = () => setUser("");
    // const addToCart = () => setCartCount(cartCount + 1);
    // const resetCart = () => setCartCount(0);

    return {
        user,
        cartCount,
        login: () => setUser("John"),
        logout: () => setUser(""),
        addToCart: () => setCartCount(cartCount + 1),
        resetCart: () => setCartCount(0),
    };
}

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    <StoreContext.Provider value={useStore()}>
        {children}
    </StoreContext.Provider>
}

export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;
export const useAddToCart = () => useContext(StoreContext).addToCart;
export const useResetCart = () => useContext(StoreContext).resetCart;
export const useUser = () => useContext(StoreContext).user;
export const useCartCount = () => useContext(StoreContext).cartCount;