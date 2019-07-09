/**
 * function used to updat the video height on diferent device
 */
function updateVideoHeight() {
    var outerElementHeight = $('.experience-assets-fullWidthVideo').height();
    $('.full-width-video').height(outerElementHeight);
}

document.addEventListener('DOMContentLoaded', function () {
    updateVideoHeight();
});

$(window).resize(updateVideoHeight);
