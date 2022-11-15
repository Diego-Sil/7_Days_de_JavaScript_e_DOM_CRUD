let form = document.querySelector(".js-form");

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  exibeInformacao()
});

function exibeInformacao(){
  let nome = form.nome.value;
  let dataNasc = form.dataNascimento.value;
  // console.log(nome, dataNasc);
  const novaPessoa = new pessoa (nome, dataNasc)
  
  console.log(novaPessoa);
}
class pessoa  {
  constructor(nome, dataNasc){
  this.nome = nome;
  this.dataNascimento = dataNasc;
  }
}