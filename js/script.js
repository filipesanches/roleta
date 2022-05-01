function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
window.addEventListener("load",function(){
  const dia = document.getElementById("dia");
  const mes = document.getElementById("mes");
  const mesNome = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
  let data = new Date();
  const diaFormatado = data.getDate() < 10 ?  "0" + data.getDate() :  data.getDate();
  dia.innerHTML = diaFormatado;
  mes.innerHTML = mesNome[data.getMonth()]
})