const sgMail = require('@sendgrid/mail');
const SENDER_EMAIL = 'hi@andreacarraro.it';

function sendEmail({to, subject, replyTo, text}) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    from: SENDER_EMAIL, // Validated address
    to,
    replyTo,
    subject,
    text,
  };

  return sgMail
    .send(msg)
    .then(([res]) => ({statusCode: res.statusCode, body: res.body}));
}

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);

  // @TODO validate data
  if (data.spam) {
    callback(new Error('Validation error'));
    return;
  }

  const emailUser = sendEmail({
    to: data.from,
    replyTo: SENDER_EMAIL,
    subject: `Message received [TBD]`,
    text: 'Message received. Thank you message [TBD]',
  });

  const emailOwner = sendEmail({
    to: SENDER_EMAIL,
    replyTo: data.from,
    subject: `[project-name] message from ${data.from}`,
    text: data.message,
  });

  // NOTE consider catching only emailUser error
  Promise.all([emailUser, emailOwner])
    .then(([emailUserResponse]) => callback(null, emailUserResponse))
    .catch(errors => callback(errors, null));
};
