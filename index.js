$("h1").click(function(event){
  $("h1").hide();
});
$("button").click(function(){
  $("h1").slideToggle();
});
$("input").keypress(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(event){ $("h1").css("color", "red"); });
$("h1").before("<button>new</button>");

$("button").on("click", function(){
   $("h1").slideUp().slideDown().animate({ opacity: 0.5});
 });
