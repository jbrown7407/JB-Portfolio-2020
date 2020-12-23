

$(document).ready(function () {
  //typewriter effect
  let cl = (value) => console.log(value);
  let isAlive =true
  cl("Jquery Active");
  var i = 0;
  var txt = 'Hello, I am Jeffrey Brown. I am a Software Engineer who designs and creates efficient software and websites for modern business needs. ';

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

  //sticky nav
  function myFunction() {
    navbar.classList.add("sticky")
  if (window.pageYOffset >= -1) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  }
  
  //typewriter on home screen
  function typeWriter() {
    let speed = 35;
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
  const $btn6 = document.getElementsByClassName("btn6");
  const $btn7 = document.getElementsByClassName("btn7");

  $(".content").css("margin-left", "0px")
  $($about).hide(); //HIDE ENTIRE DIV
  $($resume).hide();
  $("projects").hide();
  $($contact).hide();
  // $($sidebar).show()
  
  $($btn7).show()
  $($sidebar).hide()


  $($home).show()
  //event.currentTarget TARGET SPECIFIC ELEMENT!!!
  // $( "p" ).click(function( event ) {
  //   alert( event.currentTarget === this ); // true
  // });
  
  typeWriter()

  // replace this with react router
  $(".btn1").click(function btn1() {
    $($home).show().scrollTop();
    $($about).hide();
    $($resume).hide();
    $($projects).hide();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    cl("btn1");
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  });
  $(".btn2").click(function btn2() {
    $(".home").hide();
    $($about).show().scrollTop();
    $($resume).hide();
    $($projects).hide();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    cl("btn2");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  
  });
  $(".btn3").click(function btn3() {
    $(".home").hide();
    $($about).hide();
    $($resume).show().scrollTop();
    $($projects).hide();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    cl("btn3");
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  });
  $(".btn4").click(function btn4() {
    $(".home").hide();
    $($about).hide();
    $($resume).hide();
    $($projects).show().scrollTop();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    //projects
    cl("btn4");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  $(".btn5").click(function btn5() {
    $(".home").hide();
    $($about).hide();
    $($resume).hide();
    $($projects).hide();
    $($contact).show().scrollTop();
    cl("btn5");
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  $(".btn6").click(function btn5() {
    // $($sidebar).hide().css("display", "none").scrollTop();
    $($sidebar).hide();
    cl("CLOSE sidebar btn6");
    $($btn6).hide()
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  $(".btn7").click(function btn5() {
    // $(".sidebar").show().scrollTop();
    $(".sidebar").animate({ width: 'toggle' }, 1);
    // $(".content").animate({width:'toggle'},150)
    $($btn6).show()
    // $(".content").delay(250).css("margin-left", "200px")
    cl("OPEN SIDEBAR btn7");
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
