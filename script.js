let salvarBtn = document.querySelector("#btnSave");
let nomeInp = document.querySelector("#name");
let dataNascInp = document.querySelector("#birth-date");
let form = document.querySelector(".js-form");

function exibeInformation(){
  console.log(nomeInp.value);
  console.log(dataNascInp.value)

}

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  exibeInformation()
});

/*
function validate(ipt) {
  ipt.addEventListener("input",function(Event){
    //const input = document.getElementById(inputID);
    const validityState = ipt.validity;
    //Se o valor estiver ausente.
    if (validityState.valueMissing) {
      ipt.setCustomValidity('O campo deve ser preenchido');
    } 
    //Se não está de acordo com as restrições estabelecidas pelo "min" atributo do elemento.
    else if (validityState.rangeUnderflow) {
      ipt.setCustomValidity('O campo não atingiu o número minimo de caracteres');
    } 
    //Se não está de acordo com as restrições estabelecidas pelo "max" atributo do elemento.
    else if (validityState.rangeOverflow) {
      ipt.setCustomValidity('O campo excedeu o seu número de caracteres');
    } else if (validityState.typeMismatch) {
      ipt.setCustomValidity('O valor do campo não corresponde ao tipo de entrada definida');
    }else {
      ipt.setCustomValidity('');

    }
  
    ipt.reportValidity();

  });
  } 
*/