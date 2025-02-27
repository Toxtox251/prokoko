document.addEventListener('scroll', function() {
    const text = document.getElementById('popup-text');
    const position = text.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (position.top < windowHeight) { // ตรวจสอบว่าข้อความอยู่ในกรอบการมองเห็น
        text.classList.add('visible');
    }
});






// ป็อบอัพ
// เข้าถึงองค์ประกอบต่างๆ
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

// เปิดป็อบอัพเมื่อโหลดหน้าเว็บเสร็จ
window.addEventListener('load', () => {
    popup.style.display = 'flex';
});

// ปิดป็อบอัพเมื่อคลิกที่ปุ่มปิด
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// ปิดป็อบอัพเมื่อคลิกพื้นที่นอกป็อบอัพ
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
