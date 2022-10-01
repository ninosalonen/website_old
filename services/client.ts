import { createClient } from 'contentful'

export const client = createClient({
	space: process.env.SPACE_ID || 'null',
	accessToken: process.env.ACCESS_TOKEN || 'null',
})
