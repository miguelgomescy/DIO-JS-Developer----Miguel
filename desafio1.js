/*
Calcular valor de uma viagem

3 var's:
1- Preço do combustível
2- Gasto médio de combustível do carro por KM
3- Distância em km da viagem

Para fazer arrendodamento .toFixed(2) | Só duas casas decimais
*/

const precoCombustível = 4.89;
let distancia = 3000;
let kmPorLitro = 10; //10k/1L
let consumo = distancia/kmPorLitro;

let valorGasto = consumo * precoCombustível;



console.log("Você fez uma viagem de: "+ distancia + "km. " 
+ "E seu gasto foi de: " + valorGasto)


