import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import Logo from 'public/assets/logo-cultured-kid.svg'
import Portal from 'HOC/portal'

function Navbar() {
	const [showPortal, setshowPortal] = useState(false)

	const togglePortal = () => {
		setshowPortal(!showPortal)
	}

	const mobileMenu = (
		<div className=' w-screen h-screen bg-black  top-0 right-0 left-0 z-20 p-6 text-white font-Vollkorn flex flex-col content-evenly fixed md:hidden animate-fadein'>
			<div className='flex justify-end p-3'>
				<button className='outline-hidden' onClick={togglePortal}>
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
			<div className='flex justify-evenly   py-3 '>
				<button>
					<IoIosSearch className='w-5 h-5' />
				</button>
				<button>
					<BsCart2 className='w-5 h-5' />
				</button>
				<button>
					<AiOutlineUser className='w-5 h-5' />
				</button>
			</div>
		</div>
	)
	return (
		<>
			<nav className='p-6 font-Vollkorn'>
				<div className='flex justify-between max-w-screen-2xl p-3'>
					<div className='md:w-1/5'>
						<Link passHref href='/'>
							<a>
								<Image src={Logo} alt='logo'></Image>
							</a>
						</Link>
					</div>
					{showPortal && <Portal>{mobileMenu}</Portal>}
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
					<div className='hidden md:flex w-1/5 justify-evenly my-auto  py-3 '>
						<button>
							<IoIosSearch className='w-5 h-5' />
						</button>
						<button>
							<BsCart2 className='w-5 h-5' />
						</button>
						<button>
							<AiOutlineUser className='w-5 h-5' />
						</button>
					</div>
					<div className='md:hidden flex items-center'>
						<button
							className='outline-hidden mobile-menu-button'
							onClick={togglePortal}
						>
							<AiOutlineMenu className='h-6 w-6' />
						</button>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
