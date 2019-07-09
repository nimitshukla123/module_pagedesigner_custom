'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for the assets.headlinebanner.
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    model.text_headline = content.text_headline;
    if (content.text_subline) {
        model.text_subline = content.text_subline;
    }

    if (content.video) {
        model.video_url = content.video.getURL();
    }

    if (content.video_url) {
        model.video_url = content.video_url;
    }

    return new Template('experience/components/assets/fullWidthVideo').render(model).text;
};
