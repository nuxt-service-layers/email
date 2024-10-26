// Composables used to globally exposing the `mailer` object.

/**This is a class for usability of the nodemailer package. Most actual usage happens server side this is just an interface for that. */
export class Mailer {
	/**Verify connection status to your SMTP server. */
	async verify() {
		await $fetch("/api/_mailer/verify", {
			method: "POST",
		})
	}

	async send(email: Email) {
		await $fetch("/api/_mailer/send", {
			method: "POST",
			body: {
				email,
			},
		})
	}
}
