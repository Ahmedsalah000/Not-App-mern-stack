import nodemailer from 'nodemailer';

// Nodemailer
const sendEmail = async (options) => {
  // 1) Create transporter ( service that will send email like "gmail","Mailgun", "mialtrap", sendGrid)
  const transporter = nodemailer.createTransport({// The transporter is responsible for sending the email and requires configuration options like host, port, authentication credentials,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT, // if secure false port = 587, if true port= 465
    secure: true,//The secure option is set to true to indicate that the connection should use TLS/SSL.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define email options (like from, to, subject, email content)
  const mailOpts = {
    from: 'E-shop App <zadkreet@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Send email
  await transporter.sendMail(mailOpts);
 // The await keyword is used to wait for the email to be sent before continuing execution.
  // Since sendMail returns a Promise, await ensures that the function waits for the Promise to resolve
  // (i.e., for the email to be sent) before proceeding.
};

export default sendEmail;
