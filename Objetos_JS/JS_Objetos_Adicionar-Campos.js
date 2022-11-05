const cliente = {
    nome:'Lucas',
    idade:32,
    cpf:'123.466.864-23',
    email:'lucasMilGrau@email.com'
}
console.log(cliente);

cliente.fone = '45 999848648';
console.log(cliente);

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
console.log(objPersonagem);
delete objPersonagem.aliado
console.log(objPersonagem.aliado) //undefined

const Peter_Parker = {
  nome:'Peter',
  sobrenome:'Parker',
  endereço: {
    rua:'Rua aranha manca',
    numero: 233,
    bairro:'spider',
    cidade: {
      abreviacao:'Ny',
      nomeCompleto:'Nova York'
    },
    estado:{
      abreviacao:'Ny',
      nomeCompleto:'Nova York'
    },
  },
  fone: 4563244,
  rg: 342545356-2,
  cpf: 9193919239,
  nomeFantasia:'Homem-Arnha',
  dataNasc:'12/12/2012',
  estadoSivil:'solteiro',
}

console.log(Peter_Parker)