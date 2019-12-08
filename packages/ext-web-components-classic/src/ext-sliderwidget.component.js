//import Ext_slider_Widget from '@sencha/ext-runtime-base/dist/./Ext/slider/Widget.js';
import Ext_slider_Widget from './Ext/slider/Widget.js';
import ElementParser from './ElementParser.js';

export default class EWCSliderwidget extends Ext_slider_Widget {
    constructor() {
        super ([], []);
        this.xtype = 'sliderwidget';
    }

}
window.customElements.define('ext-sliderwidget', ElementParser.withParsedCallback(EWCSliderwidget));

