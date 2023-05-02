function getClockAngle(hh_mm) {
  const [hours, minutes] = hh_mm.split(":").map(Number);

  // แปลงชั่วโมงให้อยู่ในช่วง 0-12 หรือ 0-24 (กำหนดเวลาเป็นระบบ 12 ชั่วโมงหรือ 24 ชั่วโมง)
  const normalizedHours = hours > 12 ? hours - 12 : hours;

  // คำนวณมุมของเข็มชั่วโมง (1 ชั่วโมง = 30 องศา)
  const hourAngle = normalizedHours * 30 + (minutes / 60) * 30;

  // คำนวณมุมของเข็มนาที (1 นาที = 6 องศา)
  const minuteAngle = minutes * 6;

  // คำนวณมุมที่สั้นที่สุดระหว่างเข็มชั่วโมงและเข็มนาที
  let angle = Math.abs(hourAngle - minuteAngle);

  // หามุมที่เป็นเหตุการณ์เกิน 180 องศา (ใช้มุมที่น้อยที่สุดระหว่างมุมที่คำนวณแล้วและ 360-มุมที่คำนวณแล้ว)
  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}

console.log("Clock: 03:45", "Angle:", getClockAngle("03:45"));
console.log("Clock: 06:30", "Angle:", getClockAngle("06:30"));
console.log("Clock: 09:00", "Angle:", getClockAngle("09:00"));
console.log("Clock: 12:00", "Angle:", getClockAngle("12:00"));
console.log("Clock: 17:30", "Angle:", getClockAngle("17:30"));
