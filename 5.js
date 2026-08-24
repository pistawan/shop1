// ฟังก์ชันหาราคาเมนูด้วย switch
function getMenuPrice(menu) {
    switch (menu) {
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;

        case "ผัดไทย":
            return 60;

        case "ต้มยำกุ้ง":
            return 120;

        default:
            return 0;
    }
}

// ฟังก์ชันคูณราคาตามขนาด
function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;

        case "พิเศษ":
            return 1.5;

        case "ใหญ่":
            return 2;

        default:
            return 1;
    }
}

// รายการอาหารที่สั่ง
const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "ใหญ่", qty: 1 },
    { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 1 },
    { menu: "ข้าวหมูแดง", size: "ธรรมดา", qty: 1 }
];

// คำนวณราคารวมทั้งหมด
let total = 0;

for (const order of orders) {
    const price = getMenuPrice(order.menu);
    const multiplier = getSizeMultiplier(order.size);
    const subtotal = price * multiplier * order.qty;

    total += subtotal;

    console.log(
        `${order.menu} (${order.size}) x ${order.qty} = ${subtotal} บาท`
    );
}

// แสดงราคารวม
console.log(`ราคารวมทั้งหมด = ${total} บาท`);

// ตัวอย่างตามโจทย์: ผัดไทย (พิเศษ) x2
console.log(`ตัวอย่าง: ผัดไทย (พิเศษ) x2 = ${60 * 1.5 * 2} บาท`);