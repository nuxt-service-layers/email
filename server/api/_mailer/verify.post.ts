import nodemailer from "nodemailer"

export default eventHandler(async (event) => {
	const config = useRuntimeConfig()

	const transporter = nodemailer.createTransport(config.MAILER_CONFIG)

	transporter.verify((error, success) => {
		if (error) {
			console.warn(
				"\x1b[31m",
				"An error occurred while trying to establish connection to the email server:",
				error,
				"\x1b[0m",
			)
		} else {
			console.log("\x1b[32m", "[email-connection] Email Server Connected.", "\x1b[0m")
		}
	})
})
