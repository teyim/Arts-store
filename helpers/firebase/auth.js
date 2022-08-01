import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth, db } from './clientApp'
import { getDoc, doc, setDoc } from 'firebase/firestore'

export const signup = async (userData) => {
	try {
		const res = await createUserWithEmailAndPassword(
			auth,
			userData.email,
			userData.password
		)
		const user = res.user
		if (userData.userType === 'artist') {
			//create user document in db
			await setDoc(doc(db, 'users', user.uid), {
				firstName: userData.firstName,
				lastName: userData.lastName,
				userType: userData.userType,
				category: userData.category,
				followers: 0,
				address: '',
				imageurl: '',
			})
		} else {
			await setDoc(doc(db, 'users', user.uid), {
				firstName: userData.firstName,
				lastName: userData.lastName,
				userType: userData.userType,
				email: userData.email,
				saves: [],
				following: [],
				address: '',
				imageurl: '',
			})
		}

		//return firebase data
		const userDocument = await getDoc(doc(db, 'users', user.uid))
		if (userDocument.exists()) {
			return userDocument.data()
		}
		return { errorMessage: 'Error creating account' }
	} catch (error) {
		return { errorMessage: error?.code }
	}
}

export const login = async (userData) => {
	try {
		const res = await signInWithEmailAndPassword(
			auth,
			userData.email,
			userData.password
		)
		const user = res.user

		//return firebase data
		const userDocument = await getDoc(doc(db, 'users', user.uid))
		if (userDocument.exists()) {
			return userDocument.data()
		}
		return { errorMessage: 'Error logining in' }
	} catch (error) {
		return { errorMessage: error.code }
	}
}
