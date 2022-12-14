let form = document.querySelector('.js-form');
let tabela = document.querySelector('.js-table');
let arrPessoa = JSON.parse(localStorage.getItem('pessoa')) || [];
let idModificador

arrPessoa.forEach((element) =>{
  criaElemento(element)
})

form.addEventListener('submit',(evento)=>{
  evento.preventDefault()

  const nome = evento.target.elements['nome']
  const dataNasc = evento.target.elements['dataNascimento']
  const existe = arrPessoa.find( elemento => elemento.id === parseInt(idModificador) )

  let dataEscolhida = new Date(dataNasc.value);
  let dataFormatada = (`${dataEscolhida.getDate()+1}/${dataEscolhida.getMonth()+1}/${dataEscolhida.getFullYear()}`)
  console.log(dataFormatada)

  const pessoaAtual = {
    'nome': nome.value,
    'dataNascimento': dataFormatada,
    'id': idModificador
  }
  
  if (existe) {
    pessoaAtual.id = existe.id
    atualizaElemento(pessoaAtual)
    arrPessoa[arrPessoa.findIndex(elemento => elemento.id === existe.id)] = pessoaAtual
  }else {
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


function limpaCampos(){
  nome.value = ''
  dataNascimento.value = ''
  idModificador = ''
}



function criaBotaoAtualiza(id){
  const btnAtualiza = document.createElement('button')
  btnAtualiza.innerHTML = 'Atualiza'
  btnAtualiza.classList.add('botao')
  btnAtualiza.classList.add('atualiza')
  btnAtualiza.addEventListener('click', function(){
    exibePessoa(this.parentNode)
  })
  return btnAtualiza
}

function exibePessoa(tag){
  const nomeElemento = tag.childNodes[0].textContent
  const dataNascElemento =  tag.childNodes[1].textContent
  form.nome.value = nomeElemento;
  form.dataNascimento.value = dataNascElemento;
  idModificador=tag.dataset.id
}

function criaElemento(pessoa){
  const tdNome = document.createElement('td')
  tdNome.classList.add('nome-js')
  tdNome.classList.add('nome')
  const tdDateNasc = document.createElement('td')
  tdDateNasc.classList.add('dataNasc-js')
  tdDateNasc.classList.add('dataNasc')
  tdNome.innerHTML = pessoa.nome
  tdDateNasc.innerHTML = pessoa.dataNascimento
  const trElemento = document.createElement('tr')
  trElemento.appendChild(tdNome)
  trElemento.appendChild(tdDateNasc)
  trElemento.dataset.id = pessoa.id
  trElemento.appendChild(criaBotaoAtualiza(pessoa.id))
  trElemento.appendChild(criaBotaoDeleta(pessoa.id))
  tabela.appendChild(trElemento)
}

function atualizaElemento(pessoa){
  document.querySelector("[data-id='"+pessoa.id+"']>.dataNasc-js").innerHTML= pessoa.dataNascimento
  document.querySelector("[data-id='"+pessoa.id+"']>.nome-js").innerHTML= pessoa.nome
}

function criaBotaoDeleta(id){
  const btnDeleta = document.createElement('button')
  btnDeleta.innerHTML = 'Deletar'
  btnDeleta.classList.add('botao')
  btnDeleta.classList.add('deleta')
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