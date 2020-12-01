$(document).ready(function () {
  let cl = (value) => console.log(value);
  cl("Jquery Active");

  // const $div = $('<div>')
  // $($div).addClass('title')
  // $('body').append($div)
  // $($div).text("Div Example")
  // $($div).style.color("blue")

  const $tellplayer = document.getElementById("tellPlayer");
  const $about = document.getElementsByClassName("about");
  const $resume = document.getElementsByClassName("resume");
  const $home = document.getElementsByClassName("home");
  const $projects = document.getElementsByClassName("projects");
  const $contact = document.getElementsByClassName("contact");

  $($about).hide(); //HIDE ENTIRE DIV
  $($resume).hide();
  $($projects).hide();
  $($contact).hide();

  //event.currentTarget TARGET SPECIFIC ELEMENT!!!
  // $( "p" ).click(function( event ) {
  //   alert( event.currentTarget === this ); // true
  // });

  // replace this with react router
  $(".btn1").click(function btn1() {
    $(".home").fadeIn(100).show();
    $($about).hide();
    $($resume).hide();
    $(".projects").hide();
    $($contact).hide();
    cl("btn1");
  });
  $(".btn2").click(function btn2() {
    $(".home").hide();
    $($about).fadeIn(100).show();
    $($resume).hide();
    $($projects).hide();
    $($contact).hide();
    cl("btn2");
  });
  $(".btn3").click(function btn3() {
    $(".home").hide();
    $($about).hide();
    $($resume).fadeIn(100).show();
    $($projects).hide();
    $($contact).hide();
    cl("btn3");
  });
  $(".btn4").click(function btn4() {
    $(".home").hide();
    $($about).hide();
    $($resume).hide();
    $(".projects").fadeIn(100).show();
    $($contact).hide();
    //projects
    cl("btn4");
  });
  $(".btn5").click(function btn5() {
    $(".home").hide();
    $($about).hide();
    $($resume).hide();
    $($projects).hide();
    $($contact).fadeIn(100).show();
    cl("btn5");
  });
});
