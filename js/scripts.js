$(function(){

  var badLuckCount = 0;
  var goodLuckCount = 0;


  $("form").submit(function(e){
    e.preventDefault();

    $("input:checkbox[name=bad-luck]:checked").each(function(){
      badLuckCount  ++;
    });

    $("input:checkbox[name=good-luck]:checked").each(function(){
      goodLuckCount  ++;
    });
    console.log("you have this much " + badLuckCount + " bad luck");
    console.log("you have this much " + goodLuckCount + " good luck");
  }) //form function close
}); //document ready close
