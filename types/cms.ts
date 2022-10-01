export type WorkType = {
	title: string
	link: string
	color: string
	description: string
	isDark?: boolean
}

export type AboutType = {
	aboutMe: string
	aboutWork: string
	aboutSkills: string
	avatar: {
		fields: {
			file: {
				url: string
			}
		}
	}
}

export type SkillsType = {
	list: string[]
	heading: string
	order: number
}

export type CmsPropsType = {
	work: WorkType[]
	about: AboutType
	skills: SkillsType[]
}
