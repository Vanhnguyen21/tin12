document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    
    // Xử lý chuyển cảnh từ thư sang thiệp
    const introScreen = document.getElementById('introScreen');
    const envelopeWrapper = document.querySelector('.envelope-wrapper');

    envelopeWrapper.addEventListener('click', () => {
        introScreen.classList.add('opened');

        // Bật nhạc khi bấm vào thư
        if (music.paused) {
            music.play();
        }
    });

    // Hiệu ứng hoa và Hello Kitty rơi
    const container = document.querySelector('.falling-flowers');
    const numberOfFlowers = 50;
    const flowerTypes = ['🌹', '🌸', '❤️', '🌺', '❤️']; 
    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 5 + 8}s`;
        flower.style.animationDelay = `${Math.random() * 10}s`;
        flower.style.fontSize = `${Math.random() * 18 + 12}px`;
        flower.style.opacity = Math.random() * 0.7 + 0.3;
        container.appendChild(flower);
    }
    const numberOfKitties = 15;
    for (let i = 0; i < numberOfKitties; i++) {
        const kitty = document.createElement('img');
        kitty.src = 'hello-kitty.png';
        kitty.classList.add('falling-kitty');
        kitty.style.left = `${Math.random() * 95}vw`;
        kitty.style.animationDuration = `${Math.random() * 8 + 10}s`;
        kitty.style.animationDelay = `${Math.random() * 10}s`;
        kitty.style.width = `${Math.random() * 30 + 20}px`;
        kitty.style.opacity = Math.random() * 0.5 + 0.5;
        container.appendChild(kitty);
    }

    // Xử lý nhạc nền
    music.volume = 0.3;

    // Xử lý hộp quà bí mật
    const giftBox = document.getElementById('giftBox');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModal');
    giftBox.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
    });
    const closeModal = () => {
        modalOverlay.style.display = 'none';
    }
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});
