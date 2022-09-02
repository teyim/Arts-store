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

authSlice = persist(authSlice, { name: 'user' })
userSlice = devtools(userSlice)
cartSlice = devtools(cartSlice)

export const userStore = create(userSlice)
export const authStore = create(authSlice)
export const useCart = create(cartSlice)
