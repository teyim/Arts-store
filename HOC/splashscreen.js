import LoadingSpinner from './loadingSpinner'

function SplashScreen() {
	return (
		<div className='w-screen h-screen flex justify-center font-Vollkorn'>
			<div className='my-auto text-4xl md:text-5xl font-thin animate-fadein'>
				<LoadingSpinner size='text-4xl' />
				Cultured kid.
			</div>
		</div>
	)
}

export default SplashScreen
