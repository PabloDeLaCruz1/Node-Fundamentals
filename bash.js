let commands = require("./commands").commands

// Output a prompt
process.stdout.write('prompt > ');
let cmd
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    dataArr = data.toString().trim().split(" ");
    cmd = dataArr[0]

    if(dataArr.length > 1){
        commands[cmd](dataArr);
    }else{
        commands[cmd]();
    }
    process.stdout.write("\nprompt > ");

});


//Refactoring
let done = function(output) {
    // show the output
    // show the prompt
  }