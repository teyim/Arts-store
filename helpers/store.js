import create from 'zustand'

export const userStore = create((set) => ({
	user: {},
	userData: {},
	login: (payload) => set(() => ({ user: payload })),
	logout: () => set(() => ({ user: {} })),
	setUserData: (payload) => set(() => ({ userData: payload })),
}))
