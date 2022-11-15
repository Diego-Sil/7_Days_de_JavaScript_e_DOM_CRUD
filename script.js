let form = document.querySelector(".js-form");
let nome;
let dataNasc;
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  exibeInformacao()
});

function exibeInformacao(){
  nome = form.nome.value;
  dataNasc = form.dataNascimento.value;
  console.log(nome, dataNasc);
  
}

