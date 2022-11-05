const cliente = {
    nome:'Lucas',
    idade:32,
    cpf:'123.466.864-23',
    email:'lucasMilGrau@email.com'
}
//                 0       1       2       3
const chaves = ['nome', 'idade', 'cpf', 'email'];
console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));
console.log(cliente['cinta']);//   chave errada = indefinido