import { BsArrowRight } from 'react-icons/bs'
import Marquee from 'react-fast-marquee'
import { useCart } from 'helpers/store'
import ArtsList from 'components/ui/artslist'

function Header() {
	const addCartItem = useCart((state) => state.addCartItem)
	const cartItems = useCart((state) => state.cartItems)
	const paintings = [
		{
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
			name: 'Wallowing breeze',
			artist: 'Hettie Richardsakjkjakd',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: 620,
			id: 1,
		},
		{
			imageUrl:
				'https://cdn11.bigcommerce.com/s-x49po/products/5684/images/14277/52Figure40__50289.1506574078.500.659.JPG?c=2',
			name: 'Wallowing bkakdjalkd',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: 620,
			id: 2,
		},
		{
			imageUrl:
				'https://www.creativeboom.com/uploads/articles/a4/a41200a5667f1051d5d8f508d4b15ae4393b7f7d_810.jpg',
			name: 'Wallowing breezeakjkald',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: 620,
			id: 3,
		},
		{
			imageUrl:
				'http://cdn.shopify.com/s/files/1/0017/9657/1249/products/Landscape-painting-of-tropical-waterfall-painting-on-canvas-by-Karen-Whitworth-Healing-Retreat.jpg?v=1612313935',
			name: 'Wallowing breezeakjjda',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: 620,
			id: 4,
		},
		{
			imageUrl:
				'http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014',
			name: 'Wallowing breezehjahd',
			artist: 'Hettie Richards',
			type: 'oil in canvas',
			dimensions: '26in x 36in',
			year: '2008',
			price: 620,
			id: 5,
		},
	]
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
							paintings={paintings}
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
