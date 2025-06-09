// Vetor
const temperaturas = {
    Segunda: 12,
    Terca: 10,
    Quarta: 11,
    Quinta: 13,
    Sexta: 8
};
for (let dia in temperaturas) {
    console.log(`Dia da semana ${dia}: ${temperaturas[dia]}°C`);
}

let soma = 0;
let totalDias = 0;

for (let dia in temperaturas) {
    soma += temperaturas[dia];
    totalDias++;
}

const media = soma / totalDias;
console.log(`A média de temperatura da semana é ${media.toFixed(2)}°C`);

// Matriz 

const cidade = {Liverpool: [12, 8, 5],
    Veneza: [20, 15, 18],
    Atenas: [25, 20, 22]
}
console.log("A temperatura dessas cidades são", cidade);

for (let cidadeNome in cidade) {
    const temperaturas = cidade[cidadeNome];
    const somaTemperaturas = temperaturas.reduce((acc, temp) => acc + temp, 0);
    const mediaTemp = somaTemperaturas / temperaturas.length;
    console.log(`A média de temperatura de ${cidadeNome} é: ${mediaTemp.toFixed(2)}°C`);
}

// Preços vetor

let valores = [19.90, 5.50, 12.30 ,25.00,8.75];
console.log(valores);

valores.sort((a, b) => a - b);

console.log("Ordem crescente dos preços:", valores);