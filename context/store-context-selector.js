import React, { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const useStore = () => {
    const [user, setUser] = useState("");
    const [cartCount, setCartCount] = useState(0);

    return {
        user,
        cartCount,
        login: () => useCallback(setUser("John"), []),
        logout: () => useCallback(setUser(""), []),
        addToCart: () => useCallback(setCartCount(cartCount + 1), [cartCount]),
        resetCart: () => useCallback(setCartCount(0), [cartCount]),
    };
}

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    <StoreContext.Provider value={useStore()}>
        {children}
    </StoreContext.Provider>
}

export const useLogin = () => useContextSelector(StoreContext, (state) => state.login);
export const useLogout = () => useContextSelector(StoreContext, (state) => state.logout);
export const useAddToCart = () => useContextSelector(StoreContext, (state) => state.addToCart);
export const useResetCart = () => useContextSelector(StoreContext, (state) => state.resetCart);
export const useUser = () => useContextSelector(StoreContext, (state) => state.user);
export const useCartCount = () => useContextSelector(StoreContext, (state) => state.cartCount);