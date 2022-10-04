import type { WorkType } from '../types/cms'
import React from 'react'
import WorkCard from './WorkCard'
import styles from '../styles/Work.module.css'

type PropsType = {
	work: WorkType[]
	aboutWork: string
}

const Work = ({ work, aboutWork }: PropsType) => {
	return (
		<div className={styles.work}>
			<h2>My projects</h2>
			<p>{aboutWork}</p>
			<div className={styles.work__cardsContainer}>
				{work.map((item) => (
					<WorkCard key={item.title} item={item} />
				))}
			</div>
		</div>
	)
}

export default Work
