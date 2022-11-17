let form = document.querySelector('.js-form');
let tabela = document.querySelector('.js-table');
let pessoas = [];

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let nome = form.nome.value;
  let dataNasc = form.dataNascimento.value;

  const pessoaAtual = {
    'nome': nome,
    'dataNascimento': dataNasc    
  }
  
  tabela.appendChild(criaTr(pessoaAtual));
  salvaLocalmente(pessoaAtual)
  limpaCampos()
});

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

function salvaLocalmente(pessoa){

  localStorage.setItem('pessoas',JSON.stringify(pessoa))
}

function limpaCampos(){
  nome.value = ''
  dataNascimento.value = ''
}
