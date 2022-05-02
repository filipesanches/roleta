window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  const header = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.fontSize = "10pt";
    header.style.backgroundColor = '#0d0d0d4e'
    header.style.height = '60px'
  } else {
    header.style.fontSize = "20px";
    header.style.height = '100px'
    header.style.backgroundColor = '#0d0d0dd4'
  }
}

function myFunction() {
  var x = document.getElementById("nav-bar");
  const fundoMenu = document.getElementsByTagName("div")[2]
  if (x.className === "nav") {
    x.className += " responsive";
    fundoMenu.style.backgroundColor = "#5a1919"
  } else {
    x.className = "nav";
    fundoMenu.style.backgroundColor = "transparent"
  }
}
window.addEventListener("load", function () {
  const dia = document.getElementById("dia");
  const mes = document.getElementById("mes");
  const mesNome = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
  let data = new Date();
  const diaFormatado = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
  dia.innerHTML = diaFormatado;
  mes.innerHTML = mesNome[data.getMonth()]
})

const elementos = document.querySelectorAll("[data-anima]");

function animaScroll() {
  const topoJanela = window.pageYOffset + ((window.innerHeight * 3) / 4); // 3/ da janela
  elementos.forEach(function (elemento) {
    if (topoJanela > elemento.offsetTop) {
      elemento.classList.add("animacao")
    } else {
      elemento.classList.remove("animacao")
    }
  })
}
window.addEventListener('scroll', animaScroll)