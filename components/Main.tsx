import type { CmsPropsType } from '../types/cms'
import React from 'react'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Footer from './Footer'

const Main = (props: CmsPropsType) => {
	return (
		<>
			<main>
				<About about={props.about} />
				<Skills
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
