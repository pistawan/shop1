// ส่วนที่ 1: สร้างตัวแปรให้ครบ 6 ชนิดข้อมูล
const text = "สวัสดี";
const number = 20;
const isStudent = true;
let notDefined;
const emptyValue = null;
const fruits = ["Apple", "Banana", "Orange"];

// แสดงค่าคู่กับชนิดข้อมูล
console.log(`ค่า: ${text} | ชนิด: ${typeof text}`);
console.log(`ค่า: ${number} | ชนิด: ${typeof number}`);
console.log(`ค่า: ${isStudent} | ชนิด: ${typeof isStudent}`);
console.log(`ค่า: ${notDefined} | ชนิด: ${typeof notDefined}`);
console.log(`ค่า: ${emptyValue} | ชนิด: ${typeof emptyValue}`);
console.log(`ค่า: ${fruits} | ชนิด: ${typeof fruits}`);

// ส่วนที่ 2: ตอบคำถาม typeof
console.log(`typeof null = ${typeof null}`);
console.log(`typeof ตัวแปรที่ยังไม่กำหนดค่า = ${typeof notDefined}`);

const nanValue = Number("abc");
console.log(`typeof NaN = ${typeof nanValue}`);
console.log(`NaN คือค่าที่ไม่ใช่ตัวเลขจริงหรือไม่ = ${Number.isNaN(nanValue)}`);

// ส่วนที่ 3: การแปลงชนิดข้อมูล
const inputAge = "20";
const inputScore = "85.5";

const age = Number(inputAge) + 5;
const score = Number(inputScore);

console.log(`อายุหลังบวก 5 = ${age}`);
console.log(`คะแนน = ${score.toFixed(1)}`);

console.log(`inputAge === 20 : ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 : ${Number(inputAge) === 20}`);