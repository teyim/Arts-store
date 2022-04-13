import React from 'react'

function Button({ customStyle, children }) {
	return (
		<button
			className={
				customStyle + ` py-2 px-4 border border-slate-700 hover:border-2`
			}
		>
			{children}
		</button>
	)
}

export default Button
