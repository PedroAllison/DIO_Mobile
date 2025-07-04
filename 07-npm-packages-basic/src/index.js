import chalk from "chalk";
import logSymbols from "log-symbols"
//-----------------------------------------------------
console.log(chalk.blue.bgGray.bold("Hello World"))
console.log(chalk.blue.bgGray.italic("Hello World"))
console.log(chalk.red("Hello World"))
console.log(chalk.green("Hello World"))
console.log(chalk.blue.bgBlack("Hello"))
//------------------------------------------------------
console.log(logSymbols.success, chalk.green.bgBlackBright("servidor iniciado com sucesso"))
console.log(logSymbols.error, chalk.red.bgWhite("servidor iniciado com problemas"))
console.log(logSymbols.info, chalk.white.bgGray("servidor iniciado?"))
console.log(logSymbols.warning, chalk.yellow.bgYellowBright("servidor necessita de atenção")) 
