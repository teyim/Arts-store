import { useState } from 'react'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineUser, AiOutlineClose, AiOutlineDown } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import ProfileDropdown from './profile-dropdown'
import SearchBar from './searchbar'

function MobileNav({ showPortal, setshowPortal }) {
	const [showDropdown, setShowDropdown] = useState(false)
	const [showSearchbar, setShowSearchbar] = useState(false)
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
						<Link href='/'>Paintings</Link>
					</li>
					<li className='text-2xl active:underline'>
						<Link href='/'>Drawings</Link>
					</li>
					<li className='text-2xl active:underline'>
						<Link href='/'>Sculptures</Link>
					</li>
					<li className='text-2xl active:underline'>
						<Link href='/'>Artists</Link>
					</li>
				</ul>
			</div>
			{!showSearchbar && (
				<div className='flex justify-evenly py-3 '>
					<button onClick={() => setShowSearchbar(true)}>
						<IoIosSearch className='w-5 h-5' />
					</button>
					<Link passHref href='/cart'>
						<a>
							<BsCart2 className='w-5 h-5' />
						</a>
					</Link>
					<button
						className='flex '
						onClick={() => setShowDropdown(!showDropdown)}
					>
						<AiOutlineUser className='w-5 h-5 ' />
						<AiOutlineDown className='w-4 h-3 my-auto text-gray-500 mt-1' />
					</button>
				</div>
			)}

			{showDropdown && <ProfileDropdown />}
			{showSearchbar && (
				<SearchBar screen='mobile' setShowSearchbar={setShowSearchbar} />
			)}
		</div>
	)
}

export default MobileNav
