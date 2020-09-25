//output a prompt

process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()
    if (cmd === 'pwd') {
        let pwd = require('./pwd.js');
        pwd();
        process.stdout.write('\nprompt > ')
        // process.stdout.write(pwd.toString());

    } else {
        process.stdout.write('You typed: ' + cmd)
        process.stdout.write('\nprompt > ')
    }
})

///Users/tianyingjiang/gracehopper/week1/node-shell^C
///Users/tianyingjiang/gracehopper/week1/node-shell{}
