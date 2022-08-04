import create from 'zustand'
import { persist, devtools } from 'zustand/middleware'

let authSlice = (set) => ({
	isUserAuth: false,
	setIsUserAuth: (payload) => set(() => ({ isUserAuth: payload })),
})

let user = (set) => ({
	userData: {},
	setUserData: (payload) => set(() => ({ userData: payload })),
})

authSlice = persist(authSlice, { name: 'user' })
user = devtools(user)

export const userStore = create(user)
export const authStore = create(authSlice)
