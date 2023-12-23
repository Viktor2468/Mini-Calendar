const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const month = document.querySelector(".month");

const months = [
    "ЈАНУАРИ",
    "ФЕБРУАРИ",
    "МАРТ",
    "АПРИЛ",
    "МАЈ",
    "ЈУНИ",
    "ЈУЛИ",
    "АВГУСТ",
    "СЕПТЕМВРИ",
    "ОКТОМВРИ",
    "НОЕМВРИ",
    "ДЕКЕМВРИ",
];

console.log(months)
const date = new Date();

let currentMonth = date.getMonth();
let currentYear = date.getFullYear();


function renderCalendar() {
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  month.innerHTML = `<p><span>${currentYear}</span> ${months[currentMonth]}</p> `;

  let days = "";
  daysContainer.innerHTML = ""
  
  for (let x = firstDay.getDay(); x > 0; x--) {

      days = days + `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDayDate; i++) {
      if (
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
      ) {
        days = days + `<div class="day today">${i}</div>`;
      }else if(i === 31 && currentMonth === 11){
        days = days + 
        `<div class="day-holiday">
          <div class="div-top">${i}</div>
          <div class="div-bottom">Нова Година</div>
        </div>`;
      }else if (i === 1 && currentMonth === 0) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Нова Година</div>
      </div>`;
      }else if (i === 6 && currentMonth === 0) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Бадник</div>
      </div>`;
      }else if (i === 7 && currentMonth === 0) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Божиќ</div>
      </div>`;
      }else if (i === 19 && currentMonth === 0) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Богојавление (Водици)</div>
      </div>`;
      }else if (i === 10 && currentMonth === 3) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Рамазан Бајрам</div>
      </div>`;
      }else if (i === 1 && currentMonth === 4) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Ден на трудот</div>
      </div>`;
      }else if (i === 3 && currentMonth === 4) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Велики петок</div>
      </div>`;}else if (i === 6 && currentMonth === 4) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Велигден</div>
      </div>`;}else if (i === 24 && currentMonth === 4) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Св. Кирил и Методиј</div>
      </div>`;}else if (i === 21 && currentMonth === 5) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Духовден</div>
      </div>`;}else if (i === 2 && currentMonth === 7) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Ден на Републиката</div>
      </div>`;}else if (i === 28 && currentMonth === 7) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Успение на Пресвета Богородица</div>
      </div>`;}else if (i === 8 && currentMonth === 8) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Ден на независноста</div>
      </div>`;}else if (i === 11 && currentMonth === 9) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Ден на народното востание</div>
      </div>`;}else if (i === 23 && currentMonth === 9) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Ден на македонската револуционерна борба</div>
      </div>`;}else if (i === 8 && currentMonth === 11) {
        days = days + 
        `<div class="day-holiday">
        <div class="div-top">${i}</div>
        <div class="div-bottom">Св. Климент Охридски</div>
      </div>`;}else {
        days = days + `<div class="day">${i}</div>`;
      }
  }

  for (let i = 1; i <= nextDays; i++) {
      days = days + `<div class="day next">${i}</div>`;
  }
  daysContainer.innerHTML = days;

  console.log(days);
}

renderCalendar();

nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
});

prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
});

todayBtn.addEventListener("click", () => {

    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    renderCalendar();
});







  