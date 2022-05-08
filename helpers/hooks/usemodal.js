import { useState } from 'react'

const useModal = () => {
	let [modal, setModal] = useState(false)
	let [modalContent, setModalContent] = useState()

	let handleModal = (content) => {
		setModal(!modal)
		if (content) {
			setModalContent(content)
		}
	}

	return { modal, handleModal, modalContent }
}

export default useModal
