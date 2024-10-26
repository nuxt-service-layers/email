export {};

declare global {
    interface MailerConfig {
        /**
         * The mail server host address.
         * Example: "smtp.eu.mailgun.org"
         */
        host: string;

        /**
         * The port number to connect to the mail server.
         * Common SMTP port numbers are 25, 465, or 587.
         */
        port: number;

        /**
         * Authentication details for the mail server.
         */
        auth: {
            /**
             * The username or email address used for authentication.
             */
            user: string;

            /**
             * The password associated with the username for authentication.
             * This should be kept secure and not exposed in client-side code.
             */
            pass: string;
        };
    }
}
