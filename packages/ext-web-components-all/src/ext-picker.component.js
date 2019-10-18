import Ext_Picker from './Ext/Picker.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPickerComponent extends Ext_Picker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'picker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-picker', ExtPickerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(ExtPickerComponent))
