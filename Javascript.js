// Selección de elementos del DOM
const container = document.getElementById('giftContainer');
const message = document.getElementById('message');
const instructionText = document.getElementById('instructionText');

// Variables para controlar el estado
//Creacion de LEDERDBOY - KAL
let clickCount = 0;
let confettiInterval;

// Colores para el confeti
const colors = ['#ff1744', '#ff5252', '#4ecdc4', '#45b7d1', '#f9ca24', '#ff9ff3', '#54a0ff', '#ffd700'];

// Función para crear confeti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    const size = Math.random() * 12 + 6;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Posición inicial aleatoria en la parte superior - confeti cayendo
    const startX = Math.random() * window.innerWidth;

    const startY = -20;
    
    confetti.style.left = startX + 'px';

    confetti.style.top = startY + 'px';

    const duration = Math.random() * 3 + 3;

    confetti.style.animation = `confettiFall ${duration}s linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), duration * 1000);
}

// Manejo de clics en el contenedor - cuidado al remover o modifcicar
container.addEventListener('click', function () {
    clickCount++;
    // Limitar a 3 clics
    if (clickCount === 1) {
        container.classList.add('grow-1');
        instructionText.textContent = '¡MÁS MIAUUU! 😸';
        instructionText.style.fontSize = '32px';
        instructionText.style.color = '#ff5252';
    } else if (clickCount === 2) {
        container.classList.remove('grow-1');
        container.classList.add('grow-2');
        instructionText.textContent = '¡BOOM! 💥';
        instructionText.style.fontSize = '36px';
        instructionText.style.animation = 'shake 0.3s infinite';
    } else if (clickCount === 3) {
        container.classList.remove('grow-2');
        container.classList.add('explode');
        container.style.pointerEvents = 'none';
        instructionText.style.display = 'none';

        // Confetti inicial masivo
        for (let i = 0; i < 120; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            const size = Math.random() * 12 + 6;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            const startX = window.innerWidth / 2;
            const startY = window.innerHeight / 2;
            const spreadX = (Math.random() - 0.5) * 500;
            confetti.style.left = startX + 'px';
            confetti.style.top = startY + 'px';
            const duration = Math.random() * 2 + 2;
            const delay = Math.random() * 0.4;
            confetti.style.animation = `confettiFall ${duration}s ease-in forwards`;
            confetti.style.animationDelay = delay + 's';
            confetti.style.transform = `translateX(${spreadX}px) rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), (duration + delay) * 1000);
        }

        // Iniciar confetti continuo
        confettiInterval = setInterval(createConfetti, 100);

        // Crear corazones
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '60%';
            const duration = Math.random() * 2 + 3;
            const delay = Math.random() * 0.6;
            heart.style.animation = `heartFloat ${duration}s ease-out forwards`;
            heart.style.animationDelay = delay + 's';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), (duration + delay) * 1000);
        }
        // Crear decoraciones - EMOJIS - CUMPLEAÑOS - LOVE - FIESTA
        const decorationEmojis = ['🎈', '🎉', '🎊', '✨', '💕', '💖', '🎁', '🌟', '⭐', '💝', '🎀', '🌸', '🌺', '💐'];
        for (let i = 0; i < 35; i++) {
            const decoration = document.createElement('div');
            decoration.classList.add('decoration');
            decoration.textContent = decorationEmojis[Math.floor(Math.random() * decorationEmojis.length)];
            decoration.style.fontSize = Math.random() * 25 + 25 + 'px';
            decoration.style.left = Math.random() * 100 + '%';
            decoration.style.top = '60%';
            const duration = Math.random() * 2.5 + 3;
            const delay = Math.random() * 0.7;
            decoration.style.animation = `decorationFloat ${duration}s ease-out forwards`;
            decoration.style.animationDelay = delay + 's';
            document.body.appendChild(decoration);

            setTimeout(() => decoration.remove(), (duration + delay) * 1000);
        }

        // Mostrar mensaje
        setTimeout(() => {
            message.classList.add('show');
        }, 500);

        // Ocultar la caja
        setTimeout(() => {
            container.style.opacity = '0';
            container.style.transform = 'scale(0)';
        }, 800);
    }
});
