// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: "2024-10-23",

	runtimeConfig: {
		MAILER_HOST: process.env.MAILER_HOST,
		MAILER_PORT: process.env.MAILER_PORT,
		MAILER_PASS: process.env.MAILER_PASS,
		MAILER_USER: process.env.MAILER_USER,
	},
})
