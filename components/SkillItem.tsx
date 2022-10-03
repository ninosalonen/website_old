import React from 'react'
import styles from '../styles/Skills.module.css'

type PropsType = {
	skill: string
	setMoreInfo: React.Dispatch<React.SetStateAction<string>>
}

const SkillItem = ({ skill, setMoreInfo }: PropsType) => {
	const heading = skill.split(':')[0]
	const info = skill.substring(skill.indexOf(':') + 1)

	return (
		<li className={styles.skill}>
			<button
				className={styles.skill__button}
				onClick={() => {
					setMoreInfo(heading + ':' + info)
				}}
			>
				<h4>{heading}</h4>
			</button>
		</li>
	)
}

export default SkillItem
