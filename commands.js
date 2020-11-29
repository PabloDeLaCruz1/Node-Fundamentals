let fs = require("fs")
const request = require('request');


let commands = {
    pwd: () => {
        return process.stdout.write(process.env.PWD)
    },
    date: () => {
        var date = new Date();
        return process.stdout.write(date.toString());
    },
    ls: () => {
        //can use readdirSync but this is good practice
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                process.stdout.write(file.toString() + "\n");
            })
        });
    },
    echo: (data) => {
        process.stdout.write(data.slice(1).join(" ").toString());
    },
    curl: () => {

    }
}

module.exports = {
    commands: commands
}