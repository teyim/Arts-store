import Image from 'next/image'
import roomMockup from 'public/assets/rooms/Wall-mockup1.png'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { ModalContext } from 'helpers/context/modal-context'
import { useContext } from 'react'

function ArtsPreview() {
	const { handleModal } = useContext(ModalContext)
	return (
		<div className=' w-screen h-screen mx-auto z-50 top-0 fixed flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-200'>
			<div className='max-w-7xl w-4/5 h:2/3 md:w-2/3 2xl:w-1/2 2xl:h-2/3 drop-shadow-lg border border-black'>
				<button
					className='z-20 absolute bg-black px-4 py-2'
					onClick={() => handleModal()}
				>
					<AiOutlineArrowLeft className='text-white w-5 h-5' />
				</button>
				<Image
					src={roomMockup}
					alt='room mockup'
					className='border border-black'
				/>
			</div>
		</div>
	)
}

export default ArtsPreview
