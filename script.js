// Seleciona a imagem de gatilho
var triggerImg = document.getElementById("trigger-image");

// Seleciona o modal
var modal = document.getElementById("myModal");

// Seleciona o botão de fechar (a span)
var closeButton = document.getElementsByClassName("close-button")[0];

// Função para abrir o modal e iniciar o confete
triggerImg.onclick = function(){
    modal.style.display = "block";
    startConfetti(); // Chama a função para iniciar o confete
}

// Função para fechar o modal ao clicar no botão de fechar
closeButton.onclick = function() {
    modal.style.display = "none";
    removeConfetti(); // Chama a função para remover o confete
}

// Função para fechar o modal ao clicar fora do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        removeConfetti(); // Chama a função para remover o confete
    }
}

// Função para criar e iniciar o efeito de confete
function startConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    document.body.appendChild(confettiContainer);

    const confettiCount = 200; // Número de confetes
    const colors = ['#fce18a', '#ff726d', '#b48cf8', '#f6f0c3', '#86e3ce'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }

    // Adiciona uma classe para iniciar a animação de queda após um pequeno delay
    setTimeout(() => {
        confettiContainer.classList.add('start-animation');
    }, 50);
}

// Função para remover o confete da tela
function removeConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    if (confettiContainer) {
        confettiContainer.remove();
    }
}

var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            window.open('https://emulatoronline.com/ps1-games/grand-theft-auto-2-ps1/', '_blank'); // Substitua pelo URL desejado
            konamiIndex = 0; // Reinicia o código Konami
        }
    } else {
        konamiIndex = 0; // Reinicia se a sequência estiver incorreta
    }
});