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
let relatorio = '';
//   let infor em/dentro de cliente
for (let info in cliente){
//   typeof - mostra o valor
//  validação
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue;
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}`
    }
}
function filtroDepen (obj){
//   tras todas as chaves do Objeto.
    const propsClientes = Object.keys(obj);
    console.log(propsClientes);
//  Filtro INCLUSO && verificação se tem dependentes.
    if(propsClientes.includes('dependente')){
        console.log(`Oferta de seguro de vida para ${obj.nome}
        `);
    }
}
console.log(Object.values(cliente));
//   tras os objetos com os indices
console.log(Object.entries(cliente));
filtroDepen(cliente);