function cliente (nome, cpf, email, saldo){
//  Função construtora
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
const andre = new cliente('andre','09809512345','andrezinhoGG@gameplay.com','100');
console.log(andre)








