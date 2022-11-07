    // Classe Sempre começa com Letra  MAIUSCULA
    class Cliente{
        constructor(nome,email,cpf,saldo){
            this.nome = nome
            this.email = email
            this.cpf = cpf
            this.saldo = saldo
        }
        //Comportanto
        depositar(valor){
            this.saldo += valor
        }
        exibirSaldo(){
            console.log(this.saldo)
        }
    }
    const Pedro = new Cliente('Pedro','pedrogame@.com','12345678',100);
    
    Pedro.exibirSaldo();

    console.log(Pedro);
    