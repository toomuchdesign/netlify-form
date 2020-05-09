const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);

  // @TODO validate data
  if (data.spam) {
    callback(new Error('Validation error'));
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    from: 'hi@andreacarraro.it', // Validated address
    to: 'me@andreacarraro.it',
    replyTo: data.from,
    subject: `Email from Netlify form from [${data.from}]`,
    text: data.message,
  };
  sgMail
    .send(msg)
    .then(([res]) => {
      callback(null, {statusCode: res.statusCode, body: res.body});
    })
    .catch(err => callback(err, null));
};
