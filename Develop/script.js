// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. 
  // This code should use the id in the containing time-block as a key to save the 
  // user input in local storage. 
  
  //HINT: What does `this` reference in the click listener function? 
  
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked?
  // How might the id be useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  // HINTS: How can the id attribute of each time-block be used to conditionally add or 
  // remove the past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $(document).ready(function(){
     // Button for clear the day
 $(".saveBtn").on("click", function(){
  userInput = $(this).siblings(".description").val().trim();
  console.log(userInput);
  hourSpan = $(this).parent().attr("id");
  console.log(hourSpan);
  localStorage.setItem(hourSpan, userInput);
})

$(".time-block").each(function(){ 
  console.log("data", $(this))
var element = $(this).attr("id")
$(this).children(".description").val(localStorage.getItem(element))
})

// $('#9am .description').val(localStorage.getItem('9am'));
// $('#10am .description').val(localStorage.getItem('10am'));
// $('#11am .description').val(localStorage.getItem('11am'));
// $('#12pm .description').val(localStorage.getItem('12pm'));
// $('#1pm .description').val(localStorage.getItem('1pm'));
// $('#2pm .description').val(localStorage.getItem('2pm'));
// $('#3pm .description').val(localStorage.getItem('3pm'));
// $('#4pm .description').val(localStorage.getItem('4pm'));
// $('#5pm .description').val(localStorage.getItem('5pm'));

 
// Moment.js
  var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
  var currentHour = moment().format('h:mm:ss a');

// Text hour var
// var nineAm = $("#9am");
// var tenAm = $("#10am");
// var elevenAm = $("#11am");
// var twelvePm = $("#12pm");
// var onePm = $("#1pm");
// var twoPm = $("#2pm");
// var threePm = $("#3pm");
// var fourPm = $("#4pm");
// var fivePm = $("#5pm");
// var sixPm = $("#6pm");
// var sevenPm = $("#7pm");
// var eightPm = $("#8pm");
// var ninePm = $("#9pm");
// var tenPm = $("#10pm");
// var elevenPm = $("#11pm");
// var twelvePmm = $("#12pm");

var hour = moment().hours();
var userInput;
var hourSpan;
console.log("hour", hour) 

function updateHour(){
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id"))
    //console.log("hello-blockHour:", blockHour)

//console.log("this", this) 
    if (blockHour < hour){
      $(this).addClass("past")
    } else if (blockHour === hour){
      $(this).removeClass("past") 
       $(this).addClass("present")
    } else{
      $(this).removeClass("past") 
      $(this).removeClass("present")
      $(this).addClass("future")

    }
  })
}
updateHour()

// var hourString = $(".hour").text().split(" ");

// Date and Hour

var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);
})
