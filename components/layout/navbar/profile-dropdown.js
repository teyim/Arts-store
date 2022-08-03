import {
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineReconciliation,
	AiOutlineLogout,
} from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from 'helpers/firebase/clientApp'
import { userStore } from 'helpers/store'

function ProfileDropdown() {
	const userlogout = userStore((state) => state.logout)
	const setUserData = userStore((state) => state.setUserData)
	const logout = () => {
		signOut(auth)
		userlogout()
		setUserData({})
	}

	return (
		<>
			<div className=' font-semibold mt-2 absolute bg-white  right-[5%] z-50 list-none divide-y divide-gray-100 rounded-sm shadow-md border border-gray-500 animate-fade-in-down'>
				<ul className='w-[220px] text-center py-3'>
					<li className='flex  px-5 hover:bg-gray-100 my-2 cursor-pointer'>
						<AiOutlineUser className='w-5 h-5 text-stone-600 my-auto' />
						<span className=' text-lg  text-stone-600 mt-2 mx-2'>Account</span>
					</li>
					<li className='flex px-5 hover:bg-gray-100  my-2 cursor-pointer'>
						<AiOutlineReconciliation className='w-5 h-5 text-stone-600 my-auto' />
						<span className=' text-lg   text-stone-600 mt-2 mx-2'>
							Orders/Sells{' '}
						</span>
					</li>
					<li className='flex px-5 hover:bg-gray-100  my-2 cursor-pointer'>
						<AiOutlineHeart className='w-5 h-5 text-stone-600 my-auto' />
						<span className=' text-lg   text-stone-600 mt-2 mx-2'>
							{'Saves & Follows'}
						</span>
					</li>
					<li
						className='flex px-5 hover:bg-gray-100  my-2 cursor-pointer'
						onClick={logout}
					>
						<AiOutlineLogout className='w-5 h-5 text-stone-600 my-auto' />
						<span className=' text-lg   text-stone-600 mt-2 mx-2'>Logout </span>
					</li>
				</ul>
			</div>
		</>
	)
}

export default ProfileDropdown
