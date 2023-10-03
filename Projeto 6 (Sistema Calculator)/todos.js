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

function mudaFoto(tipo){
    if(tipo==1){
            document.getElementById("icone").src="casa.png"
    }else if(tipo==2){
            document.getElementById("icone").src="tela-de-computador.png"
    }else if(tipo==3){
            document.getElementById("icone").src="controle-de-video-game.png"
    }else if(tipo==4){
        document.getElementById("icone").src="cell.png"
    }else if(tipo==5){
        document.getElementById("icone").src="contato.png"
    }else{
        document.getElementById("icone").src="grupo.png"
    }


}