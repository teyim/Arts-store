import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import FilterTab from 'components/ui/filtertab'
import Select from 'react-select'
import { useRouter } from 'next/router'
import ArtsList from 'components/ui/artslist'
import { useArtsStore, useCart } from 'helpers/store'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'helpers/firebase/clientApp'
import shallow from 'zustand/shallow'
import LoadingSpinner from 'HOC/loadingSpinner'

function ArtSearch() {
	const cartItems = useCart((state) => state.cartItems)
	const { arts, setArts, isLoading, setIsLoading } = useArtsStore(
		(state) => ({
			arts: state.arts,
			setArts: state.setArts,
			isLoading: state.isLoading,
			setIsLoading: state.setIsLoading,
		}),
		shallow
	)
	const addCartItem = useCart((state) => state.addCartItem)

	const router = useRouter()
	const { query } = router.query
	console.log(query)

	useEffect(() => {
		const fetchArts = async () => {
			setIsLoading(true)
			const artsCollection = collection(db, 'arts')
			const artsSnapShot = await getDocs(artsCollection)
			let arts = []
			artsSnapShot.docs.forEach((doc) => {
				arts.push({ ...doc.data(), id: doc.id })
			})
			setArts(arts)
			setIsLoading(false)
		}
		fetchArts()
	}, [])

	const addToCartHandler = (art) => {
		const itemExist = cartItems.some((item) => item.id === art.id)
		if (!itemExist) {
			addCartItem(art)
			return
		}
		alert('Item already exist in cart')
	}

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
						<Select options={[]} placeholder='Sort by' />
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
					{isLoading ? (
						<LoadingSpinner size='text-4xl' />
					) : (
						<ArtsList
							arts={arts}
							addToCartHandler={addToCartHandler}
							imageSize='w-[200px] h-[200px]'
							customStyle='md:py-4 md:px-4 md:w-1/3'
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default ArtSearch
