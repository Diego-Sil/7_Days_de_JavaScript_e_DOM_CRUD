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
    'dataNascimento': dataNasc,
    'id': ''
  }
  const existe = arrPessoa.find( elemento => elemento.id === pessoaAtual.id )

  if (existe) {
    pessoaAtual.id = existe.id
    
    atualizaElemento(pessoaAtual)

    arrPessoa[arrPessoa.findIndex(elemento => elemento.id === existe.id)] = pessoaAtual
} else {
    pessoaAtual.id = arrPessoa[arrPessoa.length -1] ? (arrPessoa[arrPessoa.length-1]).id + 1 : 0;
    criaElemento(pessoaAtual)
    arrPessoa.push(pessoaAtual)
  }
  
  salvaLocalmente(pessoaAtual)
  limpaCampos()
});

function salvaLocalmente(){
  localStorage.setItem('pessoa',JSON.stringify(arrPessoa))  
}

function atualizaElemento(pessoa){
  document.querySelector("[data-id='"+pessoa.id+"']").innerHTML = pessoa.nome
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
  const trElemento = document.createElement('tr')
  trElemento.appendChild(tdNome)
  trElemento.appendChild(tdDateNasc)
  trElemento.dataset.id = pessoa.id
  trElemento.appendChild(criaBotaoAtualiza(pessoa))
  trElemento.appendChild(criaBotaoDeleta(pessoa.id))

  tabela.appendChild(trElemento)
}

function criaBotaoAtualiza(pessoa){
  const btnAtualiza = document.createElement('button')
  btnAtualiza.innerHTML = 'Atualiza'
  btnAtualiza.addEventListener('click', function(){
    exibePessoa(pessoa)
  })
  return btnAtualiza
}

function exibePessoa(pessoa){
  form.nome.value = pessoa.nome;
  form.dataNascimento.value = pessoa.dataNascimento;
  pessoa.id.value = pessoa.id
  console.log(pessoa)
}

function criaBotaoDeleta(id){
  const btnDeleta = document.createElement('button')
  btnDeleta.innerHTML = 'Deletar'
  btnDeleta.addEventListener('click', function(){
    deletaElemento(this.parentNode,id)
  })
  return btnDeleta
}

function deletaElemento(tag, id){
  tag.remove()
  arrPessoa.splice(arrPessoa.findIndex(elemento => elemento.id === id), 1)

  localStorage.setItem('pessoa',JSON.stringify(arrPessoa))  
}