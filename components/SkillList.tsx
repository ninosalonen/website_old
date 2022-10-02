import React from 'react'
import SkillItem from './SkillItem'
import styles from '../styles/Skills.module.css'

type SkillListType = {
	heading: string
	list: string[]
}

type PropsType = {
	skillList: SkillListType
	setMoreInfo: React.Dispatch<React.SetStateAction<string>>
}

const SkillList = ({ skillList, setMoreInfo }: PropsType) => {
	return (
		<div>
			<h3>{skillList.heading}</h3>
			<ul>
				{skillList.list.map((skill) => (
					<SkillItem
						setMoreInfo={setMoreInfo}
						skill={skill}
						key={skill.split(',')[0]}
					/>
				))}
			</ul>
		</div>
	)
}

export default SkillList
