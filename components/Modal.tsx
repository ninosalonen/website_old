import React, { useEffect, useRef } from 'react'
import styles from '../styles/Modal.module.css'

type PropsType = {
	moreInfo: string
	setMoreInfo: React.Dispatch<React.SetStateAction<string>>
}

const Modal = ({ moreInfo, setMoreInfo }: PropsType) => {
	const ref = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		ref.current?.focus()

		const onScroll = () => {
			if (moreInfo.length > 0) setMoreInfo('')
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [moreInfo])

	return (
		<>
			{moreInfo.length > 0 && (
				<>
					<div
						className={styles.modal__backdrop}
						onClick={() => setMoreInfo('')}
					></div>
					<a className={styles.modal__content}>
						<button className={styles.modal__focus} ref={ref}></button>
						<button className={styles.modal__x} onClick={() => setMoreInfo('')}>
							✕
						</button>
						<h4>{moreInfo.split(',')[0]}</h4>
						<p>{moreInfo.split(',')[1]}</p>
					</a>
				</>
			)}
		</>
	)
}

export default Modal
