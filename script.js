// JavaScript Document
//date and time

function updateClock(){
  var myDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var myMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  var newDate = new Date();
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();
  
  var day = myDay[newDate.getDay()];
  var month = myMonth[newDate.getMonth()];
  var year = newDate.getFullYear();
  var numberDay = newDate.getDate();
  
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  
  var time = hours + ":" + minutes + ":" + seconds;
  var fullDate = day + " " + numberDay + " " + month + " " + year;
  
  $("#Date").html(fullDate);
  $("#time").html(time);
}



$(document).ready(function(){ 


  setInterval('updateClock()', 1000);
 /*
//function that returns date and time in classic format
  function getDate() {
    var d = new Date;
    var date = d.getDate();
    if (date < 10){
      date = "0" + date;
    }
    var month = d.getMonth()+1;
    if (month < 10){
      month = "0" + month;
    }
    var year = d.getFullYear();
    var hours = d.getHours();
    if (hours < 10){
      hours = "0" + hours;
    }    
    var minutes = d.getMinutes();
    if (minutes < 10){
      minutes = "0" + minutes;
    }
    var seconds = d.getSeconds();
    if(seconds < 10){
      seconds = "0" + seconds;
    }

    return date + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds; 
  }
  */
  
  
  //toggling income and expense panels
  $("#btnEnterIn").click(function() {
    $("#insertIn").fadeToggle("300");
  });

  $("#btnEnterEx").click(function() {
    $("#insertEx").fadeToggle("300");
  }); 



 $("#dynTabIn").mytable();
 

   
     //highlighting active text field
    $('input[type="text"]').each(function(){
      $(this).focus(function(){
        $(this).addClass('highlight');
      });
      $(this).blur(function(){
        $(this).removeClass('highlight');
      });
    });



});       //end function ready

