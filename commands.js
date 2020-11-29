let fs = require("fs")


let commands = {
    pwd: () => {
        return process.stdout.write(process.env.PWD)
    },
    date: () => {
        var date = new Date();
       return process.stdout.write(date.toString());
    },
    ls: () => {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    }
}

module.exports = {
    commands: commands
}