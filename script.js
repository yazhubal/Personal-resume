$(document).ready(function(){
  $(".theme-switcher").click(function(){
  $(this).text(function(i, v){
     return v === 'bright' ? 'dark' : 'bright'
  });
  });
});

$(function() {
$('.theme-switcher').on("click", function(event) {
  if ($('#theme').hasClass('light')) {
    $('#theme').removeClass('light');
    $('#theme').addClass('dark');
    $('#theme').css({
      "color": $('#theme').data("styleswitch-color"),
      "background-color":  $('#theme').data("styleswitch-bgcolor")
    });
    $('.linkline').css({
      "-webkit-text-fill-color": $('.linkline').data("styleswitch-fillcolor") 
    });
  } else {
    $('#theme').addClass('light');
    $('#theme').removeClass('dark');
     $('#theme').css({
      "color": "#333",
      "background-color": "#fff"
    });
    $('.linkline').css({
      "-webkit-text-fill-color": "#fff"
    });
  }
  event.preventDefault();
});
});