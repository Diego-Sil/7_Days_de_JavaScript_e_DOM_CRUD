let form = document.querySelector('.js-form');
let tabela = document.querySelector('.js-table');
let arrPessoa = [];

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
  tdNome.textContent = pessoa.nome
  tdDateNasc.textContent = pessoa.dataNascimento
  const trElemento = document.createElement('tr')
  trElemento.appendChild(tdNome)
  trElemento.appendChild(tdDateNasc)
  tabela.appendChild(trElemento)
}