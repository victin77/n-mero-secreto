// Função que gera um número aleatório entre 1 e o valor máximo especificado
function escolherNumeroSecreto(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Função principal do jogo
function iniciarJogo() {
    // Centraliza o container com JavaScript sem alterar o CSS
    const container = document.querySelector('.container');
    const body = document.querySelector('body');

    // Ajusta a altura e largura do body para garantir centralização (sem alterar o CSS)
    body.style.height = '100vh'; // 100% da altura da tela
    body.style.display = 'flex';
    body.style.alignItems = 'center';
    body.style.justifyContent = 'center';

    // Ajusta a posição do container
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    // Pergunta o nome do usuário
    const nomeUsuario = prompt("Qual é o seu nome?");
    
    // Pergunta ao usuário qual intervalo ele gostaria de jogar
    let maxNumero = parseInt(prompt("Escolha o maior número do intervalo (ex: 40, 60, etc.):"), 10);

    // Valida a entrada do número máximo
    while (isNaN(maxNumero) || maxNumero < 2) {
        maxNumero = parseInt(prompt("Por favor, escolha um número maior que 1 para o intervalo (ex: 40, 60, etc.):"), 10);
    }

    const numeroSecreto = escolherNumeroSecreto(maxNumero);

    // Mostra uma saudação para o usuário
    alert(`Bem-vindo, ${nomeUsuario}! Eu escolhi um número entre 1 e ${maxNumero}. Tente adivinhar!`);

    let numeroUsuario = 0;
    let tentativas = 0;

    // Loop para continuar o jogo até o usuário acertar
    while (numeroUsuario !== numeroSecreto) {
        numeroUsuario = parseInt(prompt(`Escolha um número entre 1 e ${maxNumero}:`), 10);

        // Valida se o número está dentro do intervalo correto
        if (numeroUsuario < 1 || numeroUsuario > maxNumero) {
            alert(`Por favor, escolha um número entre 1 e ${maxNumero}.`);
            continue;
        }

        tentativas++;

        if (numeroUsuario < numeroSecreto) {
            alert("O número escolhido é menor que o número secreto. Tente novamente!");
        } else if (numeroUsuario > numeroSecreto) {
            alert("O número escolhido é maior que o número secreto. Tente novamente!");
        }
    }

    // Quando o usuário acertar
    alert(`Parabéns, ${nomeUsuario}! Você acertou o número secreto em ${tentativas} tentativas!`);
}

// Inicia o jogo assim que o script é carregado
iniciarJogo();
