import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
function SearchBar({ setShowSearchbar, screen }) {
	const mobileSearchBar = (
		<div className='px-4 py-2 border border-white shadow-sm flex align-baseline justify-between animate-fade-in-down  mx-auto'>
			<button className='p-1 my-auto' onClick={() => setShowSearchbar(false)}>
				<AiOutlineClose className='w-5 h-5 text-stone-500' />
			</button>
			<input
				type='text'
				placeholder='Enter art name'
				className='py-2 px-2 outline-none bg-black'
			/>
			<button className='p-1 my-auto'>
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
			/>
			<button className='p-1 my-auto'>
				<AiOutlineSearch className='w-5 h-5 text-stone-500' />
			</button>
		</div>
	)

	return screen === 'mobile' ? [mobileSearchBar] : searchBar
}

export default SearchBar
