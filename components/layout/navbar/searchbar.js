import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { useRef } from 'react'
import { useRouter } from 'next/router'
function SearchBar({ setShowSearchbar, screen, setshowPortal, showPortal }) {
	const router = useRouter()
	const inputRef = useRef(null)

	const handleSearch = (screen) => {
		if (inputRef.current.value !== '') {
			if (screen !== 'mobile') {
				router.push(`/search/all?query=${inputRef.current.value}`)
				return
			}
			setshowPortal(!showPortal)
			router.push(`/search/all?query=${inputRef.current.value}`)
		}
	}

	const mobileSearchBar = (
		<div className='px-4 py-2 border border-white shadow-sm flex align-baseline justify-between animate-fade-in-down  mx-auto'>
			<button className='p-1 my-auto' onClick={() => setShowSearchbar(false)}>
				<AiOutlineClose className='w-5 h-5 text-stone-500' />
			</button>
			<input
				type='text'
				placeholder='Enter art name'
				className='py-2 px-2 outline-none bg-black'
				ref={inputRef}
			/>
			<button className='p-1 my-auto' onClick={() => handleSearch('mobile')}>
				<AiOutlineSearch className='w-5 h-5 text-stone-500' />
			</button>
		</div>
	)

	const searchBar = (
		<div className='hidden  px-2 py-2 border border-stone-600 shadow-sm md:flex align-baseline animate-fade-in-down '>
			<button className='p-1 my-auto' onClick={() => setShowSearchbar(false)}>
				<AiOutlineClose className='w-5 h-5 text-stone-500' />
			</button>
			<input
				type='text'
				placeholder='Enter art name'
				className='p-2 outline-none '
				ref={inputRef}
			/>
			<button className='p-1 my-auto' onClick={handleSearch}>
				<AiOutlineSearch className='w-5 h-5 text-stone-500' />
			</button>
		</div>
	)

	return screen === 'mobile' ? [mobileSearchBar] : searchBar
}

export default SearchBar
