/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import Drawing from '../public/assets/drawing.png'
import Marquee from 'react-fast-marquee'
import Header from 'components/layout/header'
import Button from 'components/ui/button'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'helpers/firebase/clientApp'

export default function Home({ arts }) {
	console.log(arts)
	const artists = [
		{
			name: 'Mike Lambert',
			category: 'Painter',
			address: 'Texas',
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
		},
		{
			name: 'Albert Martins 1',
			category: 'Drawer',
			address: 'New York',
			imageUrl:
				'https://cdn11.bigcommerce.com/s-x49po/products/5684/images/14277/52Figure40__50289.1506574078.500.659.JPG?c=2',
		},
		{
			name: 'Mike Lambert 4',
			category: 'Painter',
			address: 'Texas',
			imageUrl:
				'http://cdn.shopify.com/s/files/1/0017/9657/1249/products/Landscape-painting-of-tropical-waterfall-painting-on-canvas-by-Karen-Whitworth-Healing-Retreat.jpg?v=1612313935',
		},
		{
			name: 'Albert Martins new',
			category: 'Drawer',
			address: 'New York',
			imageUrl:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
		},
		{
			name: 'Mike Lambert adjad',
			category: 'Painter',
			address: 'Texas',
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
		},
	]

	return (
		<>
			<Header arts={arts} />
			<div className=' py-10 font-Vollkorn bg-gray-100 '>
				<div className='w-2/5 p-3 px-10  text-center'>
					<h2 className='text-2xl text-gray-800'>Featured Artists</h2>
				</div>
				<div className='flex flex-wrap  overflow-hidden justify-evenly py-3'>
					<Marquee pauseOnHover speed={6} direction='right' gradient={false}>
						{artists.map((artist) => (
							<div
								className='border flex border-gray-300 my-2 mx-2 w-1/4 overflow-hidden hover:border-gray-700 hover:shadow-md'
								key={artist.name}
							>
								<div className='w-[200px] h-[150px] bg-blue-200 relative'>
									<Image
										src={artist.imageUrl}
										alt='painting'
										className='drop-shadow-lg my-auto'
										layout='fill'
										objectFit='cover'
									/>
								</div>
								<div className='text-left px-6 py-4 h-[100px]'>
									<h2 className='font-semibold text-lg text-gray-800'>
										{artist.name}
									</h2>
									<h3 className='font-extralight text-lg text-gray-600 italic '>
										{artist.category} , {artist.address}
									</h3>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>
			<div className='p-5 md:p-10 md:flex align-middle content-center justify-evenly font-Vollkorn md:my-14'>
				<div>
					<h3 className='font-extralight text-xl text-gray-600 italic'>
						On a budget?
					</h3>
					<h4 className='text-4xl text-gray-800'>Shop by Price</h4>
				</div>
				<div className='md:w-3/5 flex justify-evenly my-3'>
					<Button>Under $500</Button>
					<Button>$500 - $1000</Button>
					<Button>$1000 - $2000</Button>
					<Button>Above $2000</Button>
				</div>
			</div>
			<section className='font-Vollkorn'>
				<div className='bg-gray-100 md:px-12 md:py-4'>
					<div className='max-w-screen-2xl flex flex-col-reverse'>
						<div className='p-10 md:relative flex flex-col-reverse md:flex-row md:px-16 md:py-10'>
							<div className='md:w-1/2 md:px-16 md:py-10 '>
								<h3 className='font-extralight text-2xl text-gray-600 italic my-2'>
									Whats your Arts style?
								</h3>
								<h4 className='text-4xl text-gray-900 '>
									We have a good collection of paintings,drawings and sculptures
									for you
								</h4>
								<div className='my-6'>
									<Button>Shop now</Button>
								</div>
							</div>
							<div className="md:absolute flex justify-center md:-top-16 md:right-0 bg-[url('https://www.riseart.com/fe/static/media/media-bkg.de53d520.png')] md:w-1/2 bg-no-repeat md:h-[500px] bg-contain bg-center">
								<div className='w-[450px] h-[450px]  relative my-10'>
									<Image
										src={Drawing}
										alt='painting'
										layout='fill'
										objectFit='contain'
										placeholder='blur'
										className='drop-shadow-md'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export async function getStaticProps() {
	const artsCollection = collection(db, 'arts')
	const artsSnapShot = await getDocs(artsCollection)
	let arts = []
	artsSnapShot.docs.forEach((doc) => {
		arts.push({ ...doc.data(), id: doc.id })
	})

	return {
		props: { arts },
	}
}
