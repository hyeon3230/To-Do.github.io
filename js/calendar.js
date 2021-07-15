const now = new Date();  //현재 날짜 및 시간

const today = {
  year: now.getFullYear(),  //주어진 날짜의 연도 반환
  date: now.getDate(),
  month: now.toLocaleString("en-US", {month: "short"}),  //문자열 반환
  day: now.toLocaleString("en-US", {weekday: "short"})
}

for (let key in today){    //for..in문은 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복
  document.getElementById(key).textContent = today[key];
}
