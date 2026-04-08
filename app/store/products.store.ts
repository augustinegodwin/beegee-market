import { create } from 'zustand'



type ProductState = {
  // Data State
  products: Product[];
  selectedProduct: Product | null; // For your Product Modal
  searchQuery: boolean;
  isLoading: boolean;

  // Setters
  setProducts: (products: Product[]) => void;
  setSelectedProduct: (product: Product | null) => void;
  setSearchQuery: (query: boolean) => void;
  setLoading: (loading: boolean) => void;

  // Actions
  clearProducts: () => void;
  clearSearch: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  // Initial State
  products: [],
  selectedProduct: null,
  searchQuery: false,
  isLoading: false,
    
  // Setters
  setProducts: (products) => set({ products }),
  
  setSelectedProduct: (product) => set({ selectedProduct: product }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setLoading: (loading) => set({ isLoading: loading }),

  // Logic for Unsetting/Clearing
  clearProducts: () => set({ products: [] }),

  clearSearch: () => set({ searchQuery: '' }),
}))