import create from 'zustand'
import { persist, devtools } from 'zustand/middleware'

let authSlice = (set) => ({
	isUserAuth: false,
	setIsUserAuth: (payload) => set(() => ({ isUserAuth: payload })),
})

let userSlice = (set) => ({
	userData: {},
	setUserData: (payload) => set(() => ({ userData: payload })),
})

let cartSlice = (set) => ({
	cartItems: [],
	addCartItem: (art) =>
		set((state) => ({ cartItems: [...state.cartItems, art] })),
	removeCartITem: (artId) =>
		set((state) => ({
			cartItems: state.cartItems.filter((painting) => painting.id !== artId),
		})),
})

let artSlice = (set) => ({
	arts: [],
	isLoading: false,
	setIsLoading: (loadingState) => set({ isLoading: loadingState }),
	setArts: (newArts) => set({ arts: newArts }),
})

authSlice = persist(authSlice, { name: 'user' })
userSlice = devtools(userSlice)
cartSlice = devtools(cartSlice)

export const useStore = create(userSlice)
export const useAuthStore = create(authSlice)
export const useCart = create(cartSlice)
export const useArtsStore = create(artSlice)
