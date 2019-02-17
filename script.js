function setUpFades(divID, imgID, gifName, staticName) {

    document.getElementById(divID).addEventListener('mouseenter', function (e) {
        document.getElementById(imgID).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(imgID).style.opacity = '1';
            document.getElementById(imgID).style.border = '2px solid white';
            document.getElementById(imgID).style.boxShadow = '0 0 5px #FFF, 0 0 15px powderblue, 0 0 17px powderblue';
            document.getElementById(imgID).style.backgroundImage = gifName
        }, 200)
    })

    document.getElementById(divID).addEventListener('mouseleave', function (e) {
        document.getElementById(imgID).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(imgID).style.opacity = '1';
            document.getElementById(imgID).style.border = '2px solid black';
            document.getElementById(imgID).style.boxShadow = 'none';
            document.getElementById(imgID).style.backgroundImage = staticName
        }, 200)
    })

}

setUpFades(
    'greenUpDiv',
    'greenUpImg',
    "url('./gifs/greenup.gif')",
    "url('./images/freezegreenup.gif')"
);
setUpFades(
    'cmsDiv',
    'cmsImg',
    "url('./gifs/cms.gif')",
    "url('./images/freezecms.gif')"
);
setUpFades(
    'tetrisDiv',
    'tetrisImg',
    "url('./gifs/tetris.gif')",
    "url('./images/freezetetris.gif')"
);
setUpFades(
    'stgDiv',
    'stgImg',
    "url('./gifs/stg.gif')",
    "url('./images/freezestg.gif')"
);
setUpFades(
    'hidenSeekDiv',
    'hidenSeekImg',
    "url('./gifs/hidenseek.gif')",
    "url('./images/freezehidenseek.gif')"
);
setUpFades(
    'radioDiv',
    'radioImg',
    "url('./gifs/radio.gif')",
    "url('./images/freezeradio.gif')"
);
setUpFades(
    'brontoscopeDiv',
    'brontoscopeImg',
    "url('./gifs/brontoscope.gif')",
    "url('./images/freezebrontoscope.gif')"
);

window.addEventListener('resize', setMargins())

function setMargins(){
    document.getElementById('title').style.marginTop = (window.innerHeight / 2.2);
}
setMargins()

window.addEventListener('scroll', function(){
    let distanceFromTop = document.getElementById('body').scrollTop;
    heightOfWindow = window.innerHeight;
    document.getElementById('title').style.opacity = 1 - (distanceFromTop / (heightOfWindow / 2.2))
})

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    
    var Scene1 = new ScrollMagic.Scene({
      triggerElement : '#greenUpDiv',
        duration: "500",
        offset: 170,

    })
    .setClassToggle('#greenUpDiv', 'fade-in')
    .addTo(controller)

    var Scene2 = new ScrollMagic.Scene({
        triggerElement : '#cmsDiv',
          duration: "470",
          offset: 200,
      })
      .setClassToggle('#cmsDiv', 'fade-in')
      .addTo(controller)

      var Scene3 = new ScrollMagic.Scene({
        triggerElement : '#tetrisDiv',
          duration: "440",
          offset: 230
      })
      .setClassToggle('#tetrisDiv', 'fade-in')
      .addTo(controller)

      var Scene4 = new ScrollMagic.Scene({
        triggerElement : '#stgDiv',
          duration: "500",
          offset: 170,
      })
      .setClassToggle('#stgDiv', 'fade-in')
      .addTo(controller)

      var Scene5 = new ScrollMagic.Scene({
        triggerElement : '#hidenSeekDiv',
          duration: "470",
          offset: 200,
      })
      .setClassToggle('#hidenSeekDiv', 'fade-in')
      .addTo(controller)

      var Scene6 = new ScrollMagic.Scene({
        triggerElement : '#radioDiv',
          duration: "440",
          offset: 230,
      })
      .setClassToggle('#radioDiv', 'fade-in')
      .addTo(controller)

      var Scene7 = new ScrollMagic.Scene({
        triggerElement : '#brontoscopeDiv',
          duration: "500",
          offset: 170
      })
      .setClassToggle('#brontoscopeDiv', 'fade-in')
      .addTo(controller)

      var Scene8 = new ScrollMagic.Scene({
        triggerElement : '.info',
        duration: "500",
        offset: 150

      })
      .setClassToggle('.info', 'fade-in')
      .addTo(controller)





  })
