//getting page elements
var timeContainer = $("#time-container");
var curTimeContainer = $("#cur-day");

//displaying the current date
var curTime = moment().format("hh:mmA on DD-MM-YYYY");
var curHour = moment().hour();
curTimeContainer.text(`It is now ${curTime}`);

//initial hour iteration logic for each row
var h = 9;
var i = 9;
var ampm = "am";
while (h != 0)
{
    //create the hourly row
    var newRow = document.createElement("div");
    newRow.classList.add("row");

    //create the hour element within our new row
    var newHour = document.createElement("span");
    newHour.classList.add("hour", "center");
    newHour.innerHTML = h + ampm;
    newRow.append(newHour);

    //create hourly content field
    var newContent = document.createElement("input");
    newContent.classList.add("content", "center", "transparent");
    newContent.setAttribute("num", i - 9);
    //load values from storage
    var v = localStorage.getItem(`item${i - 9}`);
    if (v != null)
    {
        newContent.value = v;
    }
    newRow.append(newContent);

    //create the save button for each row
    var newSaveBtn = document.createElement("button");
    newSaveBtn.classList.add("save-btn", "center");
    newSaveBtn.setAttribute("num", i - 9);
    newSaveBtn.innerHTML = "save";
    newRow.append(newSaveBtn);

    //set the row color based on time
    if (i < curHour) newRow.classList.add("past");
    else if (i == curHour) newRow.classList.add("present");
    else if (i > curHour) newRow.classList.add("future");

    //add elements to the page
    timeContainer.append(newRow);

    //hour logic, h is 12-hour for displaying while i is 24-hour for less/greater-than comparison
    h++;
    i++;
    if (h > 12) {h = 1; ampm = "pm"};
    if (h == 6) h = 0;
}

//save listener
$(".save-btn").click(function()
{
    var saveID = this.getAttribute("num");
    var saveContent = $(`input[num="${saveID}"]`)[0].value;
    localStorage.setItem(`item${saveID}`, saveContent);
    console.log(saveContent);
});

//delete data listener
$("#erase-btn").click(function()
{
    localStorage.clear();
    $(".content").each(function()
    {
        this.value = "";
    });
});