/* eslint-disable valid-jsdoc */

'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Redner Logic for Full Width Video
 * @param {Object} context
 * @returns {string}
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    if (content.text_headline) {
        model.text_headline = content.text_headline;
    }

    model.video_url_mp4 = content.video_url_mp4;
    model.video_url_ogg = content.video_url_ogg;

    // eslint-disable-next-line no-undef
    model.height_desktop = !empty(content.height_desktop) ? content.height_desktop : 700;
    // eslint-disable-next-line no-undef
    model.height_mobile = !empty(content.height_mobile) ? content.height_mobile : 700;

    return new Template('experience/components/assets/fullWidthVideo').render(model).text;
};
