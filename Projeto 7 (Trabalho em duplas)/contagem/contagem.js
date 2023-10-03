function atualizarData() {
    const dataElement = document.getElementById("data-hora");
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, "0");
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const ano = dataAtual.getFullYear();
    const hora = String(dataAtual.getHours()).padStart(2, "0");
    const minutos = String(dataAtual.getMinutes()).padStart(2, "0");
    const segundos = String(dataAtual.getSeconds()).padStart(2, "0");

    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
    dataElement.textContent = dataFormatada;
}

setInterval(atualizarData, 1000); // Atualiza a data a cada segundo

function CalculoData(){
    const dataEvento = new Date(document.getElementById("data").value)
    const dataAtual = new Date();
    const diferenca =  dataEvento - dataAtual
    const dia = Math.floor(diferenca / (1000 * 60 * 60 * 24))

    if (diferenca < 0){
        alert("Data inválida")
       
    } else{

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Diferença das datas: ${dia+1} DIAS` ;

}
}