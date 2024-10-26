import nodemailer from "nodemailer";

export default eventHandler(async (event) => {
    const config = useRuntimeConfig();

    if (!config.MAILER_HOST) {
        throw createError({
            statusCode: 400,
            statusMessage: "Please add MAILER_HOST to your .env file.",
        });
    }

    if (!config.MAILER_PORT) {
        throw createError({
            statusCode: 400,
            statusMessage: "Please add MAILER_PORT to your .env file.",
        });
    }

    if (!config.MAILER_USER) {
        throw createError({
            statusCode: 400,
            statusMessage: "Please add MAILER_USER to your .env file.",
        });
    }

    if (!config.MAILER_PASS) {
        throw createError({
            statusCode: 400,
            statusMessage: "Please add MAILER_PASS to your .env file.",
        });
    }

    const mailerConfig = {
        host: config.MAILER_HOST,
        port: config.MAILER_PORT,

        auth: {
            user: config.MAILER_USER,
            pass: config.MAILER_PASS,
        },
    } as MailerConfig;

    const transporter = nodemailer.createTransport(config);
});
