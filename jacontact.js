window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var textOnPic = document.querySelector('.text-onpic');
    var offset = scrollPosition * 0.5; // ปรับค่า 0.5 ตามความต้องการ
    textOnPic.style.top = 'calc(50% - ' + offset + 'px)';
});