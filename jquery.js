$('#currentDay').replaceWith(moment().format('dddd, MMMM Do YYYY'));

$('.saveBtn').on('click', function () {
    const time = $(this).parent().attr('id');
    const value = $(this).siblings('textarea').val();
    localStorage.setItem(time, value);
});

for (let x = 9; x < 18; x++) {
    $(`#${x} .description`).val(localStorage.getItem(`${x}`));
}

function checkTime() {
    $('textarea').each(function() {
        if(parseInt($(this).parent().attr('id')) < parseInt(moment().format('HH'))) {
            $(this).removeClass("future present").addClass("past");
        }
        else if(parseInt($(this).parent().attr('id')) == parseInt(moment().format('HH'))) {
            $(this).removeClass("future past").addClass("present");
        }
        else {
            $(this).removeClass("present past").addClass("future");
        }
    })
}

$('textarea').each(function () {
    $(this).attr("autocomplete", "on");
})

checkTime();
setInterval(checkTime, 1000*30);
