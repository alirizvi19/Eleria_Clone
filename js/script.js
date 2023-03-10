$(document).ready(function () {
  $(".menu_click a").click(function () {
    $(".hamburger").toggleClass("is-active");
  });
});
//toggleClass
function menuToggle() {
  var element = document.querySelector(".slide_menu");
  element.classList.toggle("showMenu");
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
