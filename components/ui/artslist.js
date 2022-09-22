import Image from 'next/image'
import { BsCart2 } from 'react-icons/bs'
import { IoShareOutline } from 'react-icons/io5'
import Link from 'next/link'

function ArtsList({ arts, addToCartHandler, imageSize, customStyle }) {
	return arts.map((art) => (
		<div
			className={`my-6 flex justify-evenly hover:shadow-xl hover:border hover:border-black ${customStyle}`}
			key={art.id}
		>
			<div passHref>
				<div className=' px-2 py-2 mx-3 '>
					<div className={` ${imageSize} relative my-auto `}>
						<Image
							priority
							src={art.photoUrl}
							alt='painting'
							className='drop-shadow-lg'
							layout='fill'
							objectFit='contain'
						/>
					</div>
					<div className='my-3'>
						<Link href={`/arts/${art.id}`} passHref>
							<a>
								<h3 className='font-bold text-lg hover:underline'>
									{art.name}
								</h3>
							</a>
						</Link>

						<h4 className='font-semibold text-gray-800'>{art.artistName}</h4>
						<h5 className='font-medium text-gray-600 italic'>
							{art.category}, {art.year}
						</h5>
						<h5 className='font-extralight text-gray-600 italic'>
							{art.height}-{art.width}
						</h5>
					</div>
					<div className='p-2 justify-between flex'>
						<div className='my-auto'>
							<h3 className='font-bold text-gray-600 my-auto '></h3>
							{art.price}
						</div>
						<div className='my-auto flex w-1/4 justify-between'>
							<button className='p-1 bg-gray-200  w-7 h-7'>
								<IoShareOutline className='w-5 h-5 text-black  my-auto' />
							</button>
							<button
								className='p-1 bg-black  w-7 h-7'
								onClick={() => addToCartHandler(art)}
							>
								<BsCart2 className='w-5 h-5 text-white my-auto' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	))
}

export default ArtsList
