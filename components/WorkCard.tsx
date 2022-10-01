import type { WorkType } from '../types/cms'
import React from 'react'
import styles from '../styles/Work.module.css'

type PropsType = {
	item: WorkType
}

const WorkCard = ({ item }: PropsType) => {
	return (
		<a
			href={item.link}
			target={'_blank'}
			aria-label={`Link to ${item.title}`}
			rel="noreferrer"
			key={item.title}
			style={{ background: item.color }}
			className={`${styles.workCard} ${
				item.isDark ? styles.dark : styles.light
			}`}
			data-aos="zoom-in"
			data-aos-duration="600"
		>
			<h3>{item.title}</h3>
			<p className={styles.workCard__description}>{item.description}</p>
		</a>
	)
}

export default WorkCard
