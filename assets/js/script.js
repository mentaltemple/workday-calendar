//read from local storage
//assign values to schedule

// current day is displayed at the top of the calendar

//each timeblock is color coded to indicate whether it is in the past, present, or future

//WHEN I click into a timeblock, THEN I can enter an event

//on save button click,

//read the text input from the text area (jQuery)

//save to local storage

$(document).ready(function () {
  //write all of our jQuery inside this function

  //VARIABLE DECLARATIONS
  var currentDay = $("#currentDay");
  currentDay.text(moment().format("dddd, MMMM Do YYYY"));

  //display the current date in that element

  //display the date in the header
  //first, grab a ref to teh element where we want the time displayed

  //FUNCTIONS

  //function will be responsible for checking time and determining which class to add (past, present, future)
  function checkTime() {
    //grab the current hour using moment js
    var currentHour = moment().hours();

    //need to grab the hour from the time block
    //loop thru the time block hours
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
    });

    //check the current hour against each block hour
    //if else
    // if(currentHour)
  }
  checkTime();

  //EVENT HANDLERS
  $(".saveBtn").on("click", function () {
    //need to capture input info and store in local storage
    //need to capture the value of the input and also need to know which time block it's attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  //display items form local storage into time blocks
  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
