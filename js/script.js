$(function() {

  // your js goes in betwen these two things

  // starting cut equal to zero
  var cut = 0;

  // select all of the items
  $(".item").click(function(){
    var amount = $(this).attr("data-amount-cut");

    // this is changing the amount to a number so it can be added up
    var amountNumber = parseFloat(amount);
    cut = cut + amountNumber;

    var cut_so_far = "" ;

    if ( cut > 1000 ) {
        cut_so_far = Math.round( ( cut / 1000 ) * 100 ) / 100 + " trillion" ;
    }
    else {
      cut_so_far = Math.round( cut * 100 ) /100 + " billion" ;
    }

    // updates the #cut so far text
    $("#cut-so-far").text(cut_so_far);

    //selects the thing we clicked on and adds the class already cut
    $(this).addClass("already-cut");

    $(this).unbind('click') ;

    if (cut > 2000) {
      console.log("This is greater than 2000");
      $(".congratulations").show();
    }

  }); // end of what happens when item is clicked on


}); // don't delete this