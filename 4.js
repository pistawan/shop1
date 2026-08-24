// ฟังก์ชันสำหรับตรวจคะแนนและคืนค่าเกรด
function toGrade(score) {
    // ตรวจสอบคะแนนจากช่วงสูงไปต่ำ
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 75 && score < 80) {
        return "B+";
    } else if (score >= 70 && score < 75) {
        return "B";
    } else if (score >= 65 && score < 70) {
        return "C+";
    } else if (score >= 60 && score < 65) {
        return "C";
    } else if (score >= 55 && score < 60) {
        return "D+";
    } else if (score >= 50 && score < 55) {
        return "D";
    } else if (score >= 0 && score < 50) {
        return "F";
    } else {
        return "คะแนนไม่ถูกต้อง";
    }
}

// ทดสอบคะแนนทุกค่าตามโจทย์
const scores = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];

for (const score of scores) {
    console.log(`คะแนน ${score} => เกรด ${toGrade(score)}`);
}