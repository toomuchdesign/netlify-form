const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'me@andreacarraro.it',
    from: 'hi@andreacarraro.it',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail
    .send(msg)
    .then(([res]) => {
      callback(null, {statusCode: res.statusCode, body: res.body});
    })
    .catch(err => callback(err, null));
};
