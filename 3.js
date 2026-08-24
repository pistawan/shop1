// เก็บคะแนนดิบของนักศึกษา
const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

// ค่าคงที่สำหรับคำนวณคะแนน Workshop
const workshopFullScore = 60;
const workshopWeight = 20;
const fullScore = 100;
const targetScore = 80;

// แปลงคะแนน Workshop จาก 60 เป็น 20 คะแนน
const workshopScore = (workshopRaw / workshopFullScore) * workshopWeight;

// คำนวณคะแนนรวมทั้งหมด
const totalScore = workshopScore + attendance + project + midterm + final;

// คำนวณเปอร์เซ็นต์ของคะแนนเต็ม 100
const percentage = (totalScore / fullScore) * 100;

// คำนวณว่าขาดหรือเกินจากเป้าหมาย 80 คะแนนเท่าไร
const scoreDifference = targetScore - totalScore;

// แสดงผลด้วย Template Literal
console.log(`===== สรุปคะแนน =====
Workshop     : ${workshopScore.toFixed(2)}
Attendance   : ${attendance}
Project      : ${project}
Midterm      : ${midterm}
Final        : ${final}
คะแนนรวม     : ${totalScore.toFixed(2)}
คิดเป็น      : ${percentage.toFixed(2)}%
จากเป้าหมาย 80 : ${scoreDifference.toFixed(2)}
====================`);