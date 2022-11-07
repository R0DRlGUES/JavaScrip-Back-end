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

    class ClientePoup extends Cliente{
        constructor(nome,email,cpf,saldo,saldoPoup){
            super(nome,email,cpf,saldo)
            this.saldoPoup = saldoPoup
        }
        depositarPoup(valor){
            this.saldoPoup += valor
        }
    }
    const adre = new ClientePoup('andre','aaa.com','12342',100,300)
    console.log(adre);
    adre.depositar(5000);
    adre.depositarPoup(3000);
    console.log(adre);