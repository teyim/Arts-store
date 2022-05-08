import Portal from 'HOC/portal'

import { ModalContext } from 'helpers/context/modal-context'
import { useContext } from 'react'

function Modal() {
	let { modal, modalContent } = useContext(ModalContext)
	if (!modal) return null
	return <Portal>{modalContent}</Portal>
}

export default Modal
