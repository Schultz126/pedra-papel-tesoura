/*
        Pedra Papel Tesoura
    Pedra:      0
    Papel:      1
    Tesoura:    2
*/

// Declaração das jogadas de cada um como variáveis globais
let jogadaPlayer = 0;
let jogadaBot;

// Variáveis dos placares
const playerPtsCount = document.getElementById('playerScoreCount'); // Objeto com texto para exibir o placar
let playerPts = 0; // Valor inteiro do placar
const botPtsCount = document.getElementById('botScoreCount');
let botPts = 0;

// Variáveis para por o nome da jogada de cada um
const playerMove = document.getElementById("playerMove");
const botMove = document.getElementById("botMove");

function setPlayerMove(input) {
    if(input == "Pedra") {
        jogadaPlayer = 0;
    } else if(input == "Papel") {
        jogadaPlayer = 1;
    } else if(input == "Tesoura") {
        jogadaPlayer = 2;   
    }
    playerMove.textContent = input;
    //console.log(getBotMove());
}

function setBotMoveNumericaly() {
    return Number.parseInt(Math.floor(Math.random() * 3));
}

function gameRound(input) {
    setPlayerMove(input);
    setBotMove();
    calculateScore();
}

function setBotMove() {
    jogadaBot = setBotMoveNumericaly();
    switch(jogadaBot) {
        case 0:
            botMove.textContent = "Pedra";
            break;
        case 1:
            botMove.textContent = "Papel";
            break;
        case 2: 
            botMove.textContent = "Tesoura";
            break;
    }
}

function calculateScore() {
    switch(jogadaPlayer) {
        case 0: // jogador escolheu pedra
            switch(jogadaBot) {
                case 0: // bot escolheu pedra
                    // Empate
                    botMove.classList.remove('winner', 'loser');
                    playerMove.classList.remove('winner', 'loser');
                    botMove.classList.add('draw');
                    playerMove.classList.add('draw');
                    break;
                case 1: // bot escolheu papel
                    botPts += 1;
                    botPtsCount.textContent = botPts;
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('draw', 'loser');
                    playerMove.classList.remove('draw', 'winner');
                    botMove.classList.add('winner');
                    playerMove.classList.add('loser');
                    break;
                case 2: // bot escolheu tesoura
                    playerPts += 1;
                    playerPtsCount.textContent = playerPts;
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('draw', 'winner');
                    playerMove.classList.remove('draw', 'loser');
                    botMove.classList.add('loser');
                    playerMove.classList.add('winner');
                    break;
            }
            break;
        case 1: // jogador escolheu papel
            switch(jogadaBot) {
                case 0: // bot escolheu pedra
                    playerPts += 1;
                    playerPtsCount.textContent = playerPts;
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('draw', 'winner');
                    playerMove.classList.remove('draw', 'loser');
                    botMove.classList.add('loser');
                    playerMove.classList.add('winner');
                    break;      
                case 1: // bot escolheu papel
                    // Empate
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('winner', 'loser');
                    playerMove.classList.remove('winner', 'loser');
                    botMove.classList.add('draw');
                    playerMove.classList.add('draw');
                    break;
                case 2: // bot escolheu tesoura
                    botPts += 1;
                    botPtsCount.textContent = botPts;
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('draw', 'loser');
                    playerMove.classList.remove('draw', 'winner');
                    botMove.classList.add('winner');
                    playerMove.classList.add('loser');
                    break;
            }
            break;
        case 2: // jogador escolheu tesoura
            switch(jogadaBot) {
                case 0: // bot escolheu pedra
                    botPts += 1;
                    botPtsCount.textContent = botPts;
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('draw', 'loser');
                    playerMove.classList.remove('draw', 'loser');
                    botMove.classList.add('winner');
                    playerMove.classList.add('loser');
                    break;
                case 1: // bot escolheu papel
                    playerPts += 1;
                    playerPtsCount.textContent = playerPts;
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('draw', 'winner');
                    playerMove.classList.remove('draw', 'loser');
                    botMove.classList.add('loser');
                    playerMove.classList.add('winner');
                    break;
                case 2: // bot escolheu tesoura
                    // Empate
                    // Mudança de cores no display da jogada
                    botMove.classList.remove('winner', 'loser');
                    playerMove.classList.remove('winner', 'loser');
                    botMove.classList.add('draw');
                    playerMove.classList.add('draw');
                    break;
            }
            break;
    }
}

function clearScore() {
    // Modifica o valor inteiro da pontuação e usa eles como referência para modificar o visor
    playerPts = 0;
    botPts = 0;
    playerPtsCount.textContent = playerPts;
    botPtsCount.textContent = botPts;
    playerMove.textContent = " ";
    botMove.textContent = " ";
}