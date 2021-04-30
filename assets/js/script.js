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

  //EVENT HANDLERS
  $(".saveBtn").on("click", function () {
    //need to capture input info and store in local storage
    //need to capture the value of the input and also need to know which time block it's attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });
});
