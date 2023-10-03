var n1 = document.getElementById("n1");
var res = document.getElementById("res");
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
    var salario = parseFloat(n1.value);
    var aumento;
    if (salario <= 1200.00) {
        aumento = salario * 0.16;
    } else if (salario <= 2100.00) {
        aumento = salario * 0.13;
    } else if (salario <= 3000.00) {
        aumento = salario * 0.10;
    } else {
        aumento = salario * 0.05;
    }

// Calcula o novo salário
    var novoSalario = salario + aumento;
    res.innerHTML = `<p style="color: #ffffff">O novo salário após o aumento é: R$ ${novoSalario.toFixed(2)}</p>`;
    guardarResultado(novoSalario);
}