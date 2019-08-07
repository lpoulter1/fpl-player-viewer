const rp = require('request-promise');

exports.bootstrapStatic = (req, res) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET');

  const options = {
    uri: "https://fantasy.premierleague.com/api/bootstrap-static/",
    json: true
  };

  rp(options)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).send('Error', err);
    });
};