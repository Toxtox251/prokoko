// navbar
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 50) { // เปลี่ยน 50 เป็นค่าที่ต้องการเพื่อกำหนดเมื่อจะเริ่มเปลี่ยน
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
