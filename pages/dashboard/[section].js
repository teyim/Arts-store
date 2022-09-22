import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useStore } from 'helpers/store'

function Dashboard() {
	const router = useRouter()
	const { section } = router.query
	const userData = useStore((state) => state.userData)
	console.log(userData)

	return (
		<div className='border-y border-black py-12 px-8'>
			<h1 className='text-center text-3xl md:text-4xl text-gray-800'>
				Hi! {userData.firstName} {userData.lastName}
			</h1>

			<div className='border-b border-gray-200 dark:border-gray-700 mt-4'>
				<ul className='flex flex-wrap -mb-px text-2xl text-center text-gray-700 '>
					<li className='mr-2'>
						<Link passHref href='/dashboard/profile'>
							<a
								className={`inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-800  group ${
									section === 'profile' ? 'text-gray-800 border-gray-700' : ''
								}`}
							>
								My profile
							</a>
						</Link>
					</li>
					<li classNasme='mr-2'>
						<Link passHref href='/dashboard/saves'>
							<a
								className={`inline-flex py-4 mx-6 rounded-t-lg border-b-2 border-transparent hover:text-gray-800 group ${
									section === 'saves' ? 'text-gray-800 border-gray-700' : ''
								}`}
							>
								Saves and Follows
							</a>
						</Link>
					</li>
					<li className='mr-2'>
						<Link passHref href='/dashboard/orders'>
							<a
								className={`inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-800  group ${
									section === 'orders' ? 'text-gray-800 border-gray-700' : ''
								}`}
							>
								My Orders
							</a>
						</Link>
					</li>
				</ul>
			</div>

			<div className='px-6 py-12'>
				{section === 'profile' && <h1>My profile</h1>}
				{section === 'saves' && <h1>saves and follows</h1>}
				{section === 'orders' && <h1>Orders</h1>}
			</div>
		</div>
	)
}

export default Dashboard
