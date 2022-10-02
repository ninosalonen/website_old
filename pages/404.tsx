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
			<h2>there are no secret pages...</h2>

			<h2>
				<Link href={'/'}>go home 👈🏻</Link>
			</h2>
		</div>
	)
}

export default NotFound
