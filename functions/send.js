const https = require('https');

exports.handler = function(event, context, callback) {
  const options = {
    hostname: 'www.andreacarraro.it',
    path:
      '/scripts/contactmail.php?name=John&email=test%40gmail.com&test=Lorem&ajx=1',
    method: 'GET',
  };

  const req = https.request(options, res => {
    res.setEncoding('utf8');
    res.on('data', body => {
      callback(null, {statusCode: res.statusCode, body});
    });
  });

  req.on('error', error => {
    callback(error);
  });

  req.end();
};
