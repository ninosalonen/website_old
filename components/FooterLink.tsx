import React from 'react'
import styles from '../styles/Footer.module.css'

type PropsType = {
	href: string
	ariaLabel: string
	d: string
}

const FooterLink = (props: PropsType) => {
	return (
		<a
			className={styles.linkContainer__link}
			href={props.href}
			target={'_blank'}
			aria-label={props.ariaLabel}
			rel="noreferrer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="36"
				height="36"
				viewBox="0 0 24 24"
			>
				<path d={props.d} />
			</svg>
		</a>
	)
}

export default FooterLink
