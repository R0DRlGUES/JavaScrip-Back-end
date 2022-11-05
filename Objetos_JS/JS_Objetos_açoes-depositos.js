const cliente = {
    nome:'Lucas',
    idade:32,
    cpf:'123.466.864-23',
    email:'lucasMilGrau@email.com',
    fones:["993444234", "995345622"],
    dependente:[{
        nome:'Astolfo',
        parentesco:'filho',
        dataNas:'20/03/2011'},
        {
        nome:'Clarinha SF',
        parentesco:'filha',
        dataNas:'04/12/2014'
        }
    ],
    saldo:100,
    depositar: function(valor){
    //  isso - esse objeto - essa insatncio 
        this.saldo += valor
    }
}
console.log(cliente.saldo);
//       Metodo
cliente.depositar(30);
console.log(cliente.saldo);
