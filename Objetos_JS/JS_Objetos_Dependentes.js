const cliente = {
    nome:'Lucas',
    idade:32,
    cpf:'123.466.864-23',
    email:'lucasMilGrau@email.com',
    fones:["993444234", "995345622"],
    dependente:[{
        nome:'Astolfo',
        parentesco:'filho',
        dataNas:'20/03/2011'
    }]
};
cliente.dependente.push({
    nome:'Clarinha SF',
    parentesco:'filha',
    dataNas:'04/12/2014'
});
console.log(cliente.dependente)
const nova = cliente.dependente.filter((dependentes => dependentes.dataNas==='04/12/2014'));
console.log(`A filha mais nova é ${nova[0].nome}.`);

