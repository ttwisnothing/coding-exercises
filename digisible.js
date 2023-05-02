function isDigisible(n) {
  const digits = Array.from(String(n), Number); // แปลงจำนวนเต็มเป็นอาร์เรย์ของตัวเลข

  // เงื่อนไขที่ 1: ต้องเขียนด้วยตัวเลขที่แตกต่างกันทั้งหมด
  if (new Set(digits).size !== digits.length) {
    return false;
  }

  // เงื่อนไขที่ 2: ต้องไม่มีตัวเลขใดๆ เป็นศูนย์
  if (digits.includes(0)) {
    return false;
  }

  // เงื่อนไขที่ 3: ต้องหารด้วยตัวเลขแต่ละหลักได้ลงตัว
  for (let digit of digits) {
    if (n % digit !== 0) {
      return false;
    }
  }

  return true;
}

console.log("Digit: 12", isDigisible(12));
console.log("Digit: 124", isDigisible(124));
console.log("Digit: 102", isDigisible(102));
console.log("Digit: 321", isDigisible(321));
