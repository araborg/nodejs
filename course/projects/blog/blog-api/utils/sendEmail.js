const nodemail = require("nodemailer");

const { senderEmail, emailPassword } = require("../config/keys");

const sendEmail = async ({ emailTo, subject, code, content }) => {
	const transporter = nodemail.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		// auth: { user: "hironse.96@gmail.com", pass: "" },
		auth: {
			user: senderEmail,

			pass: emailPassword,
		},
	});

	const message = {
		to: emailTo,
		subject: subject,
		html: `
            <div>
            
                <h3>Use this below code to ${content}</h3>

                <p><strong>Code: </strong> ${code}</p>

                <p>Dear Friend </p>
 
                <p><strong>Congratulations!</strong></p>

                <p> I am happy to inform you that you have been accepted 
                into Techy Jaunt Cohort 8.0 scholarship program to begin 
                a career in Tech. You have been offered a 95% Funded 
                scholarship and access to the virtual campus will be sent 
                after your acceptance. </p>
 
                <p> From over 30,000+ applications submissions received 
                from young and promising African talents resident across 
                the globe, you are choosing as one of the selected few; 
                (With all the big smiles in the world, we officially 
                welcome you into the Techy Jaunt family) </p>
 
                <p> We have seniors and mentors across different fields 
                such as Product Management, Data Analysis, UI & UX, 
                Frontend, Backend Development, Blockchain Web development , 
                Cybersecurity, Digital Marketing, AI/ Machine Learning, 
                Ethical Hacking, Data Science, Virtual Assistant & brand 
                design waiting to mentor you. </p>

            </div>
        `,
	};

	await transporter.sendMail(message);
};

module.exports = sendEmail;
