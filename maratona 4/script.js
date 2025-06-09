// Sorveteria For
 
let fechamento = 10
for(fechamento; fechamento >= 1; fechamento--){
    console.log(`Faltam ${fechamento} minutos para a sorveteria fechar.`);
} if (fechamento < 1){
    console.log("A sorveteria está fechada")
};
 
// Sorveteria While
let clientes = 0;
const maxClientes = 5;
 
if (clientes === 0){
    console.log("A sorveteria está vazia")
}
 
while (clientes < maxClientes){
    clientes++;
    console.log("Um cliente acabou de entrar.");
} if (clientes >= 5){
    console.log("A sorveteria está cheia.")
}