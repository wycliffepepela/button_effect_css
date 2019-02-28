MorphSVGPlugin.convertToPath('line, polygon');

var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  arrow = select('#arrow'),
  baseStart = select('#baseStart'),
  outlineBg = select('#outlineBg'),
  tick = select('#tick'),
  baseEnd = select('#baseEnd'),
  baseStartPath = baseStart.getAttribute('d'),
  hit = select('#hit'),
  outline = select('#outline')

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(outline, {
  stroke: 'transparent',
  drawSVG: '41.9% 57.9%'
})
TweenMax.set(outlineBg, {
  //stroke:'transparent',
  drawSVG: '50% 50%'
})

var tl = new TimelineMax({
  repeat: 0
});
tl.to(arrow, 0.5, {
    y: -50,
    ease: Power1.easeOut
  })
  .to(arrow, 0.5, {
    y: 40,
    ease: Power3.easeIn
  })
  .to(baseStart, 0.05, {
    morphSVG: {
      shape: baseEnd
    },
    ease: Linear.easeNone
  }, '-=0.05')
  .to(arrow, 2, {
    y: -20,
    //delay:0.2,
    ease: Elastic.easeOut.config(0.8, 0.6)
  })
  .set(outline, {
    stroke: '#607D8B'
  }, '-=2')
  .set(baseStart, {
    stroke: 'transparent'
  }, '-=2')
  .to(outline, 2, {
    drawSVG: '100% 100%',
    ease: Anticipate.easeOut
  }, '-=2')
  .to(outlineBg, 2, {
    drawSVG: '0% 100%',
    ease: Anticipate.easeOut
  }, '-=2')

.to(outline, 4, {
    drawSVG: '100% 0%',
    ease: SteppedEase.config(36)
  }, '-=0')
  /* .to(outline, 2, {
    drawSVG:'0% 100%',
    ease:Anticipate.easeOut
  },'-=2')
   */
  /* .to(arrow, 1, {
    morphSVG:{shape:tick},
    ease:Elastic.easeOut.config(0.5, 0.4)
  }) */

.to(arrow, 1.2, {
    y: 200,
    ease: Anticipate.easeOut
  })
  .from(tick, 1.2, {
    y: -200,
    //ease:Anticipate.easeIn,
    ease: Power3.easeInOut,
    transformOrigin: '50% 50%'
  }, '-=1.2')

.fromTo(arrow, 1, {
    y: -220
  }, {
    y: 0,
    delay: 1,
    immediateRender: false,
    ease: Anticipate.easeOut
  })
  .to(tick, 1, {
    y: 200,
    ease: Anticipate.easeIn,
    transformOrigin: '50% 50%'
  }, '-=1')
  .staggerTo([outline, outlineBg], 1, {
    cycle: {
      drawSVG: ['41.9% 57.9%', '50% 50%']
    },
    ease: Power2.easeInOut
  }, 0.1, '-=1')

.set(outline, {
    stroke: 'transparent'
  })
  .set(baseStart, {
    stroke: '#607D8B'
  })
  .to(baseStart, 1, {
    morphSVG: {
      shape: baseStartPath
    },
    ease: Elastic.easeOut.config(1, 0.4)
  })
tl.stop(0)
  //ScrubGSAPTimeline(tl);

hit.onclick = function() {

  if (tl.time() == 0) {
    tl.play()
  } else {
    tl.seek(0)
  }
}

tl.timeScale(1.52);
//ScrubGSAPTimeline(tl)