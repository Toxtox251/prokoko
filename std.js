// function toggleContent() {
//     const content = document.getElementById("expandableContent");
    
//     // หากกล่องข้อความยังไม่เปิดอยู่
//     if (content.style.display === "none" || content.style.display === "") {
//         content.style.display = "block";
//         content.classList.add("open");
//     } else {
//         content.style.display = "none";
//         content.classList.remove("open");
//     }
// }

function toggleContent(contentId, buttonId) {
    var content = document.getElementById(contentId);
    var button = document.getElementById(buttonId);

    // ตรวจสอบว่าเนื้อหาซ่อนอยู่หรือไม่
    if (content.style.display === "none") {
        content.style.display = "block"; // แสดงเนื้อหา
        button.textContent = "ย่อเนื้อหา"; // เปลี่ยนข้อความปุ่มเป็น "ย่อเนื้อหา"
    } else {
        content.style.display = "none"; // ซ่อนเนื้อหา
        button.textContent = "อ่านเพิ่มเติม"; // เปลี่ยนข้อความปุ่มเป็น "อ่านเพิ่มเติม"
    }
}



