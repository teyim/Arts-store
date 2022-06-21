import Button from 'components/ui/button'
import { ModalContext } from 'helpers/context/modal-context'
import { useContext } from 'react'

function Login({ handleClick }) {
	const { handleModal } = useContext(ModalContext)
	return (
		<div className='w-screen h-screen mx-auto z-50 top-0 fixed flex justify-center items-center font-Vollkorn'>
			<div
				className='bg-gray-100 absolute w-screen h-screen'
				onClick={() => handleModal()}
			></div>
			<div className='relative md:w-1/3 max:h-[95%] 2xl:h-[85%] flex flex-col border-2 border-black bg-bg-gray-100 py-8 px-6'>
				<h1 className='bold text-4xl text-center'>Welcome Back</h1>
				<h2 className='text-lg text-center my-1 text-slate-600'>
					Please enter your account details
				</h2>
				<form className='mt-4 px-7'>
					<div className='mb-6'>
						<label
							htmlFor='email'
							className='block mb-2 text-lg font-medium text-gray-900 '
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							className='border border-black text-gray-900 text-sm   block w-full p-2.5 '
							placeholder='Enter Email'
							required
						/>
					</div>
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
							required
						/>
					</div>
					<div className='flex justify-between items-start mb-6'>
						<div className='flex'>
							<div className='flex items-center h-5'>
								<input
									id='remember'
									type='checkbox'
									value=''
									className='w-4 h-4 border border-black  focus:ring-3 focus:ring-blue-300  '
								/>
							</div>
							<label
								htmlFor='remember'
								className='ml-2  font-medium text-gray-600 dark:text-gray-300'
							>
								Remember me
							</label>
						</div>
						<h2 className='text-gray-700 '>Forgot Password</h2>
					</div>
					<Button customStyle=' text-black block border-2 border-black hover:bg-black hover:text-white w-full text-lg font-semibold'>
						Login
					</Button>
				</form>
				<h3 className='text-center my-2'>
					Dont have an account?{' '}
					<button
						className='font-semibold cursor-pointer'
						onClick={() => handleClick()}
					>
						Create account
					</button>
				</h3>
			</div>
		</div>
	)
}

export default Login
