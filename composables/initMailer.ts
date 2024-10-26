// import Mailer from "./mailer"

/**This is the main mailer object. This gives you full control over the mailing capabilities */
let $Mailer: MailerInstance

/**Set up mailer instance on spinup. */
export function initMailer() {
	$Mailer = new Mailer() as MailerInstance
}

export { $Mailer }
