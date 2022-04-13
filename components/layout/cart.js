import Button from 'components/ui/button'
import Image from 'next/image'
function CartUI() {
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
	]
	return (
		<div className='px-2  justify-center'>
			<h2 className='font-semibold text-3xl text-center '>Shopping Cart</h2>
			<div className='md:flex w-11/12 md:w-3/4 md:h-[500px] max-w-screen-2xl border border-slate-700 shadow-md mx-auto my-5'>
				<div className='md:w-3/5 py-5 px-6 md:px-10 max-h-[500px] overflow-y-scroll'>
					<span className='flex justify-between text-lg mb-2'>
						<h2 className='text-xl'>Product details</h2>
						<h2 className='text-xl'>Price</h2>
					</span>
					{paintings.map((painting) => (
						<>
							<hr />
							<div className='my-4 flex justify-between' key={painting.year}>
								<div className='md:flex  w-2/3'>
									<div className='w-[100px] h-[100px] relative my-auto '>
										<Image
											src={painting.imageUrl}
											alt='painting'
											className='drop-shadow-lg'
											layout='fill'
											objectFit='contain'
										/>
									</div>
									<div className='my-auto md:mx-3 mt-2 md:mt-0'>
										<h3 className='font-semibold  text-xl md:text-2xl'>
											{painting.name}
										</h3>
										<h4 className='font-light italic '>{painting.artist}</h4>
										<button className='font-normal hover:underline'>
											remove
										</button>
									</div>
								</div>
								<div className='my-auto'>
									<h1 className='text-lg'>{painting.price}</h1>
								</div>
							</div>
						</>
					))}
				</div>
				<div className='md:w-2/5 bg-slate-50 border border-l-slate-700 py-6 px-8 md:h-full flex flex-col justify-evenly h-[400px]'>
					<div>
						<h1 className='text-xl font-semibold'>Order Summary</h1>
						<hr />
					</div>
					<div className='flex justify-between w-full'>
						<h2 className='text-lg font-semibold text-slate'>Items 1</h2>
						<h2 className='my-auto'>$600</h2>
					</div>
					<div>
						<h2 className='text-lg font-semibold my-1'>Shipping</h2>
						<select
							className=' appearance-none block w-full px-4 py-1 font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-slate-800 focus:outline-none'
							aria-label='.form-select-lg example'
						>
							<option value='standard'>Standard ~$90</option>
							<option value='express'>Express ~$110</option>
						</select>
					</div>
					<div>
						<hr />
						<div className='my-3 flex justify-between w-full'>
							<h2 className='text-xl font-semibold'>Total</h2>
							<h2 className='my-auto'>$600</h2>
						</div>
						<Button customStyle='w-full text-lg'>Checkout</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartUI
