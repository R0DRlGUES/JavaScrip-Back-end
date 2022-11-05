const cliente = {
    nome:'Lucas',
    idade:32,
    cpf:'123.466.864-23',
    email:'lucasMilGrau@email.com'
}
cliente.dependente = {
    nome:'Astolfo',
    parentesco:'filho',
    dataNas:'20/03/2011'
};

console.log(cliente.dependente);
cliente.dependente.nome ='Markinho God Game';// troca de filho
console.log(cliente.dependente);
