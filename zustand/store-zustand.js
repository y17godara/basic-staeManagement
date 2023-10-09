import { create } from 'zustand';

const useStore = create((set) => ({
    user: "",
    cartCount: 0,
    login: () => set({ user: "John" }),
    logout: () => set({ user: "" }),
    addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
    resetCart: () => set({ cartCount: 0 }),
}));

export default useStore;

export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);
export const useAddToCart = () => useStore((state) => state.addToCart);
export const useResetCart = () => useStore((state) => state.resetCart);
export const useCartCount = () => useStore((state) => state.cartCount);
export const useUser = () => useStore((state) => state.user);