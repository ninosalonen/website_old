import type { CmsPropsType } from '../types/cms'
import React, { useState } from 'react'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Footer from './Footer'
import Modal from './Modal'

const Main = (props: CmsPropsType) => {
	const [moreInfo, setMoreInfo] = useState('')
	return (
		<>
			<Modal moreInfo={moreInfo} setMoreInfo={setMoreInfo} />

			<main>
				<About about={props.about} />
				<Skills
					setMoreInfo={setMoreInfo}
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
