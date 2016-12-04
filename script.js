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
  
  $("#btnEnterIn").click(function() {
      $("#insertIn").fadeToggle("300");
   });
    
  $("#btnEnterEx").click(function() {
      $("#insertEx").fadeToggle("300");
  }); 
  
});