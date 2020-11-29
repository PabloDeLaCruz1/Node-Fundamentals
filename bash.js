let commands = require("./commands").commands
console.log(commands);
// Output a prompt
process.stdout.write('prompt > ');
var cmd
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    cmd = data.toString().trim(); // remove the newline
    commands[cmd]();
    process.stdout.write('\nprompt > ');

});