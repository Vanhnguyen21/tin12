document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.falling-flowers');
    const music = document.getElementById('backgroundMusic');
    const playBtn = document.getElementById('playMusicBtn');
    
    // --- MỚI: Xử lý màn hình mở đầu và bức thư ---
    const introScreen = document.getElementById('introScreen');
    const envelope = document.querySelector('.envelope');

    envelope.addEventListener('click', () => {
        // Thêm class 'open' để kích hoạt animation mở thư
        envelope.classList.add('open');

        // Bật nhạc
        if (music.paused) {
            music.play();
            playBtn.innerHTML = '⏸️';
        }

        // Sau 2 giây, ẩn màn hình mở đầu đi
        setTimeout(() => {
            introScreen.classList.add('hidden');
        }, 2000); 
    });


    // --- Hiệu ứng hoa rơi ---
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

    // --- Hiệu ứng Hello Kitty rơi xuống ---
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

    // --- Xử lý nhạc nền ---
    music.volume = 0.3;
    
    // Nút Play/Pause vẫn hoạt động bình thường sau khi nhạc đã bật
    playBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (music.paused) {
            music.play();
            playBtn.innerHTML = '⏸️';
        } else {
            music.pause();
            playBtn.innerHTML = '▶️';
        }
    });

    // --- Xử lý hộp quà bí mật ---
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
