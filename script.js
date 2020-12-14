

$(document).ready(function () {
  //typewriter effect
  let cl = (value) => console.log(value);
  let isAlive =true
  cl("Jquery Active");
  var i = 0;
  var txt = 'Hello, I am Jeffrey Brown. I design and create efficient software and websites for modern business needs. ';

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    navbar.classList.add("sticky")
  if (window.pageYOffset >= -1) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



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

  $($about).hide(); //HIDE ENTIRE DIV
  $($resume).hide();
  $($projects).hide();
  $($contact).hide().delay(200)
  // $($sidebar).show()
  $(".content").css("margin-left", "0px")
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
    $(".home").show();
    $($about).hide();
    $($resume).hide();
    $($projects).hide();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    cl("btn1");
  });
  $(".btn2").click(function btn2() {
    $(".home").hide();
    $($about).show();
    $($resume).hide();
    $($projects).hide();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    cl("btn2");
  });
  $(".btn3").click(function btn3() {
    $(".home").hide();
    $($about).hide();
    $($resume).show();
    $($projects).hide();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
    cl("btn3");
  });
  $(".btn4").click(function btn4() {
    $(".home").hide();
    $($about).hide();
    $($resume).hide();
    $($projects).show();
    $($contact).hide();
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
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
    $($sidebar).hide();
    $(".content").css("margin-left", "0px")
  });
  $(".btn6").click(function btn5() {
    $($sidebar).hide().css("display", "none")

    $(".content").css("margin-left", "0px")

    
    cl("CLOSE sidebar btn6");
  });
  $(".btn7").click(function btn5() {
    $(".sidebar").show();
    $(".content").css("margin-left", "200px")
    cl("OPEN sidebar btn6");
    $($btn6).show()

    cl("OPEN SIDEBAR btn7");
  });
});
