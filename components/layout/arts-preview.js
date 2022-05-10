import Image from 'next/image'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { ModalContext } from 'helpers/context/modal-context'
import { useContext } from 'react'

function ArtsPreview({ roomMockup, wideMockupView }) {
	const backgroundImage = (
		<Image
			src={roomMockup}
			alt='room mockup'
			className='border border-black relative '
			layout='fill'
			objectFit='contain'
		/>
	)
	const { handleModal } = useContext(ModalContext)
	return (
		<div className=' w-screen h-screen mx-auto z-50 top-0 fixed flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-200'>
			<div className='max-w-7xl h-[60%] w-[60%] drop-shadow-lg '>
				<button
					className='z-20 absolute bg-black px-4 py-2'
					onClick={() => handleModal()}
				>
					<AiOutlineArrowLeft className='text-white w-5 h-5' />
				</button>
				<div className='p-1 drop-shadow-2xl absolute z-20 right-[50%] top-[10%] translate-x-1/2'>
					<div
						className={` w-[60px] h-[60px] md:w-[200px] md:h-[200px] ${
							wideMockupView ? ' md:w-[150px] md:h-[150px] ' : ' '
						}  my-auto `}
					>
						<Image
							src='http://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014'
							alt='painting'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</div>
				{backgroundImage}
			</div>
		</div>
	)
}

export default ArtsPreview
