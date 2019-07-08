'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');

/**
 * Render logic for the layouts.carousel.
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var component = context.component;

    // automatically register configured regions
    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    model.id = 'slickCarousel-' + PageRenderHelper.safeCSSClass(context.component.getID());

    model.headline = component.getAttribute('slider_headline');

    return new Template('experience/components/layouts/slickCarousel').render(model).text;
};
