import Ext_field_Picker from './Ext/field/Picker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPickerfieldComponent extends Ext_field_Picker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pickerfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pickerfield', ExtPickerfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pickerfield', HTMLParsedElement.withParsedCallback(ExtPickerfieldComponent))
