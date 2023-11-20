// Vars
var currentDay = document.getElementById('currentDay');
var currentTime = dayjs().format('HH');
var hour = document.getElementsByClassName('hour');
var timeBlock = document.getElementsByClassName('time-block');
console.log(hour);
// console.log(timeBlock);
console.log(currentTime);
// consol.log(hour);
// Display current date and time
currentDay.textContent = dayjs().format('dddd,  D MMMM  YYYY');


// Define the past, present and future
function getRightTime() {
    hour.forEach(element => {
        
        if (element.innerText === currentTime) {
            timeBlock[i].setAttribute('class', 'present');
        } else if (element.innerText < currentTime) {
            timeBlock[i].setAttribute('class', 'past');
        } else {
            timeBlock[i].setAttribute('class', 'future');
        }; 
    });
    // for (var i = 0; i < timeBlock.length; i++) {
        
    //     if (hour[i].innerText === currentTime) {
    //         timeBlock[i].setAttribute('class', 'present');
    //     } else
    //         if (hour[i].innerText > currentTime) {
    //         timeBlock[i].setAttribute('class', 'past');
    //     } else {
    //         timeBlock[i].setAttribute('class', 'future');
    //     }; 
    // }
};

getRightTime(); 