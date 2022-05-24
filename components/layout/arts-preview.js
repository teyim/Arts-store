import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { ModalContext } from 'helpers/context/modal-context'
import { useContext } from 'react'

function ArtsPreview({ roomMockup, wideMockupView, closeUpMockupView }) {
	const { handleModal } = useContext(ModalContext)
	const [mockupImageStyle, setmockupImageStyle] = useState('')

	const backgroundImage = (
		<Image
			src={roomMockup}
			alt='room mockup'
			className='border border-black relative '
			layout='fill'
			objectFit='contain'
		/>
	)

	const mockupStyles = {
		default: ' w-[110px] h-[110px] md:w-[200px] md:h-[200px] my-auto',
		wideMockupView: ' w-[60px] h-[60px] md:w-[150px] md:h-[150px] my-auto',
		closeMockupview: ' w-[60px] h-[60px] md:w-[300px] md:h-[300px] my-auto',
	}

	useEffect(() => {
		if (wideMockupView) {
			setmockupImageStyle(mockupStyles.wideMockupView)
		}
		if (closeUpMockupView) {
			setmockupImageStyle(mockupStyles.closeMockupview)
		}
		if (!wideMockupView && !closeUpMockupView) {
			setmockupImageStyle(mockupStyles.default)
		}
	}, [])

	return (
		<div className=' w-screen h-screen mx-auto z-50 top-0 fixed flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-200'>
			<div className='max-w-7xl h-4/5 w-4/5 drop-shadow-lg bg-green-200'>
				<button
					className='z-20 absolute bg-black px-4 py-2'
					onClick={() => handleModal()}
				>
					<AiOutlineArrowLeft className='text-white w-5 h-5' />
				</button>
				<div
					className={`p-1 drop-shadow-2xl absolute z-20 right-[50%] top-[30%] ${
						wideMockupView ? ' top-[40%] ' : ' '
					}  md:top-[10%] translate-x-1/2`}
				>
					<div className={mockupImageStyle}>
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
