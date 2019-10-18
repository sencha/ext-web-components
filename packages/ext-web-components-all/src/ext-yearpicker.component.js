import Ext_panel_YearPicker from './Ext/panel/YearPicker.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtYearpickerComponent extends Ext_panel_YearPicker {
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
//        window.customElements.define('ext-yearpicker', ExtYearpickerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-yearpicker', HTMLParsedElement.withParsedCallback(ExtYearpickerComponent))
