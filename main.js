"use strict";
$("p").hide()
$("ul").hide()
$(document).ready(function (){
  $("li").click(function (){
    $("p").show();
    $("p").css("color","red");
    $("li").css("text-transform", "uppercase");
  });
});
