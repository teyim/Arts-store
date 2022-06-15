import { useState } from 'react'
import Login from './login'
import Signup from './signup'

function AuthPage() {
	const [showLogin, setShowLogin] = useState(true)
	return showLogin ? (
		<Login handleClick={() => setShowLogin(!showLogin)} />
	) : (
		<Signup handleClick={() => setShowLogin(!showLogin)} />
	)
}

export default AuthPage
