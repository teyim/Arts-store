import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineMenu, AiOutlineUser, AiOutlineDown } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import Logo from 'public/assets/logo-cultured-kid.svg'
import Portal from 'HOC/portal'
import SearchBar from './searchbar'
import MobileNav from './mobilenav'
import { ModalContext } from 'helpers/context/modal-context'
import AuthPage from '../auth'
import { authStore } from 'helpers/store'
import ProfileDropdown from './profile-dropdown'

function Navbar() {
	const { handleModal } = useContext(ModalContext)
	const [showPortal, setshowPortal] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)
	const [showSearchbar, setShowSearchbar] = useState(false)

	const isUserAuth = authStore((state) => state.isUserAuth)
	return (
		<>
			<nav className='p-6 font-Vollkorn  flex justify-center'>
				<div className='flex justify-between w-11/12 max-w-screen-2xl p-3 '>
					<div className='md:w-1/5 my-auto'>
						<Link passHref href='/'>
							<a>
								<Image src={Logo} alt='logo'></Image>
							</a>
						</Link>
					</div>
					{showPortal && (
						<Portal>
							<MobileNav
								setshowPortal={setshowPortal}
								showPortal={showPortal}
							/>
						</Portal>
					)}
					<div className='hidden md:flex justify-evenly my-auto w-1/2 py-2 text-lg '>
						<Link passHref href='/'>
							Paintings
						</Link>
						<Link passHref href='/'>
							Drawings
						</Link>
						<Link passHref href='/'>
							Sculptures
						</Link>
						<Link passHref href='/'>
							Artists
						</Link>
					</div>
					{!showSearchbar && (
						<>
							<div className='hidden md:flex w-1/5  my-auto  py-3 '>
								<ul className='w-full md:flex  justify-between py-1 px-4'>
									<li>
										<button onClick={() => setShowSearchbar(true)}>
											<IoIosSearch className='w-5 h-5' />
										</button>
									</li>
									<li>
										<Link passHref href='/cart'>
											<a>
												<BsCart2 className='w-5 h-5' />
											</a>
										</Link>
									</li>
									{!isUserAuth ? (
										<li>
											<button
												className='hover:underline'
												onClick={() => handleModal(<AuthPage />)}
											>
												Login|Register
											</button>
										</li>
									) : (
										<li
											onMouseEnter={() => setShowDropdown(true)}
											onMouseLeave={() => setShowDropdown(false)}
										>
											<button className='flex relative'>
												<AiOutlineUser className='w-5 h-5 ' />
												<AiOutlineDown className='w-4 h-3 my-auto text-gray-500 mt-1' />
											</button>
											{showDropdown && <ProfileDropdown />}
										</li>
									)}
								</ul>
							</div>
							<div className='md:hidden flex items-center'>
								<button
									className='outline-hidden mobile-menu-button'
									onClick={() => setshowPortal(!showPortal)}
								>
									<AiOutlineMenu className='h-6 w-6' />
								</button>
							</div>
						</>
					)}
					{showSearchbar && (
						<SearchBar screen='large' setShowSearchbar={setShowSearchbar} />
					)}
				</div>
			</nav>
		</>
	)
}

export default Navbar
