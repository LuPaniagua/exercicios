// Desconto
const iPhone = 1000;
const desconto = ((iPhone * 15) / 100);

console.log(`De R$1,000.00 o seu iPhone irá sair por: ${iPhone - desconto}`);

// Conversão de temperatura
const celcius = 23;
const f = (celcius * 1.8 + 32);
console.log(f); 
console.log(`23 graus Celcius em graus Fahrenheit é igual a:R$${f}`);

// Login Simples 
const usuariocerto = "luan";
const senhacerta = "satoru";
const senha = "adalberto";
const usuario = "1234";

if (usuario === usuariocerto && senha === senhacerta){
    console.log("Acesso concedido!")
} else {
    console.log("Acesso negado, tente novamente.")
}

// Sistema de Notas
const matematica = 10;
const portugues = 5;
const quimica = 5;
const historia = 5;
const fisica = 5;

const media = (matematica + portugues + quimica + historia + fisica) / 5;
console.log(media)

if (media > 5) {
    console.log("Parabéns, você passou de ano!");
} else if (media === 5) {
    console.log("Está de recuperação.");
}
else {
    console.log("Que pena, você não passou de ano.");
}