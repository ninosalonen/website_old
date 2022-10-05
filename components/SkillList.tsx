import React from 'react'
import SkillItem from './SkillItem'
import styles from '../styles/Skills.module.css'

type SkillListType = {
	heading: string
	list: string[]
}

type PropsType = {
	skillList: SkillListType
	setModalText: React.Dispatch<React.SetStateAction<string>>
}

const SkillList = ({ skillList, setModalText }: PropsType) => {
	return (
		<div className={styles.listsContainer__list}>
			<h3>{skillList.heading}</h3>
			<ul>
				{skillList.list.map((skill) => (
					<SkillItem
						setModalText={setModalText}
						skill={skill}
						key={skill.split(',')[0]}
					/>
				))}
			</ul>
		</div>
	)
}

export default SkillList
