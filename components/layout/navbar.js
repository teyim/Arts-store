import Link from 'next/link'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import Logo from 'public/assets/logo-cultured-kid.svg'

function Navbar() {
	return (
		<>
			<nav className='py-10 px-10 flex justify-between '>
				<div className='w-1/5'>
					<Link passHref href='/'>
						<a>
							<Image src={Logo} alt='logo'></Image>
						</a>
					</Link>
				</div>
				<div className='flex justify-evenly my-auto w-1/2 py-2 text-lg '>
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
				<div className='flex w-1/5 justify-evenly my-auto  py-3 '>
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
			</nav>
		</>
	)
}

export default Navbar
