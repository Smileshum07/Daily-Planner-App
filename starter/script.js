// Vars
var currentDay = document.getElementById('currentDay');
//console.log(today);
var today = new Date();
var weekDay = today.toDateString().substring(0, 3);
var date = today.getDate();
var month = today.toDateString().substring(4, 7);
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();
currentDay.textContent = weekDay + ',' + date + ' ' + month + ' ' + year + '      ' + hours + ':' + minutes;
