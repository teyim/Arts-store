import { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import Select from 'react-select'

function FilterTab({ name }) {
	const [openTab, setOpenTab] = useState(false)
	const [minPriceRange, setMinPriceRange] = useState(0)
	const [maxPriceRange, setMaxPriceRange] = useState(20000)

	const options = [
		{ value: '1984-1990', label: '1984-1990' },
		{ value: '1991-2000', label: '1991-2000' },
		{ value: '2001-2005', label: '2001-2005' },
		{ value: '2006-2010', label: '2006-2010' },
		{ value: '2011-2015', label: '2011-2015' },
		{ value: '2015-2019', label: '2015-2019' },
		{ value: '2020-2022', label: '2020-2012' },
	]

	const categoryOptions = [
		{ value: 'all', label: 'All' },
		{ value: 'painting', label: 'Painting' },
		{ value: 'sculpting', label: 'Sculpting' },
		{ value: 'drawing', label: 'Drawing' },
		{ value: 'digitalArts', label: 'Digital Arts' },
		{ value: 'photography', label: 'Photography' },
	]

	const sizeOptions = [
		{ value: 'small', label: 'Small' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'large', label: 'Large' },
	]

	const categoryTabOption = (
		<div>
			<Select
				defaultValue={categoryOptions[0]}
				options={categoryOptions}
				placeholder='Select Category'
			/>
		</div>
	)

	const priceRangeTabOption = (
		<div>
			<div className='flex justify-between'>
				<label
					htmlFor='minmax-range'
					className='block mb-2  font-medium text-gray-900 dark:text-gray-300'
				>
					Min
				</label>
				<label
					htmlFor='minmax-range'
					className='block mb-2  font-medium text-gray-900 dark:text-gray-300'
				>
					Max
				</label>
			</div>
			<div className='flex justify-between'>
				<input
					type='number'
					placeholder='0 USD'
					value={minPriceRange}
					min={0}
					max={20000}
					className='w-1/2 h-2 bg-gray-200 mx-2  px-2 py-4  dark:bg-gray-700'
					onChange={(e) => setMinPriceRange(e.target.value)}
				/>

				<input
					type='number'
					placeholder='20,000 USD'
					value={maxPriceRange}
					min={0}
					max={20000}
					className='w-1/2 h-2 bg-gray-200 mx-2  px-2 py-4   dark:bg-gray-700'
					onChange={(e) => setMaxPriceRange(e.target.value)}
				/>
			</div>
		</div>
	)

	const yearTapOption = (
		<div>
			<Select isMulti options={options} placeholder='Select Year' />
		</div>
	)

	const sizeTapOption = (
		<div>
			<Select isMulti options={sizeOptions} placeholder='Select Size' />
		</div>
	)
	return (
		<div className='border-b border-gray-400 cursor-pointer'>
			<div className='flex justify-between px-2 py-4'>
				<h2 className='text-xl font-semibold'>{name}</h2>
				{openTab ? (
					<BsChevronDown
						className='w-5 h-5 text-gray-400 '
						onClick={() => setOpenTab(!openTab)}
					/>
				) : (
					<AiOutlineRight
						className='w-5 h-5 text-gray-400'
						onClick={() => setOpenTab(!openTab)}
					/>
				)}
			</div>
			{openTab && (
				<div className='px-8 pb-3'>
					{name === 'Category' && categoryTabOption}
					{name === 'Price' && priceRangeTabOption}
					{name === 'Year' && yearTapOption}
					{name === 'Size' && sizeTapOption}
				</div>
			)}
		</div>
	)
}

export default FilterTab
