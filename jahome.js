 
 
 
//  หน้าสไลด์รูป
//  let slideIndex = 0;
//         showSlides();

//         function showSlides() {
//             let slides = document.getElementsByClassName("slide");
//             let dots = document.getElementsByClassName("dot");

//             for (let i = 0; i < slides.length; i++) {
//                 slides[i].style.display = "none";  
//             }

//             for (let i = 0; i < dots.length; i++) {
//                 dots[i].className = dots[i].className.replace(" active", "");
//             }

//             slideIndex++;
//             if (slideIndex > slides.length) { slideIndex = 1; }
//             slides[slideIndex-1].style.display = "block";  
//             dots[slideIndex-1].className += " active";
//             setTimeout(showSlides, 7000); // เปลี่ยนรูปภาพทุก 5 วินาที
//         }

//         function currentSlide(n) {
//             slideIndex = n - 1;
//             showSlides();
//         }






        // ตั้งค่าจำนวนสูงสุด
const maxNumberStudent = 728;  // จำนวนสูงสุดของนักศึกษา
const maxNumberYears = 54;     // จำนวนสูงสุดของปีที่เปิดสอน
const maxNumberTeachers = 44;  // จำนวนสูงสุดของคณะครูอาจารย์

// ตั้งเวลาในการเพิ่มหมายเลข
const intervalTimeStudent = 3;  // เวลาในการเพิ่มหมายเลขนักศึกษา (2000ms หรือ 2 วินาที)
const intervalTimeYears = 50;    // เวลาในการเพิ่มหมายเลขปีที่เปิดสอน (3000ms หรือ 3 วินาที)
const intervalTimeTeachers = 60; // เวลาในการเพิ่มหมายเลขคณะครูอาจารย์ (4000ms หรือ 4 วินาที)

// เลือก <div> ที่จะแสดงตัวเลข
const numberDisplayStudent = document.getElementById('numberDisplay');
const numberDisplayYears = document.getElementById('numberDisplay2');
const numberDisplayTeachers = document.getElementById('numberDisplay3');

// ตัวแปรสำหรับเก็บตัวเลขปัจจุบัน
let currentNumberStudent = 0;
let currentNumberYears = 0;
let currentNumberTeachers = 0;

// ตัวแปรเก็บ interval ID สำหรับการหยุดการนับ
let intervalIdStudent, intervalIdYears, intervalIdTeachers;

// ฟังก์ชันเพื่ออัพเดตหมายเลขนักศึกษา
function updateStudentNumber() {
    if (currentNumberStudent <= maxNumberStudent) {
        numberDisplayStudent.textContent = currentNumberStudent;
        currentNumberStudent++;
    }
}

// ฟังก์ชันเพื่ออัพเดตหมายเลขปีที่เปิดสอน
function updateYearsNumber() {
    if (currentNumberYears <= maxNumberYears) {
        numberDisplayYears.textContent = currentNumberYears;
        currentNumberYears++;
    }
}

// ฟังก์ชันเพื่ออัพเดตหมายเลขคณะครูอาจารย์
function updateTeachersNumber() {
    if (currentNumberTeachers <= maxNumberTeachers) {
        numberDisplayTeachers.textContent = currentNumberTeachers;
        currentNumberTeachers++;
    }
}

// ฟังก์ชันเริ่มการนับตัวเลข
function startCounting() {
    intervalIdStudent = setInterval(updateStudentNumber, intervalTimeStudent);
    intervalIdYears = setInterval(updateYearsNumber, intervalTimeYears);
    intervalIdTeachers = setInterval(updateTeachersNumber, intervalTimeTeachers);
}

// ฟังก์ชันหยุดการนับตัวเลข
function stopCounting() {
    clearInterval(intervalIdStudent);
    clearInterval(intervalIdYears);
    clearInterval(intervalIdTeachers);
}

// การตั้งค่า Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(); // เริ่มการนับตัวเลขเมื่อองค์ประกอบเข้ามาในมุมมอง
        } else {
            stopCounting(); // หยุดการนับตัวเลขเมื่อองค์ประกอบออกจากมุมมอง
        }
    });
}, { threshold: 0.1 }); // เปอร์เซ็นต์การมองเห็นที่ต้องการ (0.1 หมายถึง 10%)

// เรียกใช้งาน Intersection Observer กับองค์ประกอบที่ต้องการ
const targetElement = document.querySelector('.num-container');
observer.observe(targetElement);





