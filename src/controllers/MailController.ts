import * as nodemailer from "nodemailer";
import { Request, Response } from "express";
import * as Handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
import config from "../../config";

const source = fs.readFileSync(
	path.join(__dirname, "../../templates/subscription.hbs"),
	"utf8"
);

const template = Handlebars.compile(source);

class MailController {
	private transporter: nodemailer.Transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: config.smtpHost,
			port: config.smtpPort,
			auth: {
				user: config.emailUsername,
				pass: config.emailPassword
			}
		});
	}

	sendMail({
		to,
		subject,
		content
	}: {
		to: string;
		subject: string;
		content: string;
	}) {
		let options = {
			from: config.emailUsername,
			to,
			subject,
			html: content
		};

		this.transporter.sendMail(options, (err, info) => {
			if (err)
				return console.log("error", JSON.stringify(err), { tags: "email" });
			if (info)
				return console.log("info", JSON.stringify(info), { tags: "email" });
			return null;
		});
	}

	static sendConfirmationMail = async (req: Request, res: Response) => {
		req.body.emails.split(",").forEach(recipient => {
			// You can perform the database call here to check for the usernames for each user and add them to the handlebars context

			const options = {
				to: recipient.trim(),
				subject: "Subscription",
				content: template(req.body.locals)
			};

			const mailer = new MailController();

			mailer.sendMail(options);
			// setTimeout(() => console.log(`${recipient} Email Sent`), 5000);
		});

		return res.status(200).json({
			message: "Successfully sent Emails"
		});
	};
}

export default MailController;
