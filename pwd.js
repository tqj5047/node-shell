// module.export = process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim()
//   if (cmd === 'pwd') {
//     process.stdout.write(process.cwd())

let bash = require("./bash")

//     process.stdout.write('\nprompt > ')
//   }
// })

// let cwd = process.stdout.write(process.cwd())
// module.export = cwd;

module.exports = function (done) {
  bash.done(process.cwd())
}
