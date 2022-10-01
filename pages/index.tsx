import React from 'react'
import type { NextPage } from 'next'
import { CmsPropsType } from '../types/cms'
import { client } from '../services/client'
import Head from 'next/head'
import Main from '../components/Main'

const Home: NextPage<CmsPropsType> = (props: CmsPropsType) => {
	return (
		<>
			<Head>
				<title>Nino Salonen</title>
				<meta
					name="description"
					content="Nino's portfolio site made using Next.js and Contentful CMS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main {...props} />
		</>
	)
}

export async function getStaticProps() {
	const work = await client.getEntries({ content_type: 'work' })
	const about = await client.getEntries({ content_type: 'about' })
	const skills = await client.getEntries({ content_type: 'skills' })

	return {
		props: {
			work: work.items.map((item) => item.fields),
			about: about.items[0].fields,
			skills: skills.items.map((item) => item.fields),
		},
	}
}

export default Home
