const fs = require('fs');

let bash = require('./bash.js')

module.exports = function (done) {

    fs.readFile(bash.kitty, (err, data) => {
        if (err) bash.done('Something went wrong!')
        bash.done(data.toString())
    })

}


