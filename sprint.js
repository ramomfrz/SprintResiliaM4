import input from 'input'; // IMPORT BIBLIOTECA INPUT P/ INTERACAO CONSOLE
import chalk from 'chalk';// IMPORT BIBLIOTECA PARA COLORIR MSGS DO CONSOLE

async function inputUser() {

    let arr = [];
    let propiedadeCSS;

    do {
        propiedadeCSS ? arr.push(propiedadeCSS) : '';

        propiedadeCSS = (await input.text(chalk.red('Digite uma propriedade CSS: '))).toLowerCase();

    } while (propiedadeCSS != 'sair');
    arr = arr.sort();
    for (let i = 0; i < arr.length; i++) {
        console.log(chalk.yellow(`Suas propriedades do CSS são: ${chalk.green(arr[i])}`));
    }
}

inputUser();
