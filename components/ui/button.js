import React from 'react'

function Button({ customStyle, children, disabled }) {
	return (
		<button
			className={
				`py-2 px-4 border border-slate-700 ${
					!disabled
						? 'hover:border-2'
						: 'bg-gray-200 border-gray-200 cursor-not-allowed'
				} ` + customStyle
			}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
