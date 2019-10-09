import Ext_picker_SelectPicker from './Ext/picker/SelectPicker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSelectpickerComponent extends Ext_picker_SelectPicker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'selectpicker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectpicker', ExtSelectpickerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-selectpicker', HTMLParsedElement.withParsedCallback(ExtSelectpickerComponent))
