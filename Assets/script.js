const currentDate = dayjs().format('MMMM D YYYY');
const $currentDate = $('#CurrentDay');


$(document).ready(function () {
  $("saveBtn").on("click",function(){
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
   localStorage.setItem(time, text); //Locally store text
    
  })
})

  function time(){
    var currentTime = dayjs().hour();

    $(".time-block").each(function () {
      let timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
      else if (timeBlock === currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
  }
    })

    $("#hour-8 .description").val(localStorage.getItem("hour8"));
    $("#hour-9 .description").val(localStorage.getItem("hour9"));
    $("#hour-10 .description").val(localStorage.getItem("hour10"));
    $("#hour-11 .description").val(localStorage.getItem("hour11"));
    $("#hour-12 .description").val(localStorage.getItem("hour12"));
    $("#hour-13 .description").val(localStorage.getItem("hour13"));
    $("#hour-14 .description").val(localStorage.getItem("hour14"));
    $("#hour-15 .description").val(localStorage.getItem("hour15"));
    $("#hour-16 .description").val(localStorage.getItem("hour16"));
    $("#hour-17 .description").val(localStorage.getItem("hour17"));

    time();
  }



