import React, { useMemo } from 'react'
import styles from '../styles/Skills.module.css'
import type { SkillsType } from '../types/cms'
import SkillList from './SkillList'

type PropsType = {
	aboutSkills: string
	skillsLists: SkillsType[]
	setModalText: React.Dispatch<React.SetStateAction<string>>
}

const sortArray = (array: SkillsType[]) => {
	return array.sort((a, b) => a.order - b.order)
}

const Skills = ({ aboutSkills, skillsLists, setModalText }: PropsType) => {
	const sortedSkillsLists = useMemo(() => sortArray(skillsLists), [skillsLists])

	return (
		<section className={styles.skills}>
			<h2>My skills</h2>
			<p>{aboutSkills}</p>
			<div className={styles.skills__listsContainer}>
				{sortedSkillsLists.map((skillList) => (
					<SkillList
						setModalText={setModalText}
						skillList={skillList}
						key={skillList.heading}
					/>
				))}
			</div>
		</section>
	)
}

export default Skills
