document.addEventListener('DOMContentLoaded', () => {
    // --- Hiệu ứng hoa rơi (Giữ nguyên) ---
    const container = document.querySelector('.falling-flowers');
    const numberOfFlowers = 60;
    const flowerTypes = ['🌹', '🌸', '❤️', '🌺', '❤️']; 

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 5 + 8}s`;
        flower.style.animationDelay = `${Math.random() * 7}s`;
        flower.style.fontSize = `${Math.random() * 18 + 12}px`;
        flower.style.opacity = Math.random() * 0.7 + 0.3;
        container.appendChild(flower);
    }

    // --- MỚI: Xử lý nhạc nền ---
    const music = document.getElementById('backgroundMusic');
    const playBtn = document.getElementById('playMusicBtn');
    
    // Chỉnh âm lượng mặc định xuống 30%
    music.volume = 0.3;
    
    // Trình duyệt hiện nay thường chặn tự động phát nhạc, 
    // nên chúng ta sẽ đợi người dùng tương tác lần đầu để bật nhạc.
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playBtn.innerHTML = '⏸️'; // Thay đổi icon thành Pause
        }
    }, { once: true }); // {once: true} để sự kiện này chỉ chạy 1 lần duy nhất

    playBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Ngăn sự kiện click lan ra body
        if (music.paused) {
            music.play();
            playBtn.innerHTML = '⏸️';
        } else {
            music.pause();
            playBtn.innerHTML = '▶️';
        }
    });


    // --- MỚI: Xử lý hộp quà bí mật ---
    const giftBox = document.getElementById('giftBox');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModal');

    giftBox.addEventListener('click', () => {
        modalOverlay.style.display = 'flex'; // Hiển thị hộp quà
    });

    const closeModal = () => {
        modalOverlay.style.display = 'none'; // Ẩn hộp quà
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        // Chỉ đóng khi click vào lớp phủ bên ngoài, không phải nội dung bên trong
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});
