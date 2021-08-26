let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//exercício 1
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
}
// Exercício 2
let somaDosElementos = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaDosElementos += numbers[index]
}
console.log('A soma dos elementos é:', somaDosElementos)

//exercício 3
let media = somaDosElementos / numbers.length;

console.log('a média é:', media)

//exercício 4
if (media > 20) {
    console.log('Valor maior que 20.')
} else {
    console.log('Valor menor ou igual a 20.')
}