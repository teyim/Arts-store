import { BsArrowRight } from 'react-icons/bs'
import Marquee from 'react-fast-marquee'
import { useCart } from 'helpers/store'
import ArtsList from 'components/ui/artslist'

function Header({ arts }) {
	const addCartItem = useCart((state) => state.addCartItem)
	const cartItems = useCart((state) => state.cartItems)

	const addToCartHandler = (art) => {
		const itemExist = cartItems.some((item) => item.id === art.id)
		if (!itemExist) {
			addCartItem(art)
			return
		}
		alert('Item already exist in cart')
	}
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
						<ArtsList
							arts={arts}
							addToCartHandler={addToCartHandler}
							imageSize='w-[300px] h-[300px]'
						/>
					</Marquee>
				</div>
			</header>
		</>
	)
}

export default Header
