let form = document.querySelector('.js-form');
let tabela = document.querySelector('.js-table');
let arrPessoa = JSON.parse(localStorage.getItem('pessoa')) || [];

arrPessoa.forEach((element) =>{
  criaElemento(element)
})

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let nome = form.nome.value;
  let dataNasc = form.dataNascimento.value;
  
  const pessoaAtual = {
    'nome': nome,
    'dataNascimento': dataNasc    
  }
 
  salvaLocalmente(pessoaAtual)
  criaElemento(pessoaAtual)
  limpaCampos()
});

function salvaLocalmente(pessoa){
  arrPessoa.push(pessoa)
  localStorage.setItem('pessoa',JSON.stringify(arrPessoa))  
}

function limpaCampos(){
  nome.value = ''
  dataNascimento.value = ''
}

function criaElemento(pessoa){
  const tdNome = document.createElement('td')
  const tdDateNasc = document.createElement('td')
  tdNome.innerHTML = pessoa.nome
  tdDateNasc.innerHTML = pessoa.dataNascimento
  const btnAtualiza = document.createElement('button')
  btnAtualiza.innerHTML = 'Atualiza'
  const trElemento = document.createElement('tr')
  trElemento.appendChild(tdNome)
  trElemento.appendChild(tdDateNasc)
  trElemento.appendChild(btnAtualiza)
  tabela.appendChild(trElemento)
}
