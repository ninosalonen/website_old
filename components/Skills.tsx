import React, { useMemo } from 'react'
import styles from '../styles/Skills.module.css'
import type { SkillsType } from '../types/cms'
import SkillList from './SkillList'

type PropsType = {
	aboutSkills: string
	skillsLists: SkillsType[]
	setMoreInfo: React.Dispatch<React.SetStateAction<string>>
}

const sortArray = (array: SkillsType[]) => {
	return array.sort((a, b) => a.order - b.order)
}

const Skills = ({ aboutSkills, skillsLists, setMoreInfo }: PropsType) => {
	const sortedSkillsLists = useMemo(() => sortArray(skillsLists), [skillsLists])

	return (
		<>
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
