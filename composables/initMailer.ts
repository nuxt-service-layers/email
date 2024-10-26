// Composables used to globally exposing the `mailer` object.

class Mailer {
	/**Verify connection status to your SMTP server. */
	async verify() {}

	async send(email: Email) {
		await useFetch("/_mailer", {
			method: "POST",
			body: {
				email,
			},
		})
	}
}

/**This is the main mailer object. This gives you full control over the mailing capabilities */
let $Mailer: Mailer

/**Set up mailer instance on spinup. */
export function initMailer() {
	$Mailer = new Mailer() as Mailer
}

export { $Mailer }
