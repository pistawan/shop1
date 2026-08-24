// เก็บข้อมูลส่วนตัวสำหรับแนะนำตัว
// คำนวณปีที่จะจบจากปีปัจจุบันและจำนวนปีที่เหลือ

const name = "Pistawan";
const studentId = "67110835";
const age = 21;
const major = "วิศวกรรมคอมพิวเตอร์";
const subjects = 6;

const currentYear = 2569;
const remainingYears = 2;
const graduationYear = currentYear + remainingYears;

console.log(`===== บัตรแนะนำตัว =====
ชื่อเล่น    : ${name}
รหัสนักศึกษา : ${studentId}
อายุ        : ${age} ปี
สาขาวิชา    : ${major}
ลงทะเบียน   : ${subjects} วิชา
ปีที่จะจบ   : ${graduationYear}  ← คำนวณจากปีปัจจุบัน + จำนวนปีที่เหลือ
========================`);