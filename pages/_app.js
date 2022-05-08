import '../styles/globals.css'
import Layout from 'HOC/layout'
import { ModalProvider } from 'helpers/context/modal-context'

function MyApp({ Component, pageProps }) {
	return (
		<ModalProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ModalProvider>
	)
}

export default MyApp
