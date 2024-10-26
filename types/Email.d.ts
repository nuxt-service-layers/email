export {}

declare global {
	interface Email {
		from: string
		to: string | string[]
		subject: string
		text?: string
		html?: string
		attachments: {
			filename: string
			path: string
			cid?: string
		}[]
	}
}
