import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import FilterTab from 'components/ui/filtertab'
import Select from 'react-select'
import Link from 'next/link'
import Image from 'next/image'
import { IoShareOutline } from 'react-icons/io5'
import { BsCart2 } from 'react-icons/bs'
import { useRouter } from 'next/router'

function ArtSearch() {
	const router = useRouter()
	const { query } = router.query
	console.log(query)
	const paintings = [
		{
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
			name: 'Wallowing breeze',
			artist: 'Hettie Richardsakjkjakd',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'https://cdn11.bigcommerce.com/s-x49po/products/5684/images/14277/52Figure40__50289.1506574078.500.659.JPG?c=2',
			name: 'Wallowing bkakdjalkd',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'https://www.creativeboom.com/uploads/articles/a4/a41200a5667f1051d5d8f508d4b15ae4393b7f7d_810.jpg',
			name: 'Wallowing breezeakjkald',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'http://cdn.shopify.com/s/files/1/0017/9657/1249/products/Landscape-painting-of-tropical-waterfall-painting-on-canvas-by-Karen-Whitworth-Healing-Retreat.jpg?v=1612313935',
			name: 'Wallowing breezeakjjda',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
			name: 'Wallowing breezehjahd',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'https://cdn11.bigcommerce.com/s-x49po/products/5684/images/14277/52Figure40__50289.1506574078.500.659.JPG?c=2',
			name: 'Wallowing bkakdjalkd',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'https://www.creativeboom.com/uploads/articles/a4/a41200a5667f1051d5d8f508d4b15ae4393b7f7d_810.jpg',
			name: 'Wallowing breezeakjkald',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'http://cdn.shopify.com/s/files/1/0017/9657/1249/products/Landscape-painting-of-tropical-waterfall-painting-on-canvas-by-Karen-Whitworth-Healing-Retreat.jpg?v=1612313935',
			name: 'Wallowing breezeakjjda',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
		{
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
			name: 'Wallowing breezehjahd',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: '$620',
		},
	]
	const categoryOptions = [
		{ value: 'all', label: 'All' },
		{ value: 'painting', label: 'Painting' },
		{ value: 'sculpting', label: 'Sculpting' },
		{ value: 'drawing', label: 'Drawing' },
		{ value: 'digitalArt', label: 'Digital Arts' },
		{ value: 'photography', label: 'Photography' },
	]

	return (
		<div>
			<div className='bg-gray-200 py-14 px-10 '>
				<h1 className='text-center text-4xl md:text-5xl '>
					{query ? `Result for "${query}" in Arts` : `Original arts for sale`}
				</h1>
				<h2 className=' md:w-2/3 text-center my-3 text-2xl font-thin mx-auto text-gray-700 '>
					Art for the soul. Art for life. Art for your home. Cultured kid
					connects passionate artists with art lovers around the world.
				</h2>
			</div>
			<div className='bg-gray-100 py-8 px-8 border md:flex sticky top-0 z-10'>
				<h1 className='font-thin text-2xl'>Applied filters:</h1>
				<div className='text-lg mx-2 flex overflow-x-scroll  '>
					<div className=' flex border shadow-sm border-gray-500  hover:border-black cursor-pointer mx-1'>
						<h2 className='font-extralight mx-2 '>Filter name</h2>
						<div className='font-extralight border-l border-gray-500 px-2 hover:bg-gray-400 hover:border-gray-400 '>
							<AiOutlineClose className='w-4 h-4 inline mx-auto my-auto' />
						</div>
					</div>
					<div className='flex border shadow-sm border-gray-500  hover:border-black cursor-pointer mx-1'>
						<h2 className='font-extralight mx-2'>Filter name</h2>
						<div className='font-extralight border-l border-gray-500 px-2 hover:bg-gray-400 hover:border-gray-400'>
							<AiOutlineClose className='w-4 h-4 inline mx-auto my-auto' />
						</div>
					</div>
					<div className='flex border shadow-sm border-gray-500  hover:border-black cursor-pointer mx-1'>
						<h2 className='font-extralight mx-2'>Filter name</h2>
						<div className='font-extralight border-l border-gray-500 px-2 hover:bg-gray-400 hover:border-gray-400'>
							<AiOutlineClose className='w-4 h-4 inline mx-auto my-auto' />
						</div>
					</div>
				</div>
			</div>
			<div className='md:flex border-2 '>
				<div className='md:w-[30%] md:flex  py-6 px-10 border-r-2 '>
					<h1 className='font-semibold my-auto mx-auto text-xl'>Filter by</h1>
				</div>
				<div className='md:w-[70%] py-6 px-10'>
					<div className='md:w-1/5 '>
						<Select options={categoryOptions} placeholder='Sort by' />
					</div>
				</div>
			</div>
			<div className='md:flex  w-full md:h-screen border-b-2'>
				<div className=' md:w-[30%] px-4 py-6 border-r'>
					<FilterTab name='Category' />
					<FilterTab name='Price' />
					<FilterTab name='Size' />
					<FilterTab name='Year' />
				</div>
				<div className='md:w-[70%] px-6 py-6 overflow-y-scroll md:flex md:flex-wrap md:-mx-4 '>
					{paintings.map((painting) => (
						<div
							className=' md:my-4 md:px-4 md:w-1/3 flex justify-evenly hover:shadow-xl hover:border hover:border-black'
							key={painting.name}
						>
							<Link href='/arts/1' passHref>
								<a>
									<div className=' px-2 py-2 mx-3 '>
										<div className='w-[200px] h-[200px] relative my-auto '>
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
				</div>
			</div>
		</div>
	)
}

export default ArtSearch
