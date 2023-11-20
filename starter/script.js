// Vars
var currentDay = document.getElementById('currentDay');

currentDay.textContent = dayjs().format('dddd,  D MMMM  YYYY   h:mm');
