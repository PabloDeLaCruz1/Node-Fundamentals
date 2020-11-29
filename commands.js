let commands = {
    pwd: () => {
        return process.stdout.write(process.env.PWD)
    },
    date: () => {
        var date = new Date();
       return process.stdout.write(date.toString());
    },
    ls: () => {
        
    }
}

module.exports = {
    commands: commands
}