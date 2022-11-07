/*          CLASSE
modelos usado para a criação de obejtos.

CLASSE = modelos para criação de obejtos,
saõ definidos nela as propriedades, comportamentos/metodos.

CLASSES define um modelos pra criar um Objeto 
Definida por atributos(características) e os metodos (comportamentos)
*/

class Pessoa {
    constructor(nome,sobrenome,cpf,email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }

    exbirNomeCompleto(){
        console.log(` ${this.nome} ${this.sobrenome}.`)
    }
}
/*          HERANÇA
mecanismo de O.O que permite classes Herda caracterísca de outra classe */
//   classe programador herda de pessoa     
class Programador extends Pessoa{
    constructor(nome,sobrenome,cpf,email,limguagem){
//  está chamando da classe pessoa seu construtor 
        super(nome,sobrenome,cpf,email)
        this.limguagem = limguagem
    }
}
const novoDev = new Programador('pedro','Rodrigues','pedro@ggizi.com','JavaScript');