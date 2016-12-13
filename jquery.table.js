(function($){

jQuery.fn.mytable = function ()
{
var inCounter=0;
var exCounter=0;

var arrayInVal = new Array();
var arrayExVal = new Array();

 function getDate() {
    var d = new Date();
      dFormat = [d.getDate(),
                 d.getMonth()+1,
                 d.getFullYear()].join('/')+' '+
                [d.getHours(),
                 d.getMinutes(),
                 d.getSeconds()].join(':');
      
      return dFormat;
    }
    
//Add income
$("#btnAddIn").click(function(){
   var income = {
    	Amount:   $("#amountIn").val(),
    	Item: 	  $("#itemIn").val(), 
    	Id: 	  arrayInVal.length+1,
    };

    arrayInVal.push(income.Amount);  
        if(income.Amount != "" && income.Amount !=0) {
            if(income.Amount<0){
                alert("You can't enter negative Value!");
                   }else{
                     $(".tbody").append("<tr class='income'><td>"+income.Id+"</td>"+"<td>"+income.Amount+"</td>"+"<td>"+income.Item+"</td>"
                                       +"<td>"+getDate()+"</td>"+"<td><button id='but1' class='glyphicon glyphicon-remove-circle' style='background: red'>Remove</button></td></tr>");

 inCounter += parseFloat(income.Amount);                      
      }
    }
  });

//Add expense
$("#btnAddEx").click(function(){
  var expense = {
    	Amount: $("#amountEx").val(),
    	Item:   $("#itemEx").val(), 
    	Id: 	arrayExVal.length+1,
    };
     arrayExVal.push(expense.Amount);
         if(expense.Amount != "" && expense.Amount !=0) {
             if(expense.Amount<0){
                 alert("You can't enter negative Value!")
                    }else{
                      $(".tbody").append("<tr class='expense'><td>"+expense.Id+"</td>"+"<td>"+"-"+expense.Amount+"</td>"+"<td>"+expense.Item+"</td>"
                                       +"<td>"+getDate()+"</td>"+"<td><button id='but2' class='glyphicon glyphicon-remove-circle' style='background: red'>Remove</button></td></tr>");         
                   
  exCounter += parseFloat(expense.Amount);                  
     }                                   
    }
 });  
 
 //***SUM***
$("#btnAddIn, #btnAddEx").click(function(){
  var getAb = inCounter - exCounter;
       $("#actualBalance").text(getAb);
});  
    
    //Remove incomes
$("#btnRemAllIn").click(function(){ 
  var r = confirm("Delete all?");
    if (r == true) {
      alert("You pressed OK! All income data will be deleted.");
           
           $("#dynTabIn tr:not(.dyntab,.expense)").remove();
                                
          inCounter = 0;
          var getAb = inCounter - exCounter;
       $("#actualBalance").text(getAb);
          } else {
        alert("You pressed Cancel!");
        return false;
        }
    });

//Remove current row income
$("#dynTabIn").on("click","#but1",function(){
   var r = confirm("Delete row!");
     if (r == true) {   
      var curElVal= $(this).closest("tr").find("td:eq(1)").text();

      $(this).closest("tr").remove();
            
      inCounter-=parseFloat(curElVal); 
        var getAb = inCounter - exCounter;
       $("#actualBalance").text(getAb);        
         } else {
           return false;
        }
    });  

//Remove expenses
$("#btnRemAllEx").click(function(){  
  var r = confirm("Delete all?");
    if (r == true) {
      alert("You pressed OK! All expense data will be deleted.");
             
        $("#dynTabIn tr:not(.dyntab,.income)").remove();
                               
          exCounter = 0;
          var getAb = inCounter - exCounter;
       $("#actualBalance").text(getAb);
          } else {
             alert("You pressed Cancel!");
             return false;
      }
});

//Remove current row expense
$("#dynTabIn").on("click","#but2",function(){
  var r = confirm("Delete row!");
    if (r == true) {
       var curElVal=$(this).closest("tr").find("td:eq(1)").text();
           $(this).closest("tr").remove();
              
              exCounter+=parseFloat(curElVal);
               var getAb = inCounter - exCounter;
       $("#actualBalance").text(getAb);    
          } else {
             return false;
       }    
  });
         
 //Show income
$("#showIn").click(function(){
	$(".income *").show();
      $(".expense *").hide();
   });  

 //Show expense
$("#showEx").click(function(){
   $(".expense *").show();
       $(".income *").hide(); 
   });
      
 //Show turnovers
$("#showTo").click(function(){
  $(".income *,.expense *").show();        
    });

  }
})(jQuery);