import { useState, useContext } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineUser, AiOutlineClose, AiOutlineDown } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import ProfileDropdown from './profile-dropdown'
import SearchBar from './searchbar'
import { useAuthStore } from 'helpers/store'
import { ModalContext } from 'helpers/context/modal-context'
import AuthPage from '../auth'
import { useRouter } from 'next/router'

function MobileNav({ showPortal, setshowPortal }) {
	const [showDropdown, setShowDropdown] = useState(false)
	const [showSearchbar, setShowSearchbar] = useState(false)
	const { handleModal } = useContext(ModalContext)

	const router = useRouter()

	const isUserAuth = useAuthStore((state) => state.isUserAuth)

	const handleMobileNavLinks = (category) => {
		setshowPortal(!showPortal)
		router.push(`/search/${category}`)
	}
	return (
		<div className='w-screen h-screen bg-black  top-0 right-0 left-0 z-20 p-6 text-white font-Vollkorn flex flex-col content-evenly fixed md:hidden animate-fadein'>
			<div className='flex justify-end p-3'>
				<button
					className='outline-hidden'
					onClick={() => setshowPortal(!showPortal)}
				>
					<AiOutlineClose className='w-8 h-8' />
				</button>
			</div>
			<div className='h-1/2 flex justify-center content-center '>
				<ul className='list-none text-center flex flex-col justify-evenly'>
					<li className='text-2xl active:underline'>
						<button onClick={() => handleMobileNavLinks('painting')}>
							Paintings
						</button>
					</li>
					<li className='text-2xl active:underline'>
						<button onClick={() => handleMobileNavLinks('drawing')}>
							Drawings
						</button>
					</li>
					<li className='text-2xl active:underline'>
						<button onClick={() => handleMobileNavLinks('sculpting')}>
							Sculptures
						</button>
					</li>
					<li className='text-2xl active:underline'>
						<button>Artists</button>
					</li>
				</ul>
			</div>
			{!showSearchbar && (
				<div className='flex justify-evenly py-3 '>
					<button onClick={() => setShowSearchbar(true)}>
						<IoIosSearch className='w-5 h-5' />
					</button>
					<button
						passHref
						onClick={() => {
							router.push('/cart')
							setshowPortal(!showPortal)
						}}
					>
						<BsCart2 className='w-5 h-5' />
					</button>

					{isUserAuth ? (
						<button
							className='flex '
							onClick={() => setShowDropdown(!showDropdown)}
						>
							<AiOutlineUser className='w-5 h-5 ' />
							<AiOutlineDown className='w-4 h-3 my-auto text-gray-500 mt-1' />
						</button>
					) : (
						<button
							className='hover:underline'
							onClick={() => {
								setshowPortal(!showPortal)
								handleModal(<AuthPage />)
							}}
						>
							Login|Register
						</button>
					)}
				</div>
			)}

			{showDropdown && (
				<ProfileDropdown
					screen='mobile'
					togglePortal={() => setshowPortal(!showPortal)}
				/>
			)}
			{showSearchbar && (
				<SearchBar
					screen='mobile'
					setShowSearchbar={setShowSearchbar}
					setshowPortal={setshowPortal}
					showPortal={showPortal}
				/>
			)}
		</div>
	)
}

export default MobileNav
