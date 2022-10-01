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
		<div className={styles.skills} data-aos="fade-in">
			<h2 data-aos="fade-up">My skills</h2>
			<p className={styles.skills__description} data-aos="fade-up">
				{aboutSkills}
			</p>
			<div className={styles.skills__lists}>
				{sortedSkillsLists.map((skillList) => (
					<SkillList
						setMoreInfo={setMoreInfo}
						skillList={skillList}
						key={skillList.heading}
					/>
				))}
				{moreInfo.length > 1 && (
					<>
						<div
							className={styles.moreInfo__backdrop}
							onClick={() => setMoreInfo('')}
						></div>
						<div className={styles.moreInfo__content}>
							<button
								tabIndex={0}
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
			</div>
		</div>
	)
}

export default Skills
