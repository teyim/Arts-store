import '../styles/globals.css'
import Layout from 'HOC/layout'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'helpers/firebase/clientApp'
import { userStore, authStore } from 'helpers/store'
import { getDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from 'helpers/firebase/clientApp'
import SplashScreen from 'HOC/splashscreen'

function useAuth() {
	const isUserAuth = authStore((state) => state.isUserAuth)
	const [loading, setLoading] = useState(true)
	const setIsUserAuth = authStore((state) => state.setIsUserAuth)
	const setUserData = userStore((state) => state.setUserData)

	useEffect(() => {
		onAuthStateChanged(auth, async (userData) => {
			if (userData) {
				//return firebase data
				const userDocument = await getDoc(doc(db, 'users', userData?.uid))
				if (userDocument.exists()) {
					setIsUserAuth(true)
					setUserData(userDocument.data())
				}
				setLoading(false)
			} else {
				setIsUserAuth(false)
				setUserData({})
				setLoading(false)
			}
		})
	}, [isUserAuth])

	return { loading }
}

function MyApp({ Component, pageProps }) {
	const auth = useAuth()

	return (
		<>
			{!auth.loading ? (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			) : (
				<SplashScreen />
			)}
		</>
	)
}

export default MyApp
