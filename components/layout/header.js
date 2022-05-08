import Image from 'next/image'
import { BsArrowRight, BsCart2 } from 'react-icons/bs'
import { IoShareOutline } from 'react-icons/io5'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'

function Header() {
	const paintings = [
		{
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
			name: 'Wallowing breeze',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'https://cdn11.bigcommerce.com/s-x49po/products/5684/images/14277/52Figure40__50289.1506574078.500.659.JPG?c=2',
			name: 'Wallowing breeze',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'https://www.creativeboom.com/uploads/articles/a4/a41200a5667f1051d5d8f508d4b15ae4393b7f7d_810.jpg',
			name: 'Wallowing breeze',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'http://cdn.shopify.com/s/files/1/0017/9657/1249/products/Landscape-painting-of-tropical-waterfall-painting-on-canvas-by-Karen-Whitworth-Healing-Retreat.jpg?v=1612313935',
			name: 'Wallowing breeze',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
			name: 'Wallowing breeze',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
	]
	return (
		<>
			<header className='font-Vollkorn'>
				<div className='py-6 flex justify-between mt-5 px-10'>
					<div className='md:w-3/5 text-center text-4xl md:text-5xl font-thin'>
						<h2>Featured Paintings</h2>
					</div>
					<div className='flex justify-end '>
						<BsArrowRight className='w-20 h-6 my-auto' />
					</div>
				</div>
				<div className='py-6'>
					<Marquee pauseOnHover gradient={false}>
						{paintings.map((painting) => (
							<div
								className='my-6 flex justify-evenly hover:shadow-xl hover:border hover:border-black'
								key={painting.name}
							>
								<Link href='/arts/1' passHref>
									<a>
										<div className=' px-2 py-2 mx-3 '>
											<div className='w-[300px] h-[300px] relative my-auto '>
												<Image
													src={painting.imageUrl}
													alt='painting'
													className='drop-shadow-lg'
													layout='fill'
													objectFit='contain'
												/>
											</div>
											<div className='my-3'>
												<h3 className='font-bold text-lg '>{painting.name}</h3>
												<h4 className='font-semibold text-gray-800'>
													{painting.artist}
												</h4>
												<h5 className='font-medium text-gray-600 italic'>
													{painting.type}, {painting.year}
												</h5>
												<h5 className='font-extralight text-gray-600 italic'>
													{painting.dimensions}
												</h5>
											</div>
											<div className='p-2 justify-between flex'>
												<div className='my-auto'>
													<h3 className='font-bold text-gray-600 my-auto '></h3>
													{painting.price}
												</div>
												<div className='my-auto flex w-1/4 justify-between'>
													<button className='p-1 bg-gray-200  w-7 h-7'>
														<IoShareOutline className='w-5 h-5 text-black  my-auto' />
													</button>
													<button className='p-1 bg-black  w-7 h-7'>
														<BsCart2 className='w-5 h-5 text-white my-auto' />
													</button>
												</div>
											</div>
										</div>
									</a>
								</Link>
							</div>
						))}
					</Marquee>
				</div>
			</header>
		</>
	)
}

export default Header
