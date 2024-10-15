// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Digite a String: `, str => {
  const quantA = str.split('');

  let counter = 0

  for (const i of quantA) {
    if (i === 'a' || i === 'A') {
        counter++
    }
  }

  if (counter != 0) {
    console.log(`A letra 'A' ou 'a' aparece ${counter} vezes na String.`)
  } else {
    console.log("Não existem letras 'A' ou 'a' na String.")
  }
  

  rl.close();
});