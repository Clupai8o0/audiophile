import { create } from "zustand";

interface CartState {
	products: string[];
	addProduct: (product: string) => void;
	removeProduct: (product: string) => void;
	clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
	products: [],
	addProduct: (product) =>
		set((state) => ({ products: [...state.products, product] })),
	removeProduct: (product) =>
		set((state) => ({
			products: (() => {
				// remove the first instance of the product
				const previewProducts = [...state.products];
				previewProducts.splice(previewProducts.indexOf(product), 1);
				return previewProducts;
			})(),
		})),
	clearCart: () => set({ products: [] }),
}));
