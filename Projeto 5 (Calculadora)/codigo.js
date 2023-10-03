var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var res = document.getElementById("res");
var resultados = []; // Array para armazenar os resultados

function guardarResultado(valor) {
    resultados.push(valor); // Adiciona o resultado ao array resultados
}

function mostrarResultados() {
    res.innerHTML = "<p style='color: #070c7b'>Resultados:</p>";
    for (var i = 0; i < resultados.length; i++) {
        res.innerHTML += `<p style='color: #070c7b'>Resultado ${i + 1}: ${resultados[i]}</p>`;
    }
}

function soma() {
    var resultadoSoma = Number(n1.value) + Number(n2.value);
    res.innerHTML = `<p style="color: #070c7b"> O resultado da soma é ${resultadoSoma}</p>`;
    guardarResultado(resultadoSoma);
}

function sub() {
    var resultadoSubtracao = Number(n1.value) - Number(n2.value);
    res.innerHTML = `<p style="color: #070c7b"> O resultado da subtração é ${resultadoSubtracao}</p>`;
    guardarResultado(resultadoSubtracao);
}

function mult() {
    var resultadoMultiplicacao = Number(n1.value) * Number(n2.value);
    res.innerHTML = `<p style="color: #070c7b"> O resultado da multiplicação é ${resultadoMultiplicacao}</p>`;
    guardarResultado(resultadoMultiplicacao);
}

function limpar() {
    resultados = []; // Limpa a lista de resultados
    res.innerHTML = "<p style='color: #070c7b'>Resultados limpos.</p>";
}

function div() {
    if (n2.value == 0) {
        res.innerText = "Não existe divisão por 0";
    } else {
        var resultadoDivisao = Number(n1.value) / Number(n2.value);
        res.innerHTML = `<p style="color: #070c7b"> O resultado da divisão é ${resultadoDivisao}</p>`;
        guardarResultado(resultadoDivisao);
    }
}

