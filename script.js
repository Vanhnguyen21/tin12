document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.falling-flowers');

    // --- Hiệu ứng hoa rơi ---
    const numberOfFlowers = 50; // Giảm bớt hoa để không bị rối mắt
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
    const numberOfKitties = 15; // Số lượng Hello Kitty bạn muốn rơi

    for (let i = 0; i < numberOfKitties; i++) {
        const kitty = document.createElement('img');
        kitty.src = 'hello-kitty.png'; // Đảm bảo bạn có ảnh này trong thư mục
        kitty.classList.add('falling-kitty');
        
        kitty.style.left = `${Math.random() * 95}vw`; // Vị trí ngang ngẫu nhiên
        kitty.style.animationDuration = `${Math.random() * 8 + 10}s`; // Rơi chậm hơn hoa một chút (10-18s)
        kitty.style.animationDelay = `${Math.random() * 10}s`; // Xuất hiện ngẫu nhiên
        kitty.style.width = `${Math.random() * 30 + 20}px`; // Kích thước ngẫu nhiên (20px - 50px)
        kitty.style.opacity = Math.random() * 0.5 + 0.5; // Độ trong suốt ngẫu nhiên
        
        container.appendChild(kitty);
    }


    // --- Xử lý nhạc nền ---
    const music = document.getElementById('backgroundMusic');
    const playBtn = document.getElementById('playMusicBtn');
    
    // Chỉnh âm lượng mặc định xuống 30%
    music.volume = 0.3;
    
    // Bật nhạc khi người dùng tương tác lần đầu
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playBtn.innerHTML = '⏸️';
        }
    }, { once: true });

    // Xử lý nút bật/tắt nhạc
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