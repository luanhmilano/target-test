//  1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Digite o número: `, num => {
  const number = parseInt(num, 10);

  if (isInFibonacci(number)) {
    console.log(`O número ${number} está na sequência de fibonacci.`)
  } else {
    console.log(`O número ${number} NÃO está na sequência de fibonacci.`)
  }

  rl.close();
});

function isInFibonacci(number) {
    let a = 0
    let b = 1

    while (b <= number) {
        if (b === number) {
            return true
        }

        let temp = a
        a = b
        b = temp + b
    }
    return number === 0
}