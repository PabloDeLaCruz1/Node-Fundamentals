let commands = require("./commands").commands

// Output a prompt
process.stdout.write('prompt > ');
var cmd
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    dataArr = data.toString().trim().split(" ");
    cmd = dataArr[0]

    if(dataArr[0] === "echo"){
        commands[cmd](dataArr);
    }else{
        commands[cmd]();
    }
    process.stdout.write("\nprompt > ");

});


