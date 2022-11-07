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
    //  Novo Obejto construtor que Ultiliza o Objeto Cliente para
    //  para definir o cliente Poupança.
    function ClientePupanca(nome, cpf, email, saldo, saldoPouP){
    //    Call = Chamando as propriedades de clientes
        cliente.call(this, nome, cpf, email, saldo)
        this.saldoPouP = saldoPouP;
    }

    const ju = new ClientePupanca('ju','12345678','jujuzinha@com',100,200)
    console.log(ju);
    // Adicionar ao protótipo do objeto cliente poupança, 
    // acessando o PROTÓTIPO do cliente poupança e definindo uma função
    // acessando -> proto -> função -> adiciona um novo metodo.
    ClientePupanca.prototype.depositarPoup = function(valor){
        this.saldoPouP += valor
    }
    // chamou a instancia, o novo metodo e passou o valor
    ju.depositarPoup(400);
    console.log(ju.saldoPouP);
//##########################################################################################
    const catalogo = {
        "editora": "Casa do Código",
        "catalogo": [
        {
          "id": 50,
          "titulo": "Primeiros Passos com NodeJS",
          "autor": "João Rubens",
          "categoria": "programação",
          "versoes": ["ebook", "impresso"]
        }
       ]}
    //            descreve os atributos da propriedade editora
    console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))
/* Objetos criados de forma literal (const obj = {a: 1}) 
utilizam Object.prototype como protótipo; objetos criados
com new a partir de um construtor herdam a propriedade 
prototype de sua função construtora; Objetos criados com
Object.create()recebem como prototype o primeiro parâmetro
da função - que pode ser null.*/