var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var res = document.getElementById("res");
var n3 = document.getElementById("n3");
var resultados = []; // Array para armazenar os resultados

function guardarResultado(valor) {
    resultados.push(valor); // Adiciona o resultado ao array resultados
}

function mostrarResultados() {
    res.innerHTML = "<p style='color: #ffffff'>Resultados:</p>";
    for (var i = 0; i < resultados.length; i++) {
        res.innerHTML += `<p style='color: #008080'>Resultado ${i + 1}: ${resultados[i]}</p>`;
    }
}

function resp() {
    var resultadoResposta = (Number(((n1.value/200) * n2.value).toFixed(2)) + Number(((n1.value/200) * n3.value * 1.5).toFixed(2))).toFixed(2);
    res.innerHTML = `<p style="color: #ffffff"> O valor a receber pelas horas extras é R$${resultadoResposta}</p>`;
    guardarResultado(resultadoResposta);
}

