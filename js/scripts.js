$(document).ready(function(){
  $("#mycarousel").carousel({interval: 4000});
  $("#carousel-button").click(function(){
    if($("#carousel-button").children("span").hasClass("fa-pause")){
      $("#mycarousel").carousel('pause');
      $("#carousel-button").children("span").removeClass("fa-pause");
      $("#carousel-button").children("span").addClass("fa-play");
    } else {
      $("#mycarousel").carousel('cycle');
      $("#carousel-button").children("span").removeClass("fa-play");
      $("#carousel-button").children("span").addClass("fa-pause");
    }
  });

  $("#login-button").click(function(){
      $("#loginmodal").modal('toggle');
  });

  $("#reserve-table-button").click(function(){
      $("#reservemodal").modal('toggle');
  });
});
