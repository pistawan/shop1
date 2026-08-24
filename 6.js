// ฟังก์ชันตรวจสอบสิทธิ์การเข้าสู่ระบบ
function login(inputUser, inputPass, role, isActive, age) {

    // ตรวจสอบ username หรือ password ก่อน
    if (inputUser !== "admin" || inputPass !== "ce385pass") {
        return { code: 401, message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" };
    }

    // ตรวจสอบว่าบัญชีถูกระงับหรือไม่
    if (isActive === false) {
        return { code: 403, message: "บัญชีถูกระงับการใช้งาน" };
    }

    // ตรวจสอบอายุ
    if (age < 18) {
        return { code: null, message: "อายุไม่ถึงเกณฑ์" };
    }

    // ตรวจสอบสิทธิ์ตาม role
    if (role === "อาจารย์") {
        return { code: 200, message: "เข้าสู่ระบบสำเร็จ (สิทธิ์ระดับอาจารย์)" };
    }

    if (role === "นักศึกษา") {
        return { code: 200, message: "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)" };
    }

    return { code: null, message: "ไม่พบสิทธิ์ผู้ใช้งาน" };
}

// ทดสอบทั้งหมด 6 กรณี
const tests = [
    login("admin", "ce385pass", "อาจารย์", true, 25),
    login("admin", "ce385pass", "นักศึกษา", true, 20),
    login("admin", "wrongpass", "นักศึกษา", true, 20),
    login("wronguser", "ce385pass", "นักศึกษา", true, 20),
    login("admin", "ce385pass", "นักศึกษา", false, 20),
    login("admin", "ce385pass", "นักศึกษา", true, 17)
];

// แสดงผลหลังจากเรียกใช้ฟังก์ชัน
for (const result of tests) {
    console.log(`รหัส ${result.code} : ${result.message}`);
}