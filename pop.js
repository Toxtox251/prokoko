// ฟังก์ชันเปิด/ปิดป๊อปอัพ
function togglePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('popupOverlay');
    var floatingButton = document.querySelector('.floating-button');
    
    // เมื่อป๊อปอัพยังไม่แสดง
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        floatingButton.style.display = 'none'; // ซ่อนปุ่มกลมๆ
    }
}

// ฟังก์ชันปิดป๊อปอัพ
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupOverlay').style.display = 'none';
    document.querySelector('.floating-button').style.display = 'block'; // แสดงปุ่มกลมๆ เมื่อปิด
}

// ฟังก์ชันปิดปุ่มกลมๆ
function closeFloatingButton() {
    document.querySelector('.floating-button').style.display = 'none'; // ซ่อนปุ่มกลมๆ
}
