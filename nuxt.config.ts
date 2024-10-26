// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: "2024-10-23",

	runtimeConfig: {
		MAILER_CONFIG: {
			host: process.env.MAILER_HOST,
			port: process.env.MAILER_PORT,
			auth: {
				pass: process.env.MAILER_PASS,
				user: process.env.MAILER_USER,
			},
		},
	},

	extends: [["../base", { install: true }]],
})
