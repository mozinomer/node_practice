const function_from = require('./notes')
const chalk = require('chalk')
const write = function_from()
console.log(write)

console.log(`
CPU: ${chalk.red.bold('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);