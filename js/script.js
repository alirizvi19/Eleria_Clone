$(document).ready(function () {
  // $(".menu_click a").click(function () {
  //   $(".hamburger").toggleClass("is-active");
  // });

  $(".menu_click a").click(function () {
    $(".menu_listing").addClass("animtionText");
    $(".slide_menu .menu_listing ul li").each(function (index) {
      var inc = index * 0.2;
      $(this).css("transition-delay", inc + "s");
    });
  });
  $(".close_menu a").click(function () {
    $(".menu_listing").removeClass("animtionText");
    $(".slide_menu .menu_listing ul li").each(function (index) {
      var inc = index * 2;
      $(this).css("transition-delay", "");
    });
  });

  $("#scrollUP").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

// init controller
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#trigger1",
  animation: gsap.fromTo(
    ".text_logo img",
    {
      width: "100%",
    },
    {
      width: "16%",
    }
  ),
  pin: "true",
  start: "bottom",
  end: "bottom -100%",
  scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
  //markers: true,
});

ScrollTrigger.create({
  trigger: ".video_section",
  animation: gsap.fromTo(
    ".vid_width",
    {
      width: "45vw",
    },
    {
      width: "100%",
    }
  ),
  pin: false,
  start: "top 100%",
  end: "top",
  scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
  //markers: true,
});

//toggleClass
function menuSlide() {
  var element = document.querySelector(".slide_menu");
  element.classList.add("showMenu");
}
function closeMenu() {
  var element = document.querySelector(".slide_menu");
  element.classList.remove("showMenu");
}

$(function () {
  // Circle movement
  let circle = document.querySelector(".circle_mask");
  circle.addEventListener("animationiteration", changePosition, false);
  let endPosX = null;
  let endPosY = null;

  function setPosition() {
    let startPosX;
    let startPosY;
    if (endPosX !== null) {
      startPosX = endPosX;
      startPosY = endPosY;
    } else {
      startPosX = -50 + Math.round(Math.random() * 1200);
      startPosY = -50 + Math.round(Math.random() * 768);
    }
    endPosX = -50 + Math.round(Math.random() * 1200);
    endPosY = -50 + Math.round(Math.random() * 768);
    circle.style.setProperty("--startX", startPosX + "px");
    circle.style.setProperty("--startY", startPosY + "px");
    circle.style.setProperty("--endX", endPosX + "px");
    circle.style.setProperty("--endY", endPosY + "px");
  }
  setPosition();
  circle.style.animationName = "slide";

  function changePosition(event) {
    setPosition();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let t3 = gsap.timeline();
  t3.to(".img1", 4, {
    y: -350,
    ease: Power3.easeInOut,
  })
    .to(
      ".img2",
      4,
      {
        y: -190,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".img3",
      4,
      {
        y: -40,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".img4",
      4,
      {
        y: 60,
        ease: Power3.easeInOut,
      },
      "-=4"
    );

  let scene3 = new ScrollMagic.Scene({
    triggerElement: ".deatils_marble",
    duration: "100%",
    triggerHook: 0,
    offset: "0",
  })
    .setTween(t3)
    .setPin(".deatils_marble")
    .addTo(controller);
});
