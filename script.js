let form = document.querySelector(".js-form");
let tabela = document.querySelector('.js-table')


form.addEventListener("submit",(e)=>{
  e.preventDefault()
  let nome = form.nome.value;
  let dataNasc = form.dataNascimento.value;
  const novaPessoa = new pessoa (nome, dataNasc)
  tabela.appendChild(criaTr(novaPessoa))
  limpaCampos()  
});


class pessoa  {
  constructor(nome, dataNasc){
  this.nome = nome;
  this.dataNascimento = dataNasc;
  }
}

function criaTd(dado){
  const td = document.createElement('td')
  td.textContent = dado
  return td
}

function criaTr(pessoa){

  let tr = document.createElement('tr')
  tr.appendChild(criaTd(pessoa.nome))
  tr.appendChild(criaTd(pessoa.dataNascimento))
  return tr
}

function limpaCampos(){
  nome.value = ''
  dataNascimento.value = ''
}