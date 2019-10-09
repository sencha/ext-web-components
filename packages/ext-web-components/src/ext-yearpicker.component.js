import Ext_panel_YearPicker from './Ext/panel/YearPicker'
import HTMLParsedElement from './HTMLParsedElement'

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
