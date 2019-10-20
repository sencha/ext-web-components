import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtYearpicker extends Ext_panel_YearPicker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'yearpicker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-yearpicker', ExtYearpicker);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-yearpicker', HTMLParsedElement.withParsedCallback(ExtYearpicker))
//export default reactify(ExtYearpicker);