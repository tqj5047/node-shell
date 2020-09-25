const request = require('request');

let url = require('./bash.js')
const options = {
  url: url.cute,
  method: 'GET'

}
module.exports = function () {
  request(options, (err, response, body) => {
    if (err) {
      return console.log(err);
    }
    process.stdout.write(body.toString())
    process.stdout.write('\nprompt > ')
  })
}


