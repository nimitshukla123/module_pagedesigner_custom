/**
 * function used to updat the video height on diferent device
 */
function updateVideoHeight() {
    var height;
    if ($(window).width() > 786) {
        height = $('.experience-assets-fullWidthVideo .full-width-video').data('desktop');
    } else {
        height = $('.experience-assets-fullWidthVideo .full-width-video').data('mobile');
    }
    $('.full-width-video, .experience-assets-fullWidthVideo').height(height);
    $('.experience-assets-fullWidthVideo').parent('.region').height(height);
}

document.addEventListener('DOMContentLoaded', function () {
    updateVideoHeight();
});

$(window).resize(updateVideoHeight);
