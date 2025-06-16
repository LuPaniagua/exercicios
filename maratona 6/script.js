// Cadastro de Funcionário

class Funcionario{
    constructor(nome, cargo, salario, aumento){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.aumento = aumento;
    }
        // Método
        aumentarSalario() {
        const salarioAumentado = this.salario + (this.salario * this.aumento);
        return `Salário anterior: R$${this.salario.toFixed(2)} | Salário após aumento de ${(this.aumento * 100)}%: R$${salarioAumentado.toFixed(2)}`;
    }
        exibirInfo() {
        return `O nome do funcionário é ${this.nome}, trabalha no cargo de ${this.cargo}, e o salário é de R$${this.salario.toFixed(2)}`;
    }
}


const novoFuncionário = new Funcionario("Luan","Vice-Presidente", 10000, 0.20);
console.log(novoFuncionário.exibirInfo());
console.log(novoFuncionário.aumentarSalario());

// Sistema de Cadastro de Produtos

// Superclasse
class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    // Método
    exibirInfo() {
        return `O nome do produto é ${this.nome}, ele custa R$${this.preco} e há ${this.quantidade} no estoque.`
    }
}

// subclasse

class Alimento extends Produto{
    exibirInfo(){
        console.log("A validade desse produto é 08/25.")
    }
}

// subclasse
class Eletrodomestico extends Produto{
    exibirInfo(){
        console.log("A voltagem desse eletrodoméstico é de 220V")
    }
}

let maca = new Alimento("Maçã","R$5,00","100");
console.log(maca.nome);
console.log(maca.preco);
console.log(maca.quantidade);
maca.exibirInfo();

let microondas = new Eletrodomestico("Microondas","R$1.200,00", 200);
console.log(microondas.nome);
console.log(microondas.preco);
console.log(microondas.quantidade);
microondas.exibirInfo();