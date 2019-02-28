"use strict";

$(document).ready(function() {
  const $buttons = $(".demo__social-btn");
  const $toggle = $(".demo__open-btn");
  let delay = 150;
  let timeouts = [];
  let steps = [];
  let open = false;
  
  let curStep = 0;

  for (let i = 0; i <= 3; i++) {
    steps[i] = "demo__step-" + i;
  }

  function setStep(index) {
    $buttons.slice(0, steps.length - index).removeClass(steps.join(" ")).addClass(steps[index]);
  }

  function clearTimeouts() {
    timeouts.forEach(function(to) {
      clearTimeout(to);
    });
  }

  function animate() {
    if (curStep >= 4) {
      curStep = 0;
      return;
    }

    open = true;
    setStep(curStep);
    timeouts[curStep] = setTimeout(animate, delay);
    curStep++;
  }

  $toggle.on("click", function() {
    if (!open) animate();
    else {
      clearTimeouts();
      $buttons.removeClass(steps.join(" "));
      open = false;
      curStep = 0;
    }
  });
});