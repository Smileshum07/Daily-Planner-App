// Vars
var currentDay = document.getElementById('currentDay');
var currentTime = Number(dayjs().format('HH'));
var hour = document.querySelectorAll('.hour');
var timeBlock = document.querySelectorAll('.time-block');
var saveButton = document.querySelectorAll('button');

// console.log(hour[7].innerText);

// currentTime = 18;
// console.log(typeof(currentTime));

// Display current date and time
currentDay.textContent = dayjs().format('dddd,  D MMMM  YYYY');

// Converting time to 24 hours format
function getRightTime() {
    for (var i = 0; i < hour.length; i++){
        if (hour[i].innerText.slice(0, 2) < 9) {
            hour[i].setAttribute('id', 12 + Number(hour[i].innerText.slice(0, 2)));
        } else {
            hour[i].setAttribute('id', hour[i].innerText.slice(0, 2));
        };
    };
    //console.log(hour[0].getAttribute('id'));
};
getRightTime();

// Define the past, present and future
function getRightColor() {
    for (var i = 0; i < hour.length; i++) {
        if (hour[i].getAttribute('id') < currentTime) {
            timeBlock[i].setAttribute('class', 'past');
        } else if (hour[i].getAttribute('id') == currentTime) {
                timeBlock[i].setAttribute('class', 'present');
            } else {
                timeBlock[i].setAttribute('class', 'future');
        };
    };
};

getRightColor(); 



// Save the note
function getTextArea(){
for (var i = 0; i < timeBlock.length; i++){
    timeBlock[i].addEventListener('change', getTextArea(){
        var note = timeBlock[i].value;
        timeBlock[i].textContent = note;
        console.log(note);
    });
};
}; 

getTextArea();

console.log(localStorage);