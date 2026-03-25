const nodemail = require("nodemailer");

const sendEmail = async ({ emailTo, subject, code, content }) => {
	const transporter = nodemail.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		// auth: { user: "hironse.96@gmail.com", pass: "" },
		auth: { user: "arababs2015@gmail.com", pass: "" },
	});

	const message = {
		to: emailTo,
		subject: subject,
		html: `
            <div>
                <h3>Use this below code to </h3>
            </div>
        `,
	};
};

module.exports = sendEmail;
