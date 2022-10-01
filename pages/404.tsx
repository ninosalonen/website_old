import React from 'react'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div
			style={{
				backgroundColor: 'black',
				color: 'white',
				textDecoration: 'none',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<h1>Page not found :(</h1>

			<h2>
				<Link href={'/'}>back to home</Link>
			</h2>
		</div>
	)
}

export default NotFound
