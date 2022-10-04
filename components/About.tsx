import type { AboutType } from '../types/cms'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

type LoaderProps = {
	src: string
}

type PropsType = {
	about: AboutType
}

const myLoader = ({ src }: LoaderProps) => {
	return `https:${src}`
}

const About = ({ about }: PropsType) => {
	return (
		<div className={styles.about}>
			<div className={styles.about__imageWrapper}>
				<Image
					src={about.avatar.fields.file.url}
					alt=""
					loader={myLoader}
					layout="fill"
					objectFit="cover"
					priority={true}
				/>
			</div>
			<div className={styles.about__textWrapper}>
				<h1>About me</h1>
				<p>{about.aboutMe}</p>
			</div>
		</div>
	)
}

export default About
