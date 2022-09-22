import Button from 'components/ui/button'
import Image from 'next/image'
import { useCart } from 'helpers/store'
import shallow from 'zustand/shallow'
import { useEffect, useState } from 'react'
import Select from 'react-select'

function CartUI() {
	const { cartItems, removeCartITem } = useCart(
		(state) => ({
			removeCartITem: state.removeCartITem,
			cartItems: state.cartItems,
		}),
		shallow
	)
	const [cartItemTotal, setcartItemTotal] = useState(0)
	const [selectedShippingPrice, setSelectedShippingPrice] = useState(30)

	const selectHandler = (event) => {
		setSelectedShippingPrice(event.value)
	}

	useEffect(() => {
		let sum = 0
		cartItems.forEach((item) => {
			sum += item.price
		})
		console.log(sum)
		if (cartItems.length > 0) {
			sum += selectedShippingPrice
		}
		setcartItemTotal(sum)
		console.log(selectedShippingPrice)
	}, [cartItems, selectedShippingPrice])

	const shippingOptions = [
		{ value: 30, label: 'Standard shipping ~ $30' },
		{ value: 100, label: 'Express shipping ~ $100' },
	]

	return (
		<div className='px-2  justify-center'>
			<h2 className='font-semibold text-3xl text-center '>Shopping Cart</h2>
			<div className='md:flex w-11/12 md:w-3/4 md:h-[500px] max-w-screen-2xl border border-slate-700 shadow-md mx-auto my-5'>
				<div className='md:w-3/5 py-5 px-6 md:px-10 max-h-[500px] overflow-y-scroll'>
					{cartItems.length >= 1 ? (
						<span className='flex justify-between text-lg mb-2'>
							<h2 className='text-xl'>Product details</h2>
							<h2 className='text-xl'>Price</h2>
						</span>
					) : null}
					{cartItems.length < 1 ? (
						<h2 className='text-center text-lg '>Cart is Empty</h2>
					) : (
						cartItems?.map((painting) => (
							<>
								<hr />
								<div className='my-4 flex justify-between' key={painting.year}>
									<div className='md:flex  w-2/3'>
										<div className='w-[100px] h-[100px] relative my-auto '>
											<Image
												src={painting.photoUrl}
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
											<button
												className='font-normal hover:underline'
												onClick={() => removeCartITem(painting.id)}
											>
												remove
											</button>
										</div>
									</div>
									<div className='my-auto'>
										<h1 className='text-lg'>{painting.price}</h1>
									</div>
								</div>
							</>
						))
					)}
				</div>
				<div className='md:w-2/5 bg-slate-50 border border-l-slate-700 py-6 px-8 md:h-full flex flex-col justify-evenly h-[400px]'>
					<div>
						<h1 className='text-xl font-semibold'>Order Summary</h1>
						<hr />
					</div>
					<div className='overflow-y-scroll'>
						{cartItems.map((item) => (
							<div key={item.id} className='flex justify-between w-full'>
								<h2 className='text-lg font-semibold text-slate'>
									{item.name}
								</h2>
								<h2 className='my-auto'>${item.price}</h2>
							</div>
						))}
					</div>
					<div>
						<h2 className='text-lg font-semibold my-1'>Shipping</h2>
						<Select
							defaultValue={shippingOptions[0]}
							options={shippingOptions}
							onChange={selectHandler}
						/>
					</div>
					<div>
						<hr />
						<div className='my-3 flex justify-between w-full'>
							<h2 className='text-xl font-semibold'>Total</h2>
							<h2 className='my-auto'>${cartItemTotal}</h2>
						</div>
						<Button
							customStyle='w-full text-lg'
							disabled={cartItems.length <= 0}
						>
							Checkout
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartUI
