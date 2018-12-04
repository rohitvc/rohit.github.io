$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });

  $(".menu li a").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

var submit = document.querySelector("#submit");
var name1 = document.querySelector("#name");
var email = document.querySelector("#email");
var message = document.querySelector("#message");

submit.addEventListener("click", () => {
  name1.value = "";
  email.value = "";
  message.value = "";
});
