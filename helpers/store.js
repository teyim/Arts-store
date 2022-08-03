import create from 'zustand'
import { persist } from 'zustand/middleware'

let store = (set) => ({
	user: {},
	userData: {},
	login: (payload) => set(() => ({ user: payload })),
	logout: () => set(() => ({ user: {} })),
	setUserData: (payload) => set(() => ({ userData: payload })),
})

store = persist(store, { name: 'userData' })
export const userStore = create(store)
