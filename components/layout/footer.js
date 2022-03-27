import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/assets/logo-cultured-kid.svg'

function Footer() {
	const a = 8
	return (
		<>
			<footer className='p-4 bg-white sm:p-6 dark:bg-gray-800 font-Vollkorn mt-10 text-lg'>
				<div className='md:flex md:justify-evenly p-6'>
					<div className='mb-6 md:mb-0 w-2/5'>
						<a href='https://flowbite.com' className='flex items-center'>
							<Link passHref href='/'>
								<a>
									<Image src={Logo} alt='logo'></Image>
								</a>
							</Link>
						</a>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
						<div>
							<h2 className='mb-6  font-semibold text-gray-900 uppercase dark:text-white'>
								Explore
							</h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								<li className='mb-2'>
									<a href='https://flowbite.com' className='hover:underline'>
										Paintings
									</a>
								</li>
								<li className='my-2'>
									<a
										href='https://tailwindcss.com/'
										className='hover:underline'
									>
										Sculptures
									</a>
								</li>
								<li className='my-2'>
									<a
										href='https://tailwindcss.com/'
										className='hover:underline'
									>
										Drawings
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6  font-semibold text-gray-900 uppercase dark:text-white'>
								Follow us
							</h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								<li className='mb-4'>
									<a
										href='https://github.com/themesberg/flowbite'
										className='hover:underline '
									>
										Github
									</a>
								</li>
								<li>
									<a
										href='https://discord.gg/4eeurUVvTy'
										className='hover:underline'
									>
										Discord
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6  font-semibold text-gray-900 uppercase dark:text-white'>
								Legal
							</h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								<li className='mb-4'>
									<a href='#' className='hover:underline'>
										Privacy Policy
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Terms &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='flex sm:items-center justify-center'>
					<span className=' text-gray-500 sm:text-center dark:text-gray-400'>
						© 2022{' '}
						<a href='https://flowbite.com' className='hover:underline'>
							Flowbite™
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</footer>
		</>
	)
}

export default Footer
