var timeEl = document.getElementById('currentDay');

//replace timeEl child with today's date.
timeEl.replaceWith(moment().format('dddd, MMMM Do YYYY'));

var timeSlots = document.getElementsByTagName('LABEL');
var inputSlots = document.getElementsByTagName('INPUT');
var saveButtons = document.getElementsByTagName('BUTTON');

var saveClicked = false;
var storedItem = localStorage.getItem("storedItem");

//Checktime function to check for each hour on the calender
//and change background according to time of day.
function checkTime() {
    for (var j = 0; j < timeSlots.length; j++) {
        var num = parseInt(timeSlots[j].id);
        if (num < parseInt(moment().format('HH'))) {
            inputSlots[j].classList.remove("future","present");
            inputSlots[j].classList.add("past");
        }
        else if (num == parseInt(moment().format('HH'))) {
            inputSlots[j].classList.remove("future","past");
            inputSlots[j].classList.add("present");
        }
        else {
            inputSlots[j].classList.remove("present","past");
            inputSlots[j].classList.add("future");
        }
    }
}

//Runs checktime initially, then sets interval for checktime to run every minute.
checkTime();
setInterval(checkTime, 1000*60);

//For Firefox browsers, to stop saving of input by defaut it is necessary
//to turn off autocomplete, reset to on for standardization.
for (var k = 0; k < saveButtons.length; k++) {
    inputSlots[k].setAttribute("autocomplete", "on");
}

//Adding event listener to DOM to listen for click.
//The function iterates through the length of inputSlots,
//AND searches for the specific element class that is clicked.
//The function sets a localStorage item for repeated use.
//The function sets a sessionStorage variable to true to later check
//if each and/or any button has been clicked.
document.addEventListener("click", function(event) {
    for(x = 0; x < inputSlots.length; x++) {
        if (event.target.matches('.saveBtn')){
            localStorage.setItem("storedItem"+x, inputSlots[x].value);
            sessionStorage.setItem("true"+x, true);
        }
    }
});

//If a button is clicked, then "true"+y value = true.
//If true, then the input.value is set to storedItem.
window.onload = function() {
    for(var y = 0;y < inputSlots.length;y++) {
        if (sessionStorage.getItem("true"+y)) {
            localStorage.getItem("storedItem"+y);
            inputSlots[y].value = localStorage.getItem("storedItem"+y);
        }
    }  
}