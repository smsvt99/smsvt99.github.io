function setUpFades(divID, imgID, gifName, staticName) {

    document.getElementById(divID).addEventListener('mouseenter', function (e) {
        document.getElementById(imgID).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(imgID).style.opacity = '1';
            document.getElementById(imgID).style.backgroundImage = gifName
        }, 200)
    })

    document.getElementById(divID).addEventListener('mouseleave', function (e) {
        document.getElementById(imgID).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(imgID).style.opacity = '1';
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