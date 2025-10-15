import { CookieUtil } from "./cookies/CookieUtil.js";

// ตั้งค่าคุกกี้ชื่อ "cartId" ให้มีค่า 'abc123' และหมดอายุวันที่ 20 ตุลาคม 2025
CookieUtil.set("cartId", 'abc123', new Date(2025, 9, 20), "/week10");

// แสดงผลคุกกี้ทั้งหมดใน console
console.log(document.cookie);

// อ่านค่าคุกกี้ "cartId" และแสดงผลใน console
console.log(CookieUtil.get('cartId'));

// ลบคุกกี้ "cartId" จาก path "/week10"
CookieUtil.unset('cartId', "/week10");


// document.cookie = 'theme=dark'
// document.cookie = `theme=light;expires=${new Date(2025, 9, 16)}`
// document.cookie = 'username=chanakan;max-age=60'

