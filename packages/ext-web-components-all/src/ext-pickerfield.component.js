import Ext_field_Picker from './Ext/field/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPickerfield extends Ext_field_Picker {
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
//        window.customElements.define('ext-pickerfield', ExtPickerfield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pickerfield', HTMLParsedElement.withParsedCallback(ExtPickerfield))
//export default reactify(ExtPickerfield);