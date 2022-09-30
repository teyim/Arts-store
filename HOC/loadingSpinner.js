import { ImSpinner2 } from 'react-icons/im'

function LoadingSpinner({ size }) {
	return (
		<div className='w-full '>
			<ImSpinner2 className={` ${size} animate-spin mx-auto flex`} />
		</div>
	)
}

export default LoadingSpinner
