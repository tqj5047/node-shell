const request = require('request');

let bash = require('./bash.js')

const options = {
  url: bash.cute,
  method: 'GET'

}
module.exports = function () {
  request(options, (err, response, body) => {
    if (err) {
      bash.done('Something went wrong!')
    }
    bash.done(body.toString())
    bash.done('\nprompt > ')
  })
}


