/*
1)Descobrir como detectar os cliques do mouse nos botöes.

dica: existe a possibilidade de criar uma funcao para detectar todos ao mesmo tempo.

2) Descobrir como detectar o pressionamento das teclas equivalantes no teclado.

dica: existe a possibilidade de criar uma funcao para detectar todos os pressionamentos ao mesmo tempo.

3) Criar uma funcao chamada fazerSom e nessa funcao, usando laco "ïf/else" ou " switch/case" para verificar se o usuario clicou a letra
minuscula ou maiuscala (caps lock ativado). Apos a verificacao, ao clicar o som equivalante a tecla tem que ser acionado.

4) Criar uma funcao chamda botaoAnimacao para usarmos a estilizacao "pressed" criada para que quando o 
usuario clicar no botao ele seja estilizado.


*/

function emitirSom(somDoInstrumento) {
    var som = new Audio(); // Crie um novo elemento de áudio
    if (somDoInstrumento === 0) {
        som.src = '/Projeto Final/assets/sounds/rightCrash.mp3'; // Caminho para o arquivo de áudio
        som.play(); // Tocar o áudio
    }

    if (somDoInstrumento === 1) {
        som.src = '/Projeto Final/assets/sounds/kickbass.mp3'; // Caminho para o arquivo de áudio
        som.play(); // Tocar o áudio
    }

    if (somDoInstrumento === 2) {
        som.src = '/Projeto Final/assets/sounds/tom3.mp3'; // Caminho para o arquivo de áudio
        som.play(); // Tocar o áudio
    }

    if (somDoInstrumento === 3) {
        som.src = '/Projeto Final/assets/sounds/tom2.mp3'; // Caminho para o arquivo de áudio
        som.play(); // Tocar o áudio
    }

    if (somDoInstrumento === 4) {
        som.src = '/Projeto Final/assets/sounds/snare.mp3'; // Caminho para o arquivo de áudio
        som.play(); // Tocar o áudio
    }

    if (somDoInstrumento === 5) {
        som.src = '/Projeto Final/assets/sounds/tom1.mp3'; // Caminho para o arquivo de áudio
        som.play(); // Tocar o áudio
    }

}



// Adicionando eventos de teclado
document.addEventListener('keydown', function(event) {
    // Verificando qual tecla foi pressionada
    switch(event.key.toUpperCase()) {
        case 'A':
            emitirSom(0);
            break;
        case 'S':
            emitirSom(5);
            break;
        case 'D':
            emitirSom(4);
            break;
        case 'J':
            emitirSom(3);
            break;
        case 'K':
            emitirSom(2);
            break;
        case 'L':
            emitirSom(1);
            break;
        default:
            // Nada a fazer para outras teclas
            break;
    }
});