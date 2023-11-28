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

// Get the local data
function displaySetData() {
    for (var i = 9; i <= 17; i++){
        document.querySelector('#text-'+i).textContent = localStorage.getItem(i);
    };
};

// Get save the note
function getSaveNote(e) {
    var btnId = e.target.id.slice(4);
    //console.log(btnId);  // Get ID of Clicked btn
    for (var i = 0; i < timeBlock.length; i++) {
        var timeBlockId = timeBlock[i].getAttribute('id').slice(5); // Get id of timeBlock
        var noteValue = timeBlock[i].value;
        //console.log(noteValue);
        // Find in which time block to add the note

        if (btnId == timeBlockId) {
            localStorage.setItem(btnId, noteValue);
            var note = document.createElement('p');
            note.textContent = localStorage.getItem('note');
            timeBlock[i].appendChild(note);
        };
    };
    alert('Your note successfully saved!')
};

displaySetData(); 
 
// Add event listener to the buttons
for (var button of saveButton) {
  button.addEventListener("click", getSaveNote);
};