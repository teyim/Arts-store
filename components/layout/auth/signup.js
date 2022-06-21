import Button from 'components/ui/button'
import { useState } from 'react'
import { ModalContext } from 'helpers/context/modal-context'
import { useContext } from 'react'

function Signup({ handleClick }) {
	const { handleModal } = useContext(ModalContext)
	const [isBuyerBoxChecked, setIsBuyerBoxChecked] = useState(false)
	const [isArtistBoxChecked, setIsArtistBoxChecked] = useState(true)

	const handleCheckBoxClick = () => {
		setIsArtistBoxChecked(!isArtistBoxChecked)
		setIsBuyerBoxChecked(!isBuyerBoxChecked)
	}

	return (
		<div className='w-screen h-screen mx-auto z-50 top-0 fixed flex justify-center items-center font-Vollkorn '>
			<div
				className='bg-gray-100 absolute w-screen h-screen'
				onClick={() => handleModal()}
			></div>
			<div className='relative md:w-2/3 2xl:w-2/4 max-w-2/3 h-[80%] md:h[90%] flex flex-col border-2 border-black bg-bg-gray-100 py-8 px-6 overflow-y-scroll'>
				<h1 className='bold text-4xl text-center'>Create Account</h1>
				<h2 className='text-lg text-center my-1 text-slate-600'>
					Please credentials for new account
				</h2>
				<form className='mt-2 md:px-7'>
					<div className='my-3'>
						<h1 className='text-2xl font-semibold text-center'>I am </h1>
						<div className='md:flex justify-evenly my-3'>
							<div>
								<input
									id='remember'
									type='checkbox'
									value=''
									className='w-4 h-4 border border-black  focus:ring-3 focus:ring-blue-300'
									checked={isBuyerBoxChecked}
									onClick={handleCheckBoxClick}
								/>
								<label
									htmlFor='remember'
									className='ml-2  text-lg font-medium  dark:text-gray-300'
									value='buyer'
								>
									A Buyer/Seller
								</label>
							</div>
							<div>
								<input
									id='remember'
									type='checkbox'
									value=''
									className='w-4 h-4 border border-black  focus:ring-3 focus:ring-blue-300 '
									checked={isArtistBoxChecked}
									onClick={handleCheckBoxClick}
								/>
								<label
									htmlFor='remember'
									className='ml-2 text-lg font-medium  dark:text-gray-300'
									value='artist'
								>
									An Artist
								</label>
							</div>
						</div>
					</div>
					<hr className='my-4'></hr>
					<div className='md:flex justify-evenly'>
						<div className='mb-6'>
							<label
								htmlFor='fullname'
								className='block  mb-2 text-lg  font-medium text-gray-900 '
							>
								First Name
							</label>
							<input
								type='text'
								className='border border-black text-gray-900 text-sm   block w-full p-2.5 '
								placeholder='Enter First Name'
								required
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='lastname'
								className='block  mb-2 text-lg  font-medium text-gray-900 '
							>
								Last Name
							</label>
							<input
								type='text'
								className='border border-black text-gray-900 text-sm   block w-full p-2.5 '
								placeholder='Enter Last Name'
								required
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='email'
								className='block  mb-2 text-lg  font-medium text-gray-900 '
							>
								Email
							</label>
							<input
								type='email'
								className='border border-black text-gray-900 text-sm   block w-full p-2.5 '
								placeholder='Enter Email'
								required
							/>
						</div>
					</div>
					{isArtistBoxChecked && (
						<div className='md:mx-4 mb-6'>
							<label className='block  mb-2 text-lg  font-medium text-gray-900'>
								Category
							</label>
							<select className='bg-gray-50 border border-black text-gray-900 text-sm  block w-full p-2.5 '>
								<option value='painter'>Painter</option>
								<option value='sculptor'>Sculptor</option>
								<option value='p-artist'>Pen/Pencil Artist</option>
							</select>
						</div>
					)}
					<div className='md:flex justify-evenly w-full'>
						<div className='mb-6'>
							<label
								htmlFor='password'
								className='block mb-2 text-lg font-medium text-gray-900 '
							>
								Password
							</label>
							<input
								type='password'
								id='password'
								className=' border border-black text-gray-900 text-sm   block w-full p-2.5'
								placeholder='Enter password'
								required
							/>
						</div>
						<div className='mb-6 md:w-2/5'>
							<label
								htmlFor='password'
								className='block mb-2 text-lg font-medium text-gray-900 '
							>
								Confirm Password
							</label>
							<input
								type='password'
								id='password'
								className=' border border-black text-gray-900 text-sm block w-full p-2.5'
								placeholder='Confirm password'
								required
							/>
						</div>
					</div>
					<Button customStyle='text-black block border-2 border-black hover:bg-black hover:text-white w-full text-lg font-semibold'>
						Create account
					</Button>
				</form>
				<h3 className='text-center my-2'>
					Already have an account?{' '}
					<button
						className='font-semibold cursor-pointer'
						onClick={() => handleClick()}
					>
						Login
					</button>
				</h3>
			</div>
		</div>
	)
}

export default Signup
