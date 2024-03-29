import {
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineReconciliation,
	AiOutlineLogout,
} from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from 'helpers/firebase/clientApp'
import Link from 'next/link'

function ProfileDropdown({ screen, togglePortal, toggleDropDown }) {
	const logout = () => {
		signOut(auth)
	}

	const handleClick = (action) => {
		logout()
		if (action === 'logout' && screen === 'mobile') {
			togglePortal()
		}
	}

	return (
		<>
			<div
				className=' font-semibold mt-2 absolute bg-white  right-[5%] z-50 list-none divide-y divide-gray-100 rounded-sm shadow-md border border-gray-500 animate-fade-in-down'
				onMouseLeave={toggleDropDown}
			>
				<ul className='w-[220px] text-center py-3'>
					<li className='flex  px-5 hover:bg-gray-100 my-2 cursor-pointer'>
						<AiOutlineUser className='w-5 h-5 text-stone-600 my-auto' />
						<Link passHref href='/dashboard/profile'>
							<a className=' text-lg  text-stone-600 mt-2 mx-2'>Account</a>
						</Link>
					</li>
					<li className='flex px-5 hover:bg-gray-100  my-2 cursor-pointer'>
						<AiOutlineReconciliation className='w-5 h-5 text-stone-600 my-auto' />
						<Link passHref href='/dashboard/orders'>
							<a className=' text-lg  text-stone-600 mt-2 mx-2'>
								Orders/Sells{' '}
							</a>
						</Link>
					</li>
					<li className='flex px-5 hover:bg-gray-100  my-2 cursor-pointer'>
						<AiOutlineHeart className='w-5 h-5 text-stone-600 my-auto' />
						<Link passHref href='/dashboard/saves'>
							<a className=' text-lg  text-stone-600 mt-2 mx-2'>
								{'Saves & Follows'}
							</a>
						</Link>
					</li>
					<li
						className='flex px-5 hover:bg-gray-100  my-2 cursor-pointer'
						onClick={() => handleClick('logout')}
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
