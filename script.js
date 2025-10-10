document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.falling-flowers');
    const numberOfFlowers = 60; // Tăng số lượng hoa cho dày hơn

    // Thêm nhiều loại hoa, đặc biệt là hoa hồng
    const flowerTypes = ['🌹', '🌸', '🌷', '🌺', '💐']; 

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        
        // Lấy ngẫu nhiên một loại hoa từ danh sách
        flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

        // Vị trí, tốc độ và thời gian bắt đầu rơi ngẫu nhiên
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 5 + 8}s`; // Rơi trong 8-13 giây
        flower.style.animationDelay = `${Math.random() * 7}s`;
        flower.style.fontSize = `${Math.random() * 18 + 12}px`; // Kích thước ngẫu nhiên
        flower.style.opacity = Math.random() * 0.7 + 0.3; // Độ trong suốt ngẫu nhiên (từ 0.3 đến 1.0)

        container.appendChild(flower);
    }
});