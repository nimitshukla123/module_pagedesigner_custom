'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

// eslint-disable-next-line valid-jsdoc
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

    if (content.image) {
        var mobileImageTransformation = ImageTransformation.scale(content.image.metaData, 'mobile');
        var desktopImageTransformation = ImageTransformation.scale(content.image.metaData, 'desktop');

        model.image = {
            src: {
                mobile: ImageTransformation.url(content.image.file, mobileImageTransformation),
                desktop: ImageTransformation.url(content.image.file, desktopImageTransformation)
            },
            alt: content.image.file.getAlt(),
            focalPointX: content.image.focalPoint.x * 100 + '%',
            focalPointY: content.image.focalPoint.y * 100 + '%'
        };
    }

    return new Template('experience/components/assets/fullWidthBanner').render(model).text;
};
