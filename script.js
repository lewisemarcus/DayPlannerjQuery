var timeEl = document.getElementById('currentDay');
timeEl.replaceWith(moment().format('dddd, MMMM Do YYYY'));

var timeSlots = document.getElementsByTagName('LABEL');
var inputSlots = document.getElementsByTagName('INPUT');
var saveButtons = document.getElementsByTagName('BUTTON');

var saveClicked = false;
var storedItem = localStorage.getItem("storedItem");

//Checktime function to check for each hour on the calender
//and change background according to time of day
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

for (var k = 0; k < saveButtons.length; k++) {
    /*saveButtons[k].addEventListener("click", saveInfo);*/
    inputSlots[k].setAttribute("autocomplete", "on");
}

//Adding event listener to each button to execute a function
//the function sets a localStorage item for repeated use
//the function sets a sessionStorage variable to true to later check
//if each button has been clicked
saveButtons[0].addEventListener("click", function () {
    localStorage.setItem("storedItem"+0, inputSlots[0].value);
    sessionStorage.setItem("true"+0, true);
});
saveButtons[1].addEventListener("click", function () {
    localStorage.setItem("storedItem"+1, inputSlots[1].value);
    sessionStorage.setItem("true"+1, true);
});
saveButtons[2].addEventListener("click", function () {
    localStorage.setItem("storedItem"+2, inputSlots[2].value);
    sessionStorage.setItem("true"+2, true);
});
saveButtons[3].addEventListener("click", function () {
    localStorage.setItem("storedItem"+3, inputSlots[3].value);
    sessionStorage.setItem("true"+3, true);
});
saveButtons[4].addEventListener("click", function () {
    localStorage.setItem("storedItem"+4, inputSlots[4].value);
    sessionStorage.setItem("true"+4, true);
});
saveButtons[5].addEventListener("click", function () {
    localStorage.setItem("storedItem"+5, inputSlots[5].value);
    sessionStorage.setItem("true"+5, true);
});
saveButtons[6].addEventListener("click", function () {
    localStorage.setItem("storedItem"+6, inputSlots[6].value);
    sessionStorage.setItem("true"+6, true);
});
saveButtons[7].addEventListener("click", function () {
    localStorage.setItem("storedItem"+7, inputSlots[7].value);
    sessionStorage.setItem("true"+7, true);
});
saveButtons[8].addEventListener("click", function () {
    localStorage.setItem("storedItem"+8, inputSlots[8].value);
    sessionStorage.setItem("true"+8, true);
});

//If a button is clicked, then "true"+y value = true.
//If true, then the input.value is set to storedItem.
window.onload = function() {
    for(y = 0;y < inputSlots.length;y++) {
        if (sessionStorage.getItem("true"+y)) {
            localStorage.getItem("storedItem"+y);
            inputSlots[y].value = localStorage.getItem("storedItem"+y);
        }
    }  
}

