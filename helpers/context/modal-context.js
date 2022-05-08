import React from 'react'
import useModal from 'helpers/hooks/usemodal'
import Modal from 'components/layout/modal/modal'

let ModalContext
let { Provider } = (ModalContext = React.createContext())

let ModalProvider = ({ children }) => {
	let { modal, handleModal, modalContent } = useModal()
	return (
		<Provider value={{ modal, handleModal, modalContent }}>
			<Modal />
			{children}
		</Provider>
	)
}
export { ModalContext, ModalProvider }
