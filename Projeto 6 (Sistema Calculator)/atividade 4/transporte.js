var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var res = document.getElementById("res");
var resultados = []; // Array para armazenar os resultados

function guardarResultado(valor) {
    resultados.push(valor); // Adiciona o resultado ao array resultados
}

function mostrarResultados() {
    res.innerHTML = "<p style='color: #008080'>Resultados:</p>";
    for (var i = 0; i < resultados.length; i++) {
        res.innerHTML += `<p style='color: #008080'>Resultado ${i + 1}: ${resultados[i]}</p>`;
    }
}

function resp() {
    var quantidadeFuncionarios = parseInt(n1.value);
    var quantidadeDiasUteis = parseInt(n2.value);
    var custoPorPessoaPorDia;
    if (quantidadeFuncionarios >= 1 && quantidadeFuncionarios <= 49) {
        custoPorPessoaPorDia = 4.50;
    } else if (quantidadeFuncionarios >= 50 && quantidadeFuncionarios <= 99) {
        custoPorPessoaPorDia = 4.10;
    } else if (quantidadeFuncionarios >= 100 && quantidadeFuncionarios <= 149) {
        custoPorPessoaPorDia = 3.80;
    } else {
        custoPorPessoaPorDia = 3.60;
    }

    var custoMensal = quantidadeFuncionarios * quantidadeDiasUteis * custoPorPessoaPorDia;

    res.innerHTML = `<p style="color: #008080">O custo mensal do transporte fretado é de R$ ${custoMensal.toFixed(2)}</p>`;
    guardarResultado(custoMensal);
}