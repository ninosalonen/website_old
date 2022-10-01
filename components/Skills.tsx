import React, { useState } from 'react'
import styles from '../styles/Skills.module.css'
import type { SkillsType } from '../types/cms'
import SkillList from './SkillList'

type PropsType = {
	aboutSkills: string
	skillsLists: SkillsType[]
}

const sortArray = (array: SkillsType[]) => {
	return array.sort((a, b) => a.order - b.order)
}

const Skills = ({ aboutSkills, skillsLists }: PropsType) => {
	const [moreInfo, setMoreInfo] = useState('')

	const sortedSkillsLists = sortArray(skillsLists)
	return (
		<>
			{moreInfo.length > 1 && (
				<>
					<div
						className={styles.moreInfo__backdrop}
						onClick={() => setMoreInfo('')}
					></div>
					<div className={styles.moreInfo__content}>
						<button
							className={styles.moreInfo__x}
							onClick={() => setMoreInfo('')}
						>
							✕
						</button>
						<h4>{moreInfo.split(',')[0]}</h4>
						<p>{moreInfo.split(',')[1]}</p>
					</div>
				</>
			)}
			<div className={styles.skills}>
				<h2>My skills</h2>
				<p className={styles.skills__description}>{aboutSkills}</p>
				<div className={styles.skills__lists}>
					{sortedSkillsLists.map((skillList) => (
						<SkillList
							setMoreInfo={setMoreInfo}
							skillList={skillList}
							key={skillList.heading}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Skills
