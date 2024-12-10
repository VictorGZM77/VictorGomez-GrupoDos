
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const useCartStore = create(
    persist(
      (set) => ({
        items: [], 
        addToCart: (product) =>
          set((state) => ({
            items: [...state.items, product],
          })),
        removeFromCart: (id) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          })),
        clearCart: () => set({ items: [] }),
      }),
      {
        name: 'cart-storage', 
        getStorage: () => localStorage, 
      }
    )
  );
  
  export default useCartStore;
  