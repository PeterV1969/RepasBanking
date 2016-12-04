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

  //toggling income and expense panels
  $("#btnEnterIn").click(function() {
    $("#insertIn").fadeToggle("300");
  });

  $("#btnEnterEx").click(function() {
    $("#insertEx").fadeToggle("300");
  }); 

  //constructor function 
  function PersonalAccount() {
    this._arrayInAmount = [];
    this._arrayInDesc = [];
    this._arrayDate = [];
    this.counter = 0;

    //methods for ***adding*** income amounts, descriptions and dates

    this.addIncomeAmount = function(incomeAmount) {
        this._arrayInAmount.push(parseFloat(incomeAmount.val()));
        this.counter += (parseFloat(incomeAmount.val()) || 0);
    }

    this.addIncomeDesc = function(incomeDesc) {   
        this._arrayInDesc.push(incomeDesc.val());
    }

    this.addDate = function() {   
        this._arrayDate.push(getDate());
    }


    //methods for ***showing*** income amounts and their descriptions
    this.showIncomeArrayAll = function() {
      return this._arrayInAmount.join(", ");
    }

    this.showIncomeArrayFirst = function() {
      return this._arrayInAmount[0].toString();
    }

    this.showIncomeArrayLast = function() {
      return this._arrayInAmount[(this._arrayInAmount.length)-1].toString();
    }


    this.showIncomeDescArrayAll = function() {
      return this._arrayInDesc.join(", ");
    }

    this.showIncomeDescArrayFirst = function() {
      return this._arrayInDesc[0].toString();
    }

    this.showIncomeDescArrayLast = function() {
      return this._arrayInDesc[(this._arrayInDesc.length)-1].toString();
    }


    this.showDateAll = function() {
      return this._arrayDate.join(", ");
    }

    this.showDateFirst = function() {
      return this._arrayDate[0].toString();
    }

    this.showDateLast = function() {
      return this._arrayDate[(this._arrayDate.length)-1].toString();
    }

    //method that returns actual balance 
    this.showActualBalance = function() {
      return this.counter;
    }
  }

  var $amountIn = $('#amountIn');
  var $descIn = $('#itemIn');
  var $btnAddIn = $('#btnAddIn');
  var $btnShowIn = $('#showIn');
  var $testArea = $('#testArea');
  var pa = new PersonalAccount();

  $btnAddIn.on('click', function(event) {
    if ((!$.isNumeric($amountIn.val())) || ($amountIn.val()) == 0) {
      alert("Input in income text field is invalid. Please enter a number!");   
      $amountIn.val(""); 
      $descIn.val("");   
    } 

    if ($amountIn.val() != "" || $amountIn.val() != 0) {
      pa.addIncomeAmount($amountIn); 
      pa.addIncomeDesc($descIn);
      pa.addDate();
      $descIn.val("");

   //   Counter += (parseFloat($amountIn.val()) || 0);

    } 
    $amountIn.val("");
  });

     //highlighting active text field
    $('input[type="text"]').each(function(){
      $(this).focus(function(){
        $(this).addClass('highlight');
      });
      $(this).blur(function(){
        $(this).removeClass('highlight');
      });
    });

//test of printing values
//$btnShowIn.on('click', function() {
//alert("ok");
// $testArea.html("Array of Incomes: " + pa.showIncomeArrayAll());
//$testArea.html("Array of Descriptions: " + pa.showIncomeDescArrayAll());
// $testArea.html("Array of Dates: " + pa.showDateAll());
//$testArea.html("Actual Balance: " + pa.showActualBalance());
 // });


  //button for action of Income,Expence,Turnover

     $("#showIn").click(function(){         
     $("#dynTabIn").fadeToggle();
      });
 
     $("#showEx").click(function(){
     $("#dynTabEx").fadeToggle();
   
     });
  
      $("#showTo").click(function(){
      $("#dynTabTo").fadeToggle();
                           });


});       //end function ready

