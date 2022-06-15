import Navbar from 'components/layout/navbar/navbar'
import Footer from 'components/layout/footer'
import { ModalProvider } from 'helpers/context/modal-context'

function Layout(props) {
	return (
		<ModalProvider>
			<div className='flex flex-col justify-between h-screen font-Vollkorn text-slate-800 box-border'>
				<Navbar />
				{props.children}
				<Footer />
			</div>
		</ModalProvider>
	)
}

export default Layout
