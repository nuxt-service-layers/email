export default eventHandler(async (event) => {
	const transporter = event.context.transporter
	const { email }: { email: Email } = await readBody(event)

	if (!email) {
		throw createError({ statusCode: 400, statusMessage: "Email not provided." })
	}

	try {
		transporter.sendMail(email)
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: `An error occured while trying to send an email: ${error}`,
		})
	}
})
