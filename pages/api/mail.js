const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  // console.log(body);
  const message = `
    Name: ${body.text}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.tel}\r\n
    Message: ${body.textarea}
  `;

  sgMail.send({
    to: "info@energysolutionbd.net",
    from: "abir.it@energysolutionbd.net",
    subject: "New Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Ok" });
}
