import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/Modal.module.css'

type PropsType = {
	moreInfo: string
	setModalText: React.Dispatch<React.SetStateAction<string>>
}

const Modal = ({ moreInfo, setModalText }: PropsType) => {
	const ref = useRef<HTMLButtonElement>(null)

	const [reverse, setReverse] = useState(false)
	const [key, setKey] = useState(1)

	const modalExit = () => {
		setReverse(true)
		setKey(key + 1)
		setTimeout(() => {
			setModalText('')
		}, 300)
	}

	useEffect(() => {
		setReverse(false)
		ref.current?.focus()
		const showingModal = moreInfo.length > 0

		const onScroll = () => {
			if (showingModal) {
				modalExit()
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [moreInfo])

	return (
		<>
			{moreInfo.length > 0 && (
				<>
					<div
						key={key + 1}
						className={`${styles.modal__backdrop} ${
							reverse ? styles.reverseAnimation : ''
						}`}
						onClick={modalExit}
					></div>
					<div
						key={key}
						className={`${styles.modal__content} ${
							reverse ? styles.reverseAnimation : ''
						}`}
					>
						<button className={styles.content__focusBtn} ref={ref}></button>
						<button className={styles.content__closeBtn} onClick={modalExit}>
							✕
						</button>
						<h4>{moreInfo.split(':')[0]}</h4>
						<p>{moreInfo.substring(moreInfo.indexOf(':') + 1)}</p>
					</div>
				</>
			)}
		</>
	)
}

export default Modal
