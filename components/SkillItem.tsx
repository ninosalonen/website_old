import React from 'react'
import styles from '../styles/Skills.module.css'

type PropsType = {
	skill: string
	setModalText: React.Dispatch<React.SetStateAction<string>>
}

const SkillItem = ({ skill, setModalText }: PropsType) => {
	const heading = skill.split(':')[0]
	const info = skill.substring(skill.indexOf(':') + 1)

	return (
		<li className={styles.list__skill}>
			<button
				className={styles.skill__button}
				onClick={() => {
					setModalText(heading + ':' + info)
				}}
			>
				<h4>{heading}</h4>
			</button>
		</li>
	)
}

export default SkillItem
