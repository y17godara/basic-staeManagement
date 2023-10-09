import create from 'zustand';

const useStore = create((set) => ({
    user: "",
    cartCount: 0,
    login: () => set({ user: "John" }),
    logout: () => set({ user: "" }),
    addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
    resetCart: () => set({ cartCount: 0 }),
}));

export default useStore;