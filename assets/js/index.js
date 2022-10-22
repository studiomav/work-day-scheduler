//getting
var timeContainer = $("#time-container");
var curTimeContainer = $("#curTime");

var curTime = moment().format("hh:mmA on DD-MM-YYYY");
var curHour = moment().hour();

curTimeContainer.text(`It is now ${curTime}`);

var h = 9;
var i = 9;
while (h != 0)
{
    //create the hourly row
    var newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.setAttribute("num", i - 9);

    //create the hour element within our new row
    var newHour = document.createElement("span");
    newHour.classList.add("hour");
    newHour.innerHTML = h;
    newRow.append(newHour);

    //create the save button for each row
    var newSaveBtn = document.createElement("span");
    newSaveBtn.classList.add("save-btn")
    newSaveBtn.innerHTML = "save";
    newRow.append(newSaveBtn);

    //set the row color based on time
    if (i < curHour) newRow.classList.add("past");
    else if (i == curHour) newRow.classList.add("present");
    else if (i > curHour) newRow.classList.add("future");

    //add elements to the page
    timeContainer.append(newRow);

    //hour logic
    h++;
    i++;
    if (h > 12) h = 1;
    if (h == 6) h = 0;
}