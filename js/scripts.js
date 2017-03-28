$(function(){

  var badLuckCount = 0;
  var goodLuckCount = 0;


  $("form").submit(function(e){
    e.preventDefault();
    $("form").hide();
    $("#reset").show();

    $("input:checkbox[name=bad-luck]:checked").each(function(){
      badLuckCount  ++;
    });

    $("input:checkbox[name=good-luck]:checked").each(function(){
      goodLuckCount  ++;
    });

    if (badLuckCount > goodLuckCount){
      $(".unlucky").show();
    } else if (badLuckCount < goodLuckCount){
      $(".lucky").show();
    } else {
      $(".even").show();
    }
  }) //form function close

  //Reset Button
  $("#reset").click(function(){
    location.reload();
  });

}); //document ready close
