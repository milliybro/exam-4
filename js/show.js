var rowslength = 6;
size_timelinediv = $("#timeline t").length;
console.log(size_timelinediv)//prints 11
var x = 6; //number of cards to be displayed
if (rowslength < 3) {
    $("#loadMoreprodDiv").hide();
 
  }
  if (x == 3) {
    //alert(rowslength)
    $("#showlessprodDiv").hide();
   
  }
  $("#timeline t:lt(" + x + ")").show();
  $("#loadMoreprodDiv").click(function () {
    x = (x + 6 <= size_timelinediv) ? x + 3 : size_timelinediv;
    $("#timeline t:lt(" + x + ")").show();
    $("#showlessprodDiv").show();
    
    if (x == size_timelinediv) {
      $("#loadMoreprodDiv").hide();
    }
  });
  $("#showlessprodDiv").click(function () {
    x = (x - 6 <= 3) ? 3 : x - 6;
    $("#timeline t").not(":lt(" + x + ")").hide();
    $("#loadMoreprodDiv").show();
    $("#showlessprodDiv").show();
  
    if (x == 3) {
      $("#showlessprodDiv").hide();
      
    }
  });