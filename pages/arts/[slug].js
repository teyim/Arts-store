import Image from 'next/image'
import { useContext } from 'react'
import { FiShare } from 'react-icons/fi'
import { BsArrowLeftShort } from 'react-icons/bs'
import Button from 'components/ui/button'
import { ModalContext } from 'helpers/context/modal-context'
import ArtsPreview from 'components/layout/arts-preview'
import roomMockup1 from 'public/assets/rooms/room1.png'
import roomMockup2 from 'public/assets/rooms/room2.jpg'
import roomMockup3 from 'public/assets/rooms/room3.jpg'
import { useRouter } from 'next/router'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from 'helpers/firebase/clientApp'

function SingleArt({ artData }) {
	const router = useRouter()

	const { handleModal } = useContext(ModalContext)

	return (
		<>
			<div className='md:flex font-Vollkorn '>
				<div className='px-12 py-12 bg-gray-100 md:w-1/2 md:flex justify-center'>
					<div className='my-auto flex md:flex-col justify-evenly items-center py-4 px-1 md:mr-10  md:w-[100px] md:h-[300px]'>
						<button
							className='p-1 shadow-lg hover:border-2 border-black'
							onClick={() =>
								handleModal(
									<ArtsPreview
										roomMockup={roomMockup1}
										wideMockupView
										image={artData.photoUrl}
									/>
								)
							}
						>
							<div className='w-[50px] h-[50px] relative my-auto'>
								<Image
									src={roomMockup1}
									alt='painting'
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</button>
						<button
							className='p-1 shadow-lg hover:border-2 border-black'
							onClick={() =>
								handleModal(
									<ArtsPreview
										roomMockup={roomMockup2}
										image={artData.photoUrl}
									/>
								)
							}
						>
							<div className='w-[50px] h-[50px] relative my-auto'>
								<Image
									src={roomMockup2}
									alt='painting'
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</button>
						<button
							className='p-1 shadow-lg hover:border-2 border-black'
							onClick={() =>
								handleModal(
									<ArtsPreview
										roomMockup={roomMockup3}
										closeUpMockupView
										image={artData.photoUrl}
									/>
								)
							}
						>
							<div className='w-[50px] h-[50px] relative my-auto'>
								<Image
									src={roomMockup3}
									alt='painting'
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</button>
					</div>
					<div className='flex flex-col justify-center content-center '>
						<div className='p-1 drop-shadow-2xl mx-auto'>
							<div className='w-[200px] h-[200px] md:w-[350px] md:h-[400px] relative my-auto'>
								<Image
									src={artData.photoUrl}
									alt='painting'
									layout='fill'
									objectFit='contain'
								/>
							</div>
						</div>
						<div className='mt-3 flex justify-center'>
							<button className='flex'>
								<FiShare className='w-4 h-5 mx-1' />
								<h4>Share</h4>
							</button>
						</div>
					</div>
				</div>
				<div className='py-10 px-10 md:px-20 md:w-1/2 text-center md:text-left '>
					<button onClick={() => router.back()}>
						<span className='flex align-baseline'>
							<BsArrowLeftShort className='w-7 h-7 my-auto' />
							<span className='text-xl hover:underline'>Back</span>
						</span>
					</button>
					<div className='p-4 py-6 my-5 '>
						<h1 className='text-4xl'>{artData.name}</h1>
						<h2 className='text-xl my-1 text-slate-600'>
							{artData.artistName}
						</h2>
						<div className='text-md font-thin my-4 text-slate-600'>
							<h5>
								{artData.category} ,{artData.year}
							</h5>
							<h5>
								{artData.height} cm x {artData.width} cm
							</h5>
						</div>
						<h5 className='text-md font-thin  text-slate-600 md:w-2/3'>
							{artData.artDetail}
						</h5>
						<hr className='md:w-2/3 my-4' />
						<h1 className='text-2xl '>${artData.price}</h1>
						<div className=' font-thin my-1 text-slate-600 text-sm'>
							<h5>Ships from {artData.location}</h5>
							<h5>Estimated to ship in 3-7 days </h5>
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
		</>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const { slug } = params
	let data
	const docRef = doc(db, 'arts', slug)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		data = docSnap.data()
	} else {
		// doc.data() will be undefined in this case
		console.log('No such document!')
	}

	return {
		props: { artData: data },
		revalidate: 600,
	}
}

export async function getStaticPaths() {
	let artSlugs = []
	const artsCollection = collection(db, 'arts')
	const artsSnapShot = await getDocs(artsCollection)
	artsSnapShot.docs.forEach((doc) => {
		artSlugs.push(doc.id)
	})

	return {
		paths: artSlugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	}
}

export default SingleArt
