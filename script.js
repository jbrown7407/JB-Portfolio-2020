

$(document).ready(function () {
  //typewriter effect
  let cl = (value) => console.log(value);
  let isAlive =true
  cl("Jquery Active");
  var i = 0;
  var txt = 'Hello, I am Jeffrey Brown. I design and create efficient software and websites for modern business needs. ';
  var speed = 30;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("firstText").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }

  }

  const $tellplayer = document.getElementById("tellPlayer");
  const $about = document.getElementsByClassName("about");
  const $resume = document.getElementsByClassName("resume");
  const $home = document.getElementsByClassName("home");
  const $projects = document.getElementsByClassName("projects");
  const $contact = document.getElementsByClassName("contact");
  const $sidebar = document.getElementsByClassName("sidebar");

 
  $($about).hide(); //HIDE ENTIRE DIV
  $($resume).hide();
  $($projects).hide();
  $($contact).hide().delay(200)
  $($sidebar).show()

  $($home).show()
  //event.currentTarget TARGET SPECIFIC ELEMENT!!!
  // $( "p" ).click(function( event ) {
  //   alert( event.currentTarget === this ); // true
  // });
  typeWriter()
  // replace this with react router
  $(".btn1").click(function btn1() {
    $(".home").show();
    $($about).hide();
    $($resume).hide();
    $(".projects").hide();
    $($contact).hide();
    cl("btn1");
  });
  $(".btn2").click(function btn2() {
    $(".home").hide();
    $($about).show();
    $($resume).hide();
    $($projects).hide();
    $($contact).hide();
    cl("btn2");
  });
  $(".btn3").click(function btn3() {
    $(".home").hide();
    $($about).hide();
    $($resume).show();
    $($projects).hide();
    $($contact).hide();
    cl("btn3");
  });
  $(".btn4").click(function btn4() {
    $(".home").hide();
    $($about).hide();
    $($resume).hide();
    $(".projects").show();
    $($contact).hide();
    //projects
    cl("btn4");
  });
  $(".btn5").click(function btn5() {
    $(".home").hide();
    $($about).hide();
    $($resume).hide();
    $($projects).hide();
    $($contact).show();
    cl("btn5");
  });
  $(".btn6").click(function btn5() {
    $(".sidebar").hide().css("display", "none");
    cl("btn6");
  });
  $(".btn7").click(function btn5() {
    $(".sidebar").show();
    cl("btn7");
  });
});
