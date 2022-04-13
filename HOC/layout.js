import Navbar from 'components/layout/navbar/navbar'
import Footer from 'components/layout/footer'

function Layout(props) {
	return (
		<div className='flex flex-col justify-between h-screen font-Vollkorn text-slate-800'>
			<Navbar />
			{props.children}
			<Footer />
		</div>
	)
}

export default Layout
