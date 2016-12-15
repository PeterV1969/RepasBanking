(function($){

jQuery.fn.mytable = function ()
{
var inCounter=0;
var exCounter=0;


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
 

//add table header 
$("#btnAddIn, #btnAddEx").one("click",function(){
  if ($(".dyntabHead").length===0) {
$("#content2").append("<table  class='table' id='dynTab'><thead><tr class='dyntabHead'><th> Value </th><th> Item description </th><th> Date dd/mm/yyyy </th><th> Remove row</th></tr></thead><tbody class='tbody'></tbody></table>"); 
   }
   });


//Add income
$("#btnAddIn").click(function(){
   var income = {
    	Amount:   $("#amountIn").val(),
    	Item: 	  $("#itemIn").val(), 
    };  
        if(income.Amount != "" && income.Amount !=0) {
            if(income.Amount<0){
                alert("You can't enter negative Value!");
                   }else{           
                     $(".table").append("<tr class='income'><td>"+income.Amount+"</td>"+"<td>"+income.Item+"</td>"
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
    };
         if(expense.Amount != "" && expense.Amount !=0) {
             if(expense.Amount<0){
                 alert("You can't enter negative Value!")
                    }else{ 
                      $(".table").append("<tr class='expense'><td>"+"-"+expense.Amount+"</td>"+"<td>"+expense.Item+"</td>"
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
           
           $(".tbody tr:not(.expense)").remove();
                                
          inCounter = 0;
          var getAb = inCounter - exCounter;
       $("#actualBalance").text(getAb);
          } else {
        alert("You pressed Cancel!");
        return false;
        }
    });

//Remove current row income
$("#content2").on("click","#but1",function(){
   var r = confirm("Delete row!");
     if (r == true) {   
      var curElVal= $(this).closest("tr").find("td:eq(0)").text();
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
             
        $(".tbody tr:not(.income)").remove();
                               
          exCounter = 0;
          var getAb = inCounter - exCounter;
       $("#actualBalance").text(getAb);
          } else {
             alert("You pressed Cancel!");
             return false;
      }
});

//Remove current row expense
$("#content2").on("click","#but2",function(){
  var r = confirm("Delete row!");
    if (r == true) {
       var curElVal=$(this).closest("tr").find("td:eq(0)").text();
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
	$(".income *,.tableIn").show();
      $(".expense *").hide();
   });  

 //Show expense
$("#showEx").click(function(){
   $(".expense *").show();
       $(".income *,.tableIn").hide(); 
   });
      
 //Show turnovers
$("#showTo").click(function(){
  $(".income *,.expense *").show();        
    });

  }
})(jQuery);