var n2 = document.getElementById("n2");
var inicio = document.getElementById("inicio");

function jogo(){
  var idade = parseInt(n2.value);
  if (idade < 18) {
    inicio.innerHTML = `<p style="color: #ffffff"> Que pena, ${document.getElementById("n1").value} Você não tem idade para esse jogo!</p>`;
  } else {
    inicio.innerHTML = `<p style="color: #ffffff"> Bem vindo ao jogo, ${document.getElementById("n1").value}!</p>`;
  }
}

