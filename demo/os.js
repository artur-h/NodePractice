const os = require('os');

console.log('Operational system: ', os.platform());

console.log('Processor architecture: ', os.arch());

console.log('Processors info: ', os.cpus());

console.log('Available memory: ', os.freemem());

console.log('Total memory: ', os.totalmem());

console.log('Home directory: ', os.homedir());

console.log('Up time: ', os.uptime() / 60 / 60);