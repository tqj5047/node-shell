// module.export = process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim()
//   if (cmd === 'pwd') {
//     process.stdout.write(process.cwd())

//     process.stdout.write('\nprompt > ')
//   }
// })

// let cwd = process.stdout.write(process.cwd())
// module.export = cwd;

module.exports = function () {
  process.stdout.write(process.cwd())
}
