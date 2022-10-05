import type { CmsPropsType } from '../types/cms'
import React, { useState } from 'react'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Footer from './Footer'
import Modal from './Modal'

const Main = (props: CmsPropsType) => {
	const [modalText, setModalText] = useState('')
	return (
		<>
			<Modal moreInfo={modalText} setModalText={setModalText} />

			<main>
				<About about={props.about} />
				<Skills
					setModalText={setModalText}
					aboutSkills={props.about.aboutSkills}
					skillsLists={props.skills}
				/>
				<Work work={props.work} aboutWork={props.about.aboutWork} />
			</main>

			<Footer />
		</>
	)
}

export default Main
