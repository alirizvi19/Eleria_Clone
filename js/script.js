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

  // Add parallax scrolling to all images in .paralax-image container
  $(".parallax-image").each(function () {
    // only put top value if the window scroll has gone beyond the top of the image
    if ($(this).offset().top < $(window).scrollTop()) {
      // Get ammount of pixels the image is above the top of the window
      var difference = $(window).scrollTop() - $(this).offset().top;
      // Top value of image is set to half the amount scrolled
      // (this gives the illusion of the image scrolling slower than the rest of the page)
      var half = difference / 10 + "px";

      $(this).find("img").css("top", half);
    } else {
      // if image is below the top of the window set top to 0
      $(this).find("img").css("top", "0");
    }
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

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -2000);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

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
      startPosX = -500 + Math.round(Math.random() * 1200);
      startPosY = -500 + Math.round(Math.random() * 768);
    }
    endPosX = -500 + Math.round(Math.random() * 1200);
    endPosY = -500 + Math.round(Math.random() * 768);
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
  t3.to(".deatils_marble .box_wrap .img1", 4, {
    y: -350,
    ease: Power3.easeInOut,
  })
    .to(
      ".deatils_marble .box_wrap .img2",
      4,
      {
        y: -190,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".deatils_marble .box_wrap .img3",
      4,
      {
        y: -40,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".deatils_marble .box_wrap .img4",
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

document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let t3 = gsap.timeline();
  t3.to(".system_section .left_system", 3, {
    y: -650,
    ease: Power3.easeInOut,
  })
    .to(
      ".system_section .box_wrap .seq1",
      2,
      {
        y: -180,
        ease: Power3.easeInOut,
      },
      "-=2"
    )
    .to(
      ".system_section .box_wrap .seq2",
      2,
      {
        y: -20,
        ease: Power3.easeInOut,
      },
      "-=2"
    )
    .to(
      ".system_section .box_wrap .seq3",
      2,
      {
        y: 130,
        ease: Power3.easeInOut,
      },
      "-=2"
    )
    .to(
      ".system_section .box_wrap .seq4",
      2,
      {
        y: 240,
        ease: Power3.easeInOut,
      },
      "-=2"
    )
    .to(
      ".system_section .box_wrap .seq1 img.textSeq1, .system_section .box_wrap .seq2 img.textSeq2, .system_section .box_wrap .seq2 img.textSeq3, .system_section .box_wrap .seq3 img.textSeq4, .system_section .box_wrap .seq3 img.textSeq5, .system_section .box_wrap .seq3 img.textSeq6, .system_section .box_wrap .seq4 img.textSeq7",
      3,
      {
        opacity: 1,
      }
    );

  let scene3 = new ScrollMagic.Scene({
    triggerElement: ".system_section",
    duration: "2000",
    triggerHook: 0,
    offset: "onLeave",
  })
    .setTween(t3)
    .setPin(".system_section")
    .addTo(controller);
});

window.onload = function () {
  var preloader = document.getElementById("preloader");
  var counter = document.getElementById("counter");
  var count = 0;
  var interval = setInterval(function () {
    if (count >= 100) {
      clearInterval(interval);
      preloader.classList.add("hide");
    } else {
      count++;
      counter.innerText = count + "%";
    }
  }, 20);
};
