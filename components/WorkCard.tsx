import type { WorkType } from '../types/cms'
import React from 'react'
import styles from '../styles/Work.module.css'

type PropsType = {
	item: WorkType
}

const WorkCard = ({ item }: PropsType) => {
	return (
		<a
			className={`${styles.cardsContainer__card} ${
				item.isDark ? styles.dark : styles.light
			}`}
			href={item.link}
			target={'_blank'}
			aria-label={`Link to ${item.title}`}
			rel="noreferrer"
			key={item.title}
			style={{ background: item.color }}
		>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
		</a>
	)
}

export default WorkCard
