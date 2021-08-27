let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//exercício 1
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; 

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
}

// Exercício 2
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 

let somaDosElementos = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaDosElementos += numbers[index]
}
console.log('A soma dos elementos é:', somaDosElementos)

//exercício 3
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 

let media = somaDosElementos / numbers.length;

console.log('a média é:', media)

//exercício 4
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log('Valor maior que 20.')
} else {
    console.log('Valor menor ou igual a 20.')
}

//exercício 5
//Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}

console.log('A maior número é:', maiorNumero)

//exercicio 6
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

let numeroDeImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numeroDeImpares += 1;
    }
}

if (numeroDeImpares > 0) {
    console.log('O número de ímpares é:', numeroDeImpares)
} else {
    console.log('Nenhum valor ímpar encontrado')
}

//exercicio 7
//Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

let menorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (index == 0) {
        menorNumero = numbers[index]
    } else if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
console.log('A menor número é:', menorNumero)

//exercicio 8
//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; 

let array = []

for (let index = 0; index < 25; index += 1) {
    array.push(index +1)
    console.log(array[index])
}

//exercicio 9
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2)
}