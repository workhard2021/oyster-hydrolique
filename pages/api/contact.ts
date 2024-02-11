// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  if (req.method !== "POST") {
		res.status(405).json({ message: "INVALID_METHOD" });
		return;
	}
	// Variables
	const { first_name, last_name, email, tel, message} = req.body;

	if (!first_name || !last_name || !email || !message) {
		res.status(400).json({ message: "INVALID_PARAMETER" });
		return;
	}

	// Syntaxe adresse email
	const pattern =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!pattern.test(email)) {
		res.status(400).send({
			message: "EMAIL_SYNTAX_INCORRECT",
		});
		return;
	}

	// Transformer les retours à la ligne pour le HTML
	const contenu = message
		.replace(/\n/g, "<br>")
		.replace(/\r/g, "<br>")
		.replace(/\t/g, "<br>")
		.replace(/<(?!br\s*\/?)[^>]+>/g, ""); // supprime tout le html en autorisant uniquement les balises <br>

	// Donner la clé API
	sgMail.setApiKey(process.env.API_KEY_SENDGRID||'');

	// Création du message
	const sendGridMail = {
		to: email,
		from: "it@oyster-technology.com",
		templateId:"d-2b323234427f4cd79d5fb2ca08a5e29d",
		dynamic_template_data: {
            tel:tel,
            email:email,
			first_name:first_name,
      last_name:last_name,
			message: contenu,
		},
	};
	// SendGrid
	(async () => {
		try {
			await sgMail.send(sendGridMail);
			return res.status(200).json({
				message: "EMAIL_SENDED_SUCCESSFULLY",
			});
		} catch (e){
			res.status(500).json({
				message: "ERROR_WITH_SENDGRID",
			});
			return;
		}
	})();
}
