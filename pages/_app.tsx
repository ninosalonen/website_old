import React, { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: 'ease-out-cubic',
			once: true,
			offset: 200,
		})
	}, [])
	return <Component {...pageProps} />
}

export default MyApp
