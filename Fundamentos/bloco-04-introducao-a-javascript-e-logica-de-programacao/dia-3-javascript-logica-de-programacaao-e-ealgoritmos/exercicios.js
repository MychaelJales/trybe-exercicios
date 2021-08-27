
//exercicio 1
//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 

let n = 5;


let asterisco = '*';

let linhaAsterisco1 = '';

for (let index = 0; index < n ; index += 1) {
  linhaAsterisco1 += asterisco
}
for (let index = 0; index < n; index += 1) {
  console.log(linhaAsterisco1)
}

//exercicio 2
// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 
//n = 5
//
//*
//**
//***
//****
//*****

let space = ' ';

let linha2 = '';

for (let index = 1; index < n + 1; index += 1) {
  linha2 = '';
  for (let index2 = 1; index2 <= index; index2 += 1) {
    linha2 += asterisco
  }
  console.log(linha2)
}

//exercicio 3
//Agora inverta o lado do triângulo. Por exemplo: 
//n = 5
//
//    *
//   **
//  ***
// ****
//*****

let linha3 = '';

for (let index = 1; index < n + 1; index += 1) {
  linha3 = '';
  for (let index2 = 1; index2 < n + 1; index2 += 1) {
    if (index2 <= n - index) {
      linha3 += space;
    } else {
      linha3 += asterisco;
    }
  }
  console.log(linha3)
}

//exercicio 4
//Depois, faça uma pirâmide com n asteriscos de base: 
