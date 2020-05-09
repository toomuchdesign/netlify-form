const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'hi@andreacarraro.it',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail
    .send(msg)
    .then((response, body) => {
      callback(null, {statusCode: response.statusCode, body});
    })
    .catch(err => callback(err, null));
};
