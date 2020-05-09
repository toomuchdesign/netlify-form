const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  console.log('data', data);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'me@andreacarraro.it',
    from: data.from,
    subject: 'Message from Netlify form',
    text: data.message,
  };
  sgMail
    .send(msg)
    .then(([res]) => {
      callback(null, {statusCode: res.statusCode, body: res.body});
    })
    .catch(err => callback(err, null));
};
