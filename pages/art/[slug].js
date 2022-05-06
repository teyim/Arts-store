import Image from 'next/image'
import { AiOutlineEye } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { BsArrowLeftShort } from 'react-icons/bs'
import Button from 'components/ui/button'
import Link from 'next/link'

function SingleArt() {
	return (
		<div className='md:flex font-Vollkorn'>
			<div className='px-12 py-12 bg-gray-100 md:w-1/2 md:flex justify-center'>
				<div className='my-auto flex md:flex-col justify-evenly items-center py-4 px-1 md:mr-10  md:w-[100px] md:h-[300px]'>
					<button className='p-1 drop-shadow-md hover:border-2 border-black'>
						<div className='w-[50px] h-[50px] relative my-auto'>
							<Image
								src='http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014'
								alt='painting'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</button>
					<button className='p-1 drop-shadow-md hover:border-2 border-black'>
						<div className='w-[50px] h-[50px] relative my-auto'>
							<Image
								src='http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014'
								alt='painting'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</button>
					<button className='p-1 drop-shadow-md hover:border-2 border-black'>
						<div className='w-[50px] h-[50px] relative my-auto'>
							<Image
								src='http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014'
								alt='painting'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</button>
				</div>
				<div className='flex flex-col justify-center content-center '>
					<div className='p-1 drop-shadow-2xl mx-auto'>
						<div className='w-[350px] h-[400px] relative my-auto'>
							<Image
								src='http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014'
								alt='painting'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='mt-3 flex justify-evenly'>
						<button className='flex'>
							<AiOutlineEye className='w-5 h-5 mx-1' />
							<h4>View in a room</h4>
						</button>
						<button className='flex'>
							<FiShare className='w-4 h-5 mx-1' />
							<h4>Share</h4>
						</button>
					</div>
				</div>
			</div>
			<div className='py-10 px-10 md:px-20 md:w-1/2 text-center md:text-left '>
				<Link href='/' passHref>
					<a>
						<span className='flex align-baseline'>
							<BsArrowLeftShort className='w-7 h-7 my-auto' />
							<span className='text-xl hover:underline'>Back</span>
						</span>
					</a>
				</Link>
				<div className='p-4 py-6 my-5 '>
					<h1 className='text-4xl'>Wallowing Breeze</h1>
					<h2 className='text-xl my-1 text-slate-600'>Charles Williams</h2>
					<div className='text-md font-thin my-4 text-slate-600'>
						<h5>Oil on canvas ,2008</h5>
						<h5>26 in x 23 in</h5>
					</div>
					<h5 className='text-md font-thin  text-slate-600 md:w-2/3'>
						When an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially
						unchanged
					</h5>
					<hr className='md:w-2/3 my-4' />
					<h1 className='text-2xl '>$ 620</h1>
					<div className=' font-thin my-1 text-slate-600 text-sm'>
						<h5>Ships from New York, USA</h5>
						<h5>Estimated to ship in 3-7 days within USA</h5>
					</div>
					<Button customStyle='bg-black my-3 text-white w-full md:w-2/3 hover:bg-white hover:text-black text-lg'>
						Add To Cart
					</Button>
					<h5 className='font-thin text-slate-600 text-sm'>
						Taxes and shipping fees will apply upon checkout
					</h5>
				</div>
			</div>
		</div>
	)
}

export default SingleArt
